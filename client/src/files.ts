import vscode = require('vscode');
import fg = require('fast-glob');
import path = require('path');
import { ExtensionData } from './constants';
import { getExtensionConfiguration } from './utils';

function excludeFromFileSearch(wsPath:string): string[] {
    return [
        path.join('!**', 'node_modules', '.git'),
        ...getExtensionConfiguration().excludePaths.map(excludedPath => '!' + path.join(wsPath,excludedPath))
    ]
};

export function getAsmFiles (): Thenable<string[][]> {
    const promises = [];
    //TODO: More file extensions
    vscode.workspace.workspaceFolders.forEach(wsFolder => {
        const globalAsmFilesPath = path.join(wsFolder.uri.fsPath, '**', '*.asm');
        const globalAsmSFilesPath = path.join(wsFolder.uri.fsPath, '**', '*.s');

        promises.push(fg.async([globalAsmFilesPath, ...excludeFromFileSearch(wsFolder.uri.fsPath)]));
        promises.push(fg.async([globalAsmSFilesPath, ...excludeFromFileSearch(wsFolder.uri.fsPath)]));
    });

    return Promise.all(promises);
}

export function getAsmFile (filePath: string): Thenable<string[]> {
    return fg.async(filePath);
}

function getExtensionPath (): string {
    return vscode.extensions.getExtension(ExtensionData.ExtensionIdentifier).extensionPath;
}


//TODO: Why
export function getChangeLogPath (): string {
    const extensionPath: string = getExtensionPath();

    return path.join(extensionPath, 'CHANGELOG.md');
}

export function getReadmePath (): string {
    const extensionPath: string = getExtensionPath();

    return path.join(extensionPath, 'README.md');
}
