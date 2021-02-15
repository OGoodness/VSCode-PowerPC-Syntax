'use strict';

import * as path from 'path';
import vscode = require('vscode');
import { workspace, ExtensionContext, Progress, ProgressLocation, CancellationToken } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient';
import { AsmDefinitionProvider } from './definition-provider/definition-provider';
import { AsmReferenceProvider } from './reference-provider/reference-provider';
import { AsmHoverProvider } from './hover-provider/hover-provider';
import { AsmDocumentSymbolProvider } from './document-symbol-provider/document-symbol-provider';
import { AsmCompletionItemProvider } from './completion-item-provider/completion-item-provider';
import { getAsmFiles, getAsmFile, getChangeLogPath, getReadmePath } from './files';
import { VersionManager } from './VersionManager';
import { Commands, TriggerCharacters, UpdateNotificationItem } from './constants';

const asmDefinitionProvider = new AsmDefinitionProvider();
const asmReferenceProvider = new AsmReferenceProvider();
const asmHoverProvider = new AsmHoverProvider();
const asmDocumentSymbolProvider = new AsmDocumentSymbolProvider();
const asmCompletionItemProvider = new AsmCompletionItemProvider(asmDefinitionProvider);
let client: LanguageClient;

const asmDocFilter: vscode.DocumentFilter = {
    language: 'asm',
    scheme: 'file'
};

function getSetupExtensionClient (context: ExtensionContext): LanguageClient {
    const serverModule = context.asAbsolutePath(path.join('server', 'out', 'server.js'));
    const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
    const serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: debugOptions
        }
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [
            { scheme: 'file', language: 'asm' }
        ],
        synchronize: {
            fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
        }
    };

    return new LanguageClient(
        'asmLanguageServer',
        'ASM Language Server',
        serverOptions,
        clientOptions
    );
}

function registerProviders (context: ExtensionContext): void {
    context.subscriptions.push(vscode.languages.registerDefinitionProvider(asmDocFilter, asmDefinitionProvider));
    context.subscriptions.push(vscode.languages.registerReferenceProvider(asmDocFilter, asmReferenceProvider));
    context.subscriptions.push(vscode.languages.registerHoverProvider(asmDocFilter, asmHoverProvider));
    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(asmDocFilter, asmDocumentSymbolProvider));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(
        asmDocFilter, asmCompletionItemProvider, TriggerCharacters.Dot, TriggerCharacters.Backslash
    ));
}

function registerCommands (context: ExtensionContext): void {
    context.subscriptions.push(vscode.commands.registerCommand(
        Commands.ReparseWorkSpace,
        () => initializeProviders()
    ));
    context.subscriptions.push(vscode.commands.registerCommand(
        Commands.ShowExtensionChanges,
        () => showExtensionChanges()
    ));
    context.subscriptions.push(vscode.commands.registerCommand(
        Commands.About,
        () => showReadme()
    ));
}

function initializeProviders (): void {
    vscode.window.withProgress({
        location: ProgressLocation.Notification,
        title: 'ASM File Support',
        cancellable: false
    }, (progress: Progress<{increment?: number, message?: string}>, token: CancellationToken) => {
        progress.report({ message: 'Parsing Workspace...' });

        return new Promise((resolve, reject) => {
            if (token.isCancellationRequested) {
                reject();
            }

            getAsmFiles()
                .then(wsFolders => {
                    asmDefinitionProvider.parseWorkspaceFolders(wsFolders);
                    asmReferenceProvider.parseWorkspaceFolders(wsFolders);

                    resolve(1);
                });
        });
    });
}

function showReadme () {
    const readmePath: string = getReadmePath();
    vscode.commands.executeCommand(Commands.ShowMarkDownPreview, vscode.Uri.file(readmePath));
}

function showExtensionChanges (): void {
    const changeLogPath: string = getChangeLogPath();
    vscode.commands.executeCommand(Commands.ShowMarkDownPreview, vscode.Uri.file(changeLogPath));
}

function showNewChanges (currentVersion: string, previousVersion: string): void {
    if (!previousVersion || (previousVersion !== currentVersion)) {
        vscode.window.showInformationMessage(
            'PowerPC Syntax just got updated, check out what\'s new!',
            UpdateNotificationItem.SeeUpdates,
            UpdateNotificationItem.Dismiss
        )
        .then(choosenOption => {
            if (choosenOption === UpdateNotificationItem.SeeUpdates) {
                showExtensionChanges();
            }
        });
    }
}

export function activate (context: ExtensionContext): void {
    const versionManager: VersionManager = new VersionManager(context);
    client = getSetupExtensionClient(context);

    showNewChanges(versionManager.getCurrentVersion(), versionManager.getSavedVersion());
    versionManager.UpdateSavedVersion();

    registerProviders(context);
    registerCommands(context);
    initializeProviders();

    vscode.workspace.onDidSaveTextDocument(e => {
        getAsmFile(e.uri.fsPath)
            .then(file => {
                const filePath: string = file[0] as string;

                asmDefinitionProvider.parseSingleFile(filePath);
                asmReferenceProvider.parseSingleFile(filePath);
            });
    }, null, context.subscriptions);

    client.start();
}

export function deactivate (): Thenable<void> {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
