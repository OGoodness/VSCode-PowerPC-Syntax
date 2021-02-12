import vscode = require('vscode');

export function getExtensionConfiguration (): vscode.WorkspaceConfiguration {
    return vscode.workspace.getConfiguration('asmLanguageServer');
}

export function showNotification (message: string): void {
    const prefix: string = 'Soy File Support:';

    vscode.window.showInformationMessage(`${prefix} ${message}`);
}
