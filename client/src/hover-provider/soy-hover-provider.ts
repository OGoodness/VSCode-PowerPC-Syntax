import vscode = require('vscode');
import { SoyDefinitionProvider } from '../definition-provider/soy-definition-provider';
import { SoyReferenceProvider } from '../reference-provider/soy-reference-provider';
import * as data from "../data";

export class SoyHoverProvider implements vscode.HoverProvider {
    private soyDefinitionProvider: SoyDefinitionProvider;
    private soyReferenceProvider: SoyReferenceProvider;

    constructor (soyDefinitionProvider, soyReferenceProvider) {
        this.soyDefinitionProvider = soyDefinitionProvider;
        this.soyReferenceProvider = soyReferenceProvider;
    }

    public provideHover (document: vscode.TextDocument, position: vscode.Position): vscode.Hover {
        const hoveredWord = document.getText(document.getWordRangeAtPosition(position));
        console.log('HOVER: ' + hoveredWord )
        if (/^0x[0-9a-fA-F]+$/g.test(hoveredWord)) {
            console.log(hoveredWord)
            let numericValue = parseInt(hoveredWord, 16);
            let formattedText = new vscode.MarkdownString(`**ID:** ${hoveredWord} = ${numericValue}  \n`);
            //TODO: Fix these to be more like getCOmmand
            data.getDataOffset(hoveredWord, formattedText);
            data.getGlobalAddresses(hoveredWord, formattedText);
            return new vscode.Hover(formattedText);
        }else if(data.getCommand(hoveredWord)){
            let formattedText = new vscode.MarkdownString(`${hoveredWord}  \n`);
            data.setHover(hoveredWord, formattedText);
            return new vscode.Hover(formattedText);
        }
        return null
        // return new Promise<vscode.Hover>(resolve => {
        //     const wordRange: vscode.Range = document.getWordRangeAtPosition(position, /(del)?(call|template)\s+[\w\d.]+/);
            
        //     if (wordRange) {
        //         Promise.all([
        //             this.soyDefinitionProvider.provideDefinition(document, position),
        //             this.soyReferenceProvider.provideReferences(document, position)
        //         ]).then(templateInformation => {
        //             const definitions: vscode.Location[] = templateInformation[0];
        //             const references: vscode.Location[] = templateInformation[1];

        //             const definitionHoverItem: string = this.createSentence(definitions && definitions.length, 'definition');
        //             const referenceHoverItem: string = this.createSentence(references && references.length, 'reference');

        //             resolve(new vscode.Hover([definitionHoverItem, referenceHoverItem]));
        //         });
        //     } else {
        //         resolve(null);
        //     }
        // });
    }

    private createSentence (numberOfItems: number, itemName: string): string {
        //HERE Generate From language info
        const plural = `${itemName}s`;

        if (!numberOfItems) {
            return `No ${plural} found.`;
        } else if (numberOfItems === 1) {
            return `1 ${itemName} is available.`;
        } else {
            return `${numberOfItems} ${plural} are available.`;
        }
    }
}
