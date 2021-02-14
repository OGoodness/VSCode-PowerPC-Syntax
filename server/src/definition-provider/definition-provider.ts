import { VariablePathMap, VariablePathDescription } from '../interfaces';
import { parseFiles, parseFile } from './parse';
import { createLocation, normalizeAliasTemplate, getMatchingVariable, getLineRange, getClosestWordRange } from '../template-utils';
import {Location, Range, Position} from 'vscode-languageserver/node'
import {TextDocument} from 'vscode-languageserver-textdocument'
import { URI } from 'vscode-uri'

export class DefinitionProvider {
    private variablePathMap: VariablePathMap;

    public parseWorkspaceFolders (wsFolders: string[][]): void {
        this.variablePathMap = parseFiles(wsFolders);
    }

    public parseSingleFile (documentPath: string): void {
        this.removeRecordsWithPath(documentPath);
        parseFile(documentPath, this.variablePathMap);
    }

    public provideDefinition (document: TextDocument, position: Position): Location[] {
        const lineText: string = document.getText(getClosestWordRange(document, position))
        console.log("provideDefinition")
        console.log(lineText)
        const filePath: string[] = lineText.match(/.include +['"`](.*)['"`]/);
        if (!this.variablePathMap || lineText.startsWith('#')) {
            return null;
        }
        if(filePath){
            //TODO: Make more elegant 
            // workspace.workspaceFolders[0].uri.fsPath + '
            return [Location.create(URI.file( '/' + filePath[1]).toString(), Range.create(0, 0, 0, 0))]
        }
        let definitionInfo = this.definitionLocation(document, position)
        console.log("definitionInfo")
        console.log(definitionInfo)
        if (definitionInfo) {
            return definitionInfo.map(info => createLocation(info));
        }
        return null;

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

    private definitionLocation (document: TextDocument, position: Position): VariablePathDescription[] {
        const variableToSearchFor: string = document.getText(getClosestWordRange(document, position))
        const variableData: VariablePathDescription[] = this.getVariableDescription(variableToSearchFor, document);
        console.log(variableData, variableToSearchFor)
        if (!variableToSearchFor) {
            return null;
        }

        return variableData;
    }

    private getVariableDescription (variableToSearchFor: string, document: TextDocument): VariablePathDescription[]  {
        const documentText: string = document.getText();
        let variableData: VariablePathDescription[];

        if (variableToSearchFor.startsWith('.')) {
            console.log("This is a system variable/function")
            // const namespace: string = getIncludes(documentText);
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
        
        console.log("Variable Data: " + JSON.stringify(variableData))
        return variableData;
    }
}
