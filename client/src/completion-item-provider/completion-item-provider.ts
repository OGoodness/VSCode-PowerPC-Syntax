import {
    CompletionItemProvider,
    TextDocument,
    Position,
    CancellationToken,
    CompletionContext,
    ProviderResult,
    CompletionItem,
    CompletionList,
    Range
} from 'vscode';
import { TriggerCharacters } from '../constants';
import { CompletionItemKind, CompletionTriggerKind } from 'vscode-languageclient';
import { AsmDefinitionProvider } from '../definition-provider/definition-provider';
import { VariablePathMap } from '../interfaces';
import * as data from '../data';
import { getIncludes, getMatchingAlias, normalizeAliasTemplate } from '../template-utils';

export class AsmCompletionItemProvider implements CompletionItemProvider {
    private asmDefinitionProvider: AsmDefinitionProvider;

    constructor (asmDefinitionProvider: AsmDefinitionProvider) {
        this.asmDefinitionProvider = asmDefinitionProvider;
    }

    public provideCompletionItems (document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionList> {
        return new Promise((resolve) => {
            if (token.isCancellationRequested) {
                resolve(null);
            }

            const wordRange: Range = document.getWordRangeAtPosition(position, /(del)?call\s+[\w\d.]+/);
            if (context.triggerKind === CompletionTriggerKind.Invoked) {
                if (context.triggerCharacter === TriggerCharacters.Dot) {
                    const documentText: string = document.getText();
                    // const templateCall: string = document.getText(wordRange);
                    // const templateNameStart: string = templateCall.match(/(?:del)?call\s+([\w\d.]+)/)[1];
                    let templateToSearchFor: string;

                    // if (templateNameStart.startsWith('.')) {
                    //     const namespace: string = getIncludes(documentText);

                    //     templateToSearchFor = `${namespace}${templateNameStart}`;
                    // } else {
                    //     const alias: string = getMatchingAlias(templateNameStart, documentText);

                    //     if (alias) {
                    //         templateToSearchFor = normalizeAliasTemplate(alias, templateNameStart);
                    //     } else {
                    //         templateToSearchFor = templateNameStart;
                    //     }
                    // }

                    const completionItems: string[] = this.getCompletionItemsData(templateToSearchFor);

                    resolve(new CompletionList(
                        completionItems.map(
                            itemName => this.buildCompletionItem(itemName, templateToSearchFor)
                        ),
                        false
                    ));
                }
            }else{
                let templateToSearchFor: string;
                const completionItems: string[] = this.getCompletionItemsData(templateToSearchFor);
                resolve(new CompletionList(
                    completionItems.map(
                        itemName => this.buildCompletionItem(itemName, templateToSearchFor)
                    ),
                    false
                ));
            }

            resolve(null);
        });
    }

    private buildCompletionItem (itemName: string, omittablePrefix: string): CompletionItem {
        const completion: string = itemName.replace(new RegExp(`^${omittablePrefix}`), '');

        return {
            label: completion,
            kind: CompletionItemKind.Function,
            insertText: completion
        } as CompletionItem;
    }

    private getCompletionItemsData (itemNameStart: string): string[] {
        const definitionList: VariablePathMap = this.asmDefinitionProvider.getDefinitionList();
        const asmCommands = Object.keys(data.getAllCommands())
        if (!definitionList && !asmCommands) {
            return [];
        }

        return asmCommands.concat(Object.keys(definitionList)).filter(itemName => itemName.startsWith(itemNameStart));
    }
}
