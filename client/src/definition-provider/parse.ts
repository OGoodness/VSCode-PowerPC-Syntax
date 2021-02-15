import linenumber = require('linenumber');
import fs = require('fs');
import { VariablePathMap, VariablePathDescription } from '../interfaces';

function insertElementWithKey (variableName: string, element: VariablePathDescription, allVariablePathMaps: VariablePathMap): void {
    if (Array.isArray(allVariablePathMaps[variableName])) {
        allVariablePathMaps[variableName].push(element);
    } else {
        allVariablePathMaps[variableName] = new Array(element);
    }
}

export function parseFile (file: string, allVariablePathMaps: VariablePathMap) {
    const variablePattern: RegExp = /\.(set|macro)\s+([\w\d._]+)[\w\d._, #]*|^ *([a-z0-9_-]+):/gim;
    const content: string = fs.readFileSync(file, 'utf8');
    let n: RegExpExecArray;

    while (n = variablePattern.exec(content)) {
        const lineNr = linenumber(content, n[0]);

        const newItem: VariablePathDescription = {
            path: file,
            type: n[1] || 'label',
            line: lineNr ? lineNr[0].line - 1 : 1
        };

        insertElementWithKey(n[2] || n[3], newItem, allVariablePathMaps);
    }
}

export function parseFiles (wsFolders): VariablePathMap {
    const allVariablePathMaps: VariablePathMap = {};

    wsFolders.forEach(
        files => files.forEach(
            file => parseFile(file, allVariablePathMaps)
        )
    );

    return allVariablePathMaps;
}
