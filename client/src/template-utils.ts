import { IAliasMap, VariablePathDescription } from './interfaces';
import vscode = require('vscode');

export function normalizeAliasTemplate (alias: string, template: string): string {
    const truncatedTemplatePath: string = template.substr(template.indexOf('.'));

    return `${alias}${truncatedTemplatePath}`;
}

export function getNamespace (documentText: string): string {
    console.log("Get Namespace")
    const namespacePattern: RegExp = /\{namespace\s*([\w\d.]+)/;
    const namespaceMatch = namespacePattern.exec(documentText);

    if (namespaceMatch) {
        return namespaceMatch[1];
    }

    return null;
}

export function getIncludes (documentText: string): string {
    // console.log("Get Includes")
    const includePattern: RegExp = /\.include\s+['"`][\w\d\\\/.]+['"`]/;
    const includeMatch = includePattern.exec(documentText);

    if (includeMatch) {
        // console.log(includeMatch)
        return includeMatch[1];
    }

    return null;
}

export function getMatchingAlias (template: string, documentText: string): string {
    const aliases: IAliasMap[] = getAliases(documentText);
    const matchablePart: string = template.split('.')[0];
    const matchingNamedAlias: IAliasMap = aliases.find(aliasObj => aliasObj.aliasName === matchablePart);
    let alias: string;

    if (matchingNamedAlias) {
        alias = matchingNamedAlias.alias;
    } else {
        const matchingAlias: IAliasMap = aliases.find(aliasObj => aliasObj.alias.endsWith(matchablePart) && !aliasObj.aliasName);
        alias = matchingAlias && matchingAlias.alias;
    }

    return alias;
}

export function getMatchingVariable (variable: string, documentText: string): string {
    const aliases: IAliasMap[] = getVariables(documentText);
    const matchingNamedAlias: IAliasMap = aliases.find(aliasObj => aliasObj.aliasName === variable);
    let alias: string;

    if (matchingNamedAlias) {
        alias = matchingNamedAlias.alias;
    }

    return alias;
}

function getAliases (documentText: string): IAliasMap[] {
    const aliasPattern: RegExp = /\{alias\s*([\w\d.]+)(?:\s*as\s*([\w\d.]+))?/gm;
    const aliases: IAliasMap[] = [];
    let m: RegExpExecArray;

    while (m = aliasPattern.exec(documentText)) {
        const alias = m[1];
        const aliasName = m[2];

        aliases.push({
            alias,
            aliasName
        });
    }

    return aliases;
}

function getVariables (documentText: string): IAliasMap[] {
    const variablePattern: RegExp = /\{alias\s*([\w\d.]+)(?:\s*as\s*([\w\d.]+))?/gm;
    const aliases: IAliasMap[] = [];
    let m: RegExpExecArray;

    while (m = variablePattern.exec(documentText)) {
        const alias = m[1];
        const aliasName = m[2];

        aliases.push({
            alias,
            aliasName
        });
    }

    return aliases;
}

export function createLocation (definitionInfo: VariablePathDescription) {
    if (definitionInfo == null || definitionInfo.path == null) { return null; }

    const definitionResource = vscode.Uri.file(definitionInfo.path);
    const pos = new vscode.Position(definitionInfo.line, 1);

    return new vscode.Location(definitionResource, pos);
}
