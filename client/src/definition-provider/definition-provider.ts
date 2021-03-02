import vscode = require('vscode');
import { VariablePathMap, VariablePathDescription } from '../interfaces';
import { parseFiles, parseFile } from './parse';
import { createLocation, normalizeAliasTemplate, getIncludes, getMatchingVariable } from '../template-utils';

export class AsmDefinitionProvider implements vscode.DefinitionProvider {
    private variablePathMap: VariablePathMap;

    public parseWorkspaceFolders (wsFolders: string[][]): void {
        this.variablePathMap = parseFiles(wsFolders);
    }

    public parseSingleFile (documentPath: string): void {
        this.removeRecordsWithPath(documentPath);
        parseFile(documentPath, this.variablePathMap);
    }

    public async provideDefinition (document: vscode.TextDocument, position: vscode.Position): Promise<vscode.Location[]> {
        const lineText: string = document.lineAt(position.line).text;
        const filePath: string[] = lineText.match(/.include +['"`](.*)['"`]/);
        if (!this.variablePathMap || lineText.startsWith('#')) {
            return null;
        }
        if(filePath){
            //TODO: Make more elegant 
            return [new vscode.Location(vscode.Uri.file( vscode.workspace.workspaceFolders[0].uri.fsPath + '/' + filePath[1]), new vscode.Position(0, 0))]
        }

        return await this.definitionLocation(document, position)
            .then(definitionInfo => {
                if (definitionInfo) {
                    return definitionInfo.map(info => createLocation(info));
                }

                return null;
            }, err => {
                if (err) {
                    return err;
                }
                return null;
            });
    }

    public getDefinitionList (): VariablePathMap {
        return JSON.parse(JSON.stringify(this.variablePathMap));
    }

    private removeRecordsWithPath (filePath: string): void {
        Object.keys(this.variablePathMap).forEach(key => {
            this.variablePathMap[key] = this.variablePathMap[key].filter(
                pathDescription => pathDescription.path !== filePath
            );
        });
    }

    private definitionLocation (document: vscode.TextDocument, position: vscode.Position): Promise<VariablePathDescription[]> {
        const wordRange: vscode.Range = document.getWordRangeAtPosition(position, /[\w\d.]+/);
        const variableToSearchFor: string = document.getText(wordRange);
        const variableData: VariablePathDescription[] = this.getVariableDescription(variableToSearchFor, document);

        if (!wordRange) {
            return Promise.resolve(null);
        }

        if (position.isEqual(wordRange.end) && position.isAfter(wordRange.start)) {
            position = position.translate(0, -1);
        }

        return Promise.resolve(variableData);
    }

    private getVariableDescription (variableToSearchFor: string, document: vscode.TextDocument): VariablePathDescription[]  {
        const documentText: string = document.getText();
        let variableData: VariablePathDescription[];

        if (variableToSearchFor.startsWith('.')) {
            const namespace: string = getIncludes(documentText);
            //TODO: Figure this out

            variableData = this.variablePathMap[`${variableToSearchFor}`];
        } else {
            variableData = this.variablePathMap[variableToSearchFor];
            if (!variableData) {
                const alias: string = getMatchingVariable(variableToSearchFor, documentText);
                if (alias) {
                    const fullTemplatePath: string = normalizeAliasTemplate(alias, variableToSearchFor);
                    variableData = this.variablePathMap[fullTemplatePath];
                }
            }
        }
        
        return variableData;
    }
}
