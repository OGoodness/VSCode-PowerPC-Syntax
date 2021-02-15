import vscode = require('vscode');

export function getExtensionConfiguration (): vscode.WorkspaceConfiguration {
    return vscode.workspace.getConfiguration('asmLanguageServer');
}

export function showNotification (message: string): void {
    const prefix: string = 'Asm File Support:';

    vscode.window.showInformationMessage(`${prefix} ${message}`);
}
