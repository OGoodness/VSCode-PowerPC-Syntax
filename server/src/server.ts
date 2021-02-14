'use strict';

import { ISoyConfigSettings, IErrorItem } from './interfaces';
import patterns from './patterns';
import * as path from 'path'
import * as fs from 'fs'
import {URI} from 'vscode-uri'
import {
    createConnection,
    TextDocuments,
    Connection,
    Diagnostic,
    DiagnosticSeverity,
    Hover,
    HoverParams,
    ProposedFeatures,
    CodeActionKind,
    CompletionItem,
    TextDocumentPositionParams,
    InitializeParams,
    DidChangeConfigurationNotification,
    TextDocumentSyncKind,
    TextDocumentChangeEvent,
    DefinitionOptions,
    DefinitionLink,
    Range,
    Location,
    DefinitionParams
} from 'vscode-languageserver/node';
import {TextDocument} from 'vscode-languageserver-textdocument'
import {CompletionItemProvider} from './completion-item-provider/completion-item-provider'
import {HoverProvider} from './hover-provider/hover-provider'
import {DefinitionProvider} from './definition-provider/definition-provider'

const definitionProvider = new DefinitionProvider()
const completionProvider = new CompletionItemProvider(definitionProvider)
const hoverProvider = new HoverProvider()


const connection: Connection = createConnection(ProposedFeatures.all)
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);
let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;

connection.onInitialize((params: InitializeParams) => {
    const capabilities = params.capabilities;

    // Does the client support the `workspace/configuration` request?
    // If not, we will fall back using global settings
    hasConfigurationCapability =
        capabilities.workspace && !!capabilities.workspace.configuration;
    hasWorkspaceFolderCapability =
        capabilities.workspace && !!capabilities.workspace.workspaceFolders;

    return {
        capabilities: {
            textDocumentSync: {
				openClose: true,
				change: TextDocumentSyncKind.Full
            },
            hoverProvider: true,
            completionProvider: {
                resolveProvider: false,
            },
            signatureHelpProvider: {
            },
            definitionProvider: true,
            referencesProvider: { workDoneProgress: true },
            documentHighlightProvider: true,
            documentSymbolProvider: true,
            workspaceSymbolProvider: true,
            // codeActionProvider: {
            //     codeActionKinds: [CodeActionKind.Refactor, CodeActionKind.Source, CodeActionKind.SourceOrganizeImports],
            //     resolveProvider: true
            // },
            // codeLensProvider: {
            //     resolveProvider: false
            // },
            documentFormattingProvider: true,
            documentRangeFormattingProvider: true,
            // documentOnTypeFormattingProvider: {
            //     firstTriggerCharacter: ';',
            //     moreTriggerCharacter: ['}', '\n']
            // },
            renameProvider: true,
            workspace: {
                workspaceFolders: {
                    supported: true,
                    changeNotifications: true
                }
            },
            implementationProvider: {
                id: "AStaticImplementationID",
                documentSelector: ['asm', 's']
            },
            typeDefinitionProvider: true,
            declarationProvider: { workDoneProgress: true },
            executeCommandProvider: {
                commands: ['testbed.helloWorld']
            },
            callHierarchyProvider: true,
            selectionRangeProvider: { workDoneProgress: true }
        }
    };
});

connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        // Register for all configuration changes.
        connection.client.register(
            DidChangeConfigurationNotification.type,
            undefined
        );
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders(_event => {
            connection.console.log('Workspace folder change event received.');
        });
        
    }
});

const defaultSettings: ISoyConfigSettings = {
    ignoreTodo: false,
    ignoreBreakingChange: false,
    ignoreErrors: false,
    disallowAllowemptydefault: false
};
let globalSettings: ISoyConfigSettings = defaultSettings;

const documentSettings: Map<string, Thenable<ISoyConfigSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
    if (hasConfigurationCapability) {
        documentSettings.clear();
    } else {
        globalSettings = (
            (change.settings.asmLanguageServer || defaultSettings)
        ) as ISoyConfigSettings;
    }

    documents.all().forEach(validateAsmDocument);
});

function getDocumentSettings (resource: string): Thenable<ISoyConfigSettings> {
    if (!hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource,
            section: 'asmLanguageServer'
        });
        documentSettings.set(resource, result);
    }
    return result;
}

documents.onDidClose(e => {
    documentSettings.delete(e.document.uri);
    connection.sendDiagnostics({ uri: e.document.uri, diagnostics: [] });
});

documents.onDidChangeContent((event: TextDocumentChangeEvent<TextDocument>) => {

    validateAsmDocument(event.document);
});


function validateWithPattern (errorItem: IErrorItem, text: string, textDocument: TextDocument, severity: DiagnosticSeverity): Diagnostic[] {
    const pattern: RegExp = errorItem.pattern;
    const message: string = errorItem.message;
    const diagnosticResults: Diagnostic[] = [];
    let m: RegExpExecArray;

    while (m = pattern.exec(text)) {
        const startPosition: number = m.index + m[0].indexOf(m[1]);

        diagnosticResults.push({
            severity,
            range: {
                start: textDocument.positionAt(startPosition),
                end: textDocument.positionAt(startPosition + m[1].length)
            },
            message: `${m[1]}: ${message}.`,
            source: 'soy-ext'
        });
    }

    return diagnosticResults;
}

function validatePatterns (errorItems: any[], text: string, textDocument: TextDocument, severity: DiagnosticSeverity): Diagnostic[] {
    let diagnosticResults: Diagnostic[] = [];

    errorItems.forEach(errorItem  => {
        diagnosticResults = diagnosticResults.concat(validateWithPattern(errorItem, text, textDocument, severity));
    });

    return diagnosticResults;
}

async function validateAsmDocument (textDocument: TextDocument): Promise<void> {
    const settings = await getDocumentSettings(textDocument.uri);
    const text = textDocument.getText();
    const diagnostics: Diagnostic[] = [];

    if (!settings.ignoreErrors) {
        diagnostics.push(...validatePatterns(patterns.error, text, textDocument, DiagnosticSeverity.Error));
    }

    if (!settings.ignoreTodo) {
        diagnostics.push(...validatePatterns(patterns.todo, text, textDocument, DiagnosticSeverity.Information));
    }

    if (!settings.ignoreBreakingChange) {
        diagnostics.push(...validatePatterns(patterns.breakingChange, text, textDocument, DiagnosticSeverity.Information));
    }

    if (settings.disallowAllowemptydefault) {
        diagnostics.push(...validatePatterns(patterns.allowemptydefault, text, textDocument, DiagnosticSeverity.Error));
    }

    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}


connection.onHover((hoverParams: HoverParams): Hover => {
    // console.log(hoverParams)
    let uri = hoverParams.textDocument.uri
    let languageId = path.extname(uri).slice(1).toLowerCase()
	let document = null
    try {
        let text = (fs.readFileSync(URI.parse(uri).fsPath)).toString('utf8')
        
        // Very low resource usage for creating one document.
        document = TextDocument.create(uri, languageId, 1, text)
    }
    catch (err) {
        console.error(err)
    }
    return hoverProvider.provideHover(document, hoverParams.position)
})

connection.onDefinition((defParams: DefinitionParams): Location[] => {
    let uri = defParams.textDocument.uri
    let languageId = path.extname(uri).slice(1).toLowerCase()
	let document = null
    try {
        let text = (fs.readFileSync(URI.parse(uri).fsPath)).toString('utf8')
        
        // Very low resource usage for creating one document.
        document = TextDocument.create(uri, languageId, 1, text)
    }
    catch (err) {
        console.error(err)
    }
    return definitionProvider.provideDefinition(document, defParams.position)
})

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(positionParams: TextDocumentPositionParams): CompletionItem[] => {
        let documentIdentifier = positionParams.textDocument
        let position = positionParams.position
        let document = documents.get(documentIdentifier.uri)
        
        if (!document) {
			return null
		}

		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
        // info and always provide the same completion items.
        console.log("Inside Completion")
        console.log(positionParams)
		return completionProvider.provideCompletionItems(document, position)
	}
);


// connection.onDidChangeWatchedFiles(_change => {
//     connection.console.log('We received an file change event');
// });

documents.listen(connection);
connection.listen();
