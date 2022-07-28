import { DocumentSymbolProvider, TextDocument, ProviderResult, SymbolInformation, SymbolKind, Location } from 'vscode';

export class AsmDocumentSymbolProvider implements DocumentSymbolProvider {

    public provideDocumentSymbols (document: TextDocument): ProviderResult<SymbolInformation[]> {
        const matches: RegExpExecArray[] = this.getSymbolData(document.getText());
        let containerName: string = '';

        return matches.map(match => {
            const type = match[1];
            const name = match[2];
            const kind = this.getTokenSymbolKind(type);
            const position = document.positionAt(match.index || 0);

            if (kind === SymbolKind.Class) {
                containerName = name;
            }

            return new SymbolInformation(name, kind, containerName, new Location(document.uri, position));
        });
    }

    private getSymbolData (documentText: string): RegExpExecArray[] {
        const pattern: RegExp = /\.(?:macro|set)\s+([\w\d.]+)/gim;
        const matches: RegExpExecArray[] = [];
        let m: RegExpExecArray;

        while (m = pattern.exec(documentText)) {
            matches.push(m);
        }

        return matches;
    }

    private getTokenSymbolKind (token: string): SymbolKind {
        const symbolTokenMap = {
            ".macro":   SymbolKind.Function,
            ".set":     SymbolKind.Variable
        };

        return symbolTokenMap[token];
    }
}
