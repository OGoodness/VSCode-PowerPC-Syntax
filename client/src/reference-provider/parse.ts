import linenumber = require('linenumber');
import fs = require('fs');
import { getIncludes, getMatchingVariable, normalizeAliasTemplate } from '../template-utils';
import { VariablePathDescription, VariablePathMap } from '../interfaces';

function escapeRegExp (unescapedString: string) {
    return unescapedString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function isIncluded (templateName: string, file: string, line: number, allCallMaps: VariablePathMap): boolean {
    const templatePathDescription: VariablePathDescription[] = allCallMaps[templateName];

    if (templatePathDescription) {
        const filtered = templatePathDescription.filter(
            (templateData: VariablePathDescription) => templateData.line === line && templateData.path === file
        );

        if (filtered.length) {
            return true;
        }
    }

    return false;
}

function insertElementWithKey (templateName: string, fileLocation: VariablePathDescription, allCallMaps: VariablePathMap) {
    if (Array.isArray(allCallMaps[templateName])) {
        allCallMaps[templateName].push(fileLocation);
    } else {
        allCallMaps[templateName] = new Array(fileLocation);
    }
}

function insertCalls (templateName: string, path: string, lineNrs: any[], allCallMaps: VariablePathMap) {
    lineNrs.forEach(lineItem => {
        const line = lineItem.line - 1;

        if (!isIncluded(templateName, path, line, allCallMaps)) {
            insertElementWithKey(
                templateName,
                {
                    path,
                    line
                },
                allCallMaps
            );
        }
    });
}

export function parseFile (file: string, allCallMaps: VariablePathMap) {
    const documentText: string = fs.readFileSync(file, 'utf8');
    const namespace: string = getIncludes(documentText);
    const callPattern: RegExp = /\{(?:del)?call ([\w\d.]+)[^\w\d.].*/gm;
    // const filePattern: RegExp = /\{namespace ([\w\d.]+)/;
    // const labelPattern: RegExp = /b[a-z] +([A-Z_]+)/;
    // const variablePattern: RegExp = /\{(del)?template ([\w\d.]+)[^\}]*\}/gm;
    // const functionPattern: RegExp = new RegExp('');
    let m: RegExpExecArray;
    // console.log(JSON.stringify(allCallMaps))

    while (m = callPattern.exec(documentText)) {
        const lineNr = linenumber(documentText, escapeRegExp(m[0]));
        const template = m[0];

        if (template.startsWith('.')) {
            insertCalls(`${namespace}${template}`, file, lineNr, allCallMaps);
        } else {
            const alias: string = getMatchingVariable(template, documentText);

            if (alias) {
                const fullTemplatePath: string = normalizeAliasTemplate(alias, template);
                insertCalls(fullTemplatePath, file, lineNr, allCallMaps);
            } else {
                insertCalls(template, file, lineNr, allCallMaps);
            }
        }
    }
}

export function parseFilesForReferences (wsFolders: string[][]): VariablePathMap {
    const allCallMaps: VariablePathMap = {};

    wsFolders.forEach(
        files => files.forEach(
            file => parseFile(file, allCallMaps)
        )
    );

    return allCallMaps;
}
