import {
    Position,
    CompletionItem,
} from 'vscode-languageserver';
import {TextDocument} from 'vscode-languageserver-textdocument'
import { CompletionItemKind } from 'vscode-languageserver';
import { DefinitionProvider } from '../definition-provider/definition-provider';
import { VariablePathMap } from '../interfaces';
import * as data from '../data';

export class CompletionItemProvider {
    private definitionProvider: DefinitionProvider;

    constructor (definitionProvider: DefinitionProvider) {
        this.definitionProvider = definitionProvider;
    }

    public provideCompletionItems (document: TextDocument, position: Position): CompletionItem[] {
        console.log("provideCompletion")
        let result = null
        //TODO: Implement Smart search??
        //Cancellation Token Check Here
        if (false) {
            return result
        }

        // if (context.triggerKind === CompletionTriggerKind.Invoked) {
            console.log("Trigger Kind")
            if (true) {
                let itemToSearchFor: string;
                const completionItems: string[] = this.getCompletionItemsData(itemToSearchFor);
                result = completionItems.map(
                        itemName => this.buildCompletionItem(itemName, itemToSearchFor)
                    )
            }
        // }
        return result
    }

    private buildCompletionItem (templateName: string, omittablePrefix: string): CompletionItem {
        const completion: string = templateName.replace(new RegExp(`^${omittablePrefix}`), '');

        return {
            label: completion,
            kind: CompletionItemKind.Function,
            insertText: completion
        } as CompletionItem;
    }

    private getCompletionItemsData (templateNameStart: string): string[] {
        const definitionList: VariablePathMap = this.definitionProvider.getDefinitionList();
        const asmCommands = Object.keys(data.getAllCommands())
        if (!definitionList) {
            return [];
        }

        return asmCommands.concat(Object.keys(definitionList)).filter(templateName => templateName.startsWith(templateNameStart));
    }
}
