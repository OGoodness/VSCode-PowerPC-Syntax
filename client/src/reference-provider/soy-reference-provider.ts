import { VariablePathDescription, VariablePathMap } from './../interfaces';
import vscode = require('vscode');
import { parseFilesForReferences, parseFile } from './parse';
import { getIncludes, getMatchingAlias, createLocation, normalizeAliasTemplate } from '../template-utils';

export class SoyReferenceProvider implements vscode.ReferenceProvider {
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
        const templateToSearchFor: string = document.getText(wordRange);
        let records: VariablePathDescription[];

        return new Promise<vscode.Location[]>(resolve => {
            if (!templateToSearchFor || !this.callMap) {
                resolve(null);
            }

            if (templateToSearchFor.startsWith('.')) {
                const namespace: string = getIncludes(documentText);
                records = this.callMap[`${namespace}${templateToSearchFor}`];
            } else {
                const alias: string = getMatchingAlias(templateToSearchFor, documentText);

                if (alias) {
                    const fullTemplatePath = normalizeAliasTemplate(alias, templateToSearchFor);
                    records = this.callMap[fullTemplatePath];
                } else {
                    records = this.callMap[templateToSearchFor];
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
