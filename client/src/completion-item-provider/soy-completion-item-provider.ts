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
import { SoyDefinitionProvider } from '../definition-provider/soy-definition-provider';
import { VariablePathMap } from '../interfaces';
import * as data from '../data';
import { getIncludes, getMatchingAlias, normalizeAliasTemplate } from '../template-utils';

export class SoyCompletionItemProvider implements CompletionItemProvider {
    private soyDefinitionProvider: SoyDefinitionProvider;

    constructor (soyDefinitionProvider: SoyDefinitionProvider) {
        this.soyDefinitionProvider = soyDefinitionProvider;
    }

    public provideCompletionItems (document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionList> {
        return new Promise((resolve) => {
            if (token.isCancellationRequested) {
                resolve(null);
            }

            const wordRange: Range = document.getWordRangeAtPosition(position, /(del)?call\s+[\w\d.]+/);

            if (context.triggerKind === CompletionTriggerKind.Invoked) {
                console.log("Trigger Kind")
                // if (context.triggerCharacter === TriggerCharacters.Dot) {
                if (true) {
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
                            templateName => this.buildCompletionItem(templateName, templateToSearchFor)
                        ),
                        false
                    ));
                }
                // else if (context.triggerCharacter === TriggerCharacters.LeftBrace) {
                //     // Todo - provide snippets
                // }
            }

            resolve(null);
        });
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
        const definitionList: VariablePathMap = this.soyDefinitionProvider.getDefinitionList();
        const asmCommands = Object.keys(data.getAllCommands())
        if (!definitionList) {
            return [];
        }

        return asmCommands.concat(Object.keys(definitionList)).filter(templateName => templateName.startsWith(templateNameStart));
    }
}
