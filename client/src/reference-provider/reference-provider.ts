import { VariablePathDescription, VariablePathMap } from '../interfaces';
import vscode = require('vscode');
import { parseFilesForReferences, parseFile } from './parse';
import { getMatchingVariable, createLocation, normalizeAliasTemplate } from '../template-utils';

export class AsmReferenceProvider implements vscode.ReferenceProvider {
    private callMap: VariablePathMap;

    public parseWorkspaceFolders (wsFolders: string[][]): void {
        this.callMap = parseFilesForReferences(wsFolders);
    }

    public parseSingleFile (documentPath: string): void {
        this.removeCallsFromFile(documentPath);
        parseFile(documentPath, this.callMap);
    }

    public provideReferences (document: vscode.TextDocument, position: vscode.Position): Thenable<vscode.Location[]> {
        const documentText: string = document.getText();
        const wordRange: vscode.Range = document.getWordRangeAtPosition(position, /[\w\d.]+/);
        const variableToSearchFor: string = document.getText(wordRange);
        let records: VariablePathDescription[];

        return new Promise<vscode.Location[]>(resolve => {
            if (!variableToSearchFor || !this.callMap) {
                resolve(null);
            }

            if (variableToSearchFor.startsWith('.')) {
                // const namespace: string = getIncludes(documentText);
                records = this.callMap[`${variableToSearchFor}`];
            } else {
                const alias: string = getMatchingVariable(variableToSearchFor, documentText);

                if (alias) {
                    const fullTemplatePath = normalizeAliasTemplate(alias, variableToSearchFor);
                    records = this.callMap[fullTemplatePath];
                } else {
                    records = this.callMap[variableToSearchFor];
                }
            }
            resolve(records && records.map(info => createLocation(info)));
        });
    }

    private removeCallsFromFile (documentPath: string): void {
        Object.keys(this.callMap).forEach(key => {
            this.callMap[key] = this.callMap[key].filter(
                pathDescription => pathDescription.path !== documentPath
            );
        });
    }
}
