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

function insertRefs (templateName: string, path: string, lineNrs: any[], allCallMaps: VariablePathMap) {
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

export function parseFile (file: string, allVariablePathMaps: VariablePathMap) {
    const variablePattern: RegExp = /([\w\d._]+)[\w\d._, #]*/gim;
    const content: string = fs.readFileSync(file, 'utf8');
    let n: RegExpExecArray;

    while (n = variablePattern.exec(content)) {
        console.log(n)
        const lineNr = linenumber(content, n[0]);

        const alias: string = getMatchingVariable(n[0], content);
        if (alias) {
            insertRefs(n[1] || n[2], file, lineNr, allVariablePathMaps);
        }

        insertRefs(n[1] || n[2], file, lineNr, allVariablePathMaps);
    }
}
// export function parseFile (file: string, allCallMaps: VariablePathMap) {
//     const documentText: string = fs.readFileSync(file, 'utf8');
//     const namespace: string = getIncludes(documentText);
//     const callPattern: RegExp = /\{(?:del)?call ([\w\d.]+)[^\w\d.].*/gm;
//     let m: RegExpExecArray;

//     while (m = callPattern.exec(documentText)) {
//         const lineNr = linenumber(documentText, escapeRegExp(m[0]));
//         const template = m[0];

//         if (template.startsWith('.')) {
//             insertCalls(`${namespace}${template}`, file, lineNr, allCallMaps);
//         } else {
//             const alias: string = getMatchingVariable(template, documentText);

//             if (alias) {
//                 const fullTemplatePath: string = normalizeAliasTemplate(alias, template);
//                 insertCalls(fullTemplatePath, file, lineNr, allCallMaps);
//             } else {
//                 insertCalls(template, file, lineNr, allCallMaps);
//             }
//         }
//     }
// }

export function parseFilesForReferences (wsFolders: string[][]): VariablePathMap {
    const allCallMaps: VariablePathMap = {};

    wsFolders.forEach(
        files => files.forEach(
            file => parseFile(file, allCallMaps)
        )
    );

    return allCallMaps;
}
