import vscode = require('vscode');
import * as data from "../data";

export class SoyHoverProvider implements vscode.HoverProvider {

    constructor () {
    }

    public provideHover (document: vscode.TextDocument, position: vscode.Position): vscode.Hover {
        const hoveredWord = document.getText(document.getWordRangeAtPosition(position, /[\w\d.]+/));
        console.log('HOVER: ' + hoveredWord )
        if (/^0x[0-9a-fA-F]+$/g.test(hoveredWord)) {
            console.log(hoveredWord)
            let numericValue = parseInt(hoveredWord, 16);
            let formattedText = new vscode.MarkdownString(`**ID:** ${hoveredWord} = ${numericValue}  \n`);
            //TODO: Fix these to be more like getCOmmand
            data.getDataOffset(hoveredWord, formattedText);
            data.getGlobalAddresses(hoveredWord, formattedText);
            return new vscode.Hover(formattedText);
        }else if(data.getCommand(hoveredWord) !== data.UnknownCommand){
            let formattedText = new vscode.MarkdownString(`${hoveredWord}  \n`);
            data.setHover(hoveredWord, formattedText);
            return new vscode.Hover(formattedText);
        }
        // const definitionHoverItem: string = this.createSentence(definitions && definitions.length, 'definition');
        // const referenceHoverItem: string = this.createSentence(references && references.length, 'reference');
        //  new vscode.Hover([definitionHoverItem, referenceHoverItem]);
        return null
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
