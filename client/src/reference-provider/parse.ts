import linenumber = require('linenumber');
import fs = require('fs');
import { getIncludes, getMatchingVariable, normalizeAliasTemplate } from '../template-utils';
import { VariablePathDescription, VariablePathMap } from '../interfaces';
import { nextTick } from 'node:process';

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

        const templatePathDescription: VariablePathDescription[] = allCallMaps[templateName];
        // There's really no reason to insert a reference for usages for more than X times (just do a search or implement that as a plugin action insntead)
        if(templatePathDescription && templatePathDescription.length >= 30) return; 

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
    const variablePattern: RegExp = /([\w\d._]+)[\w\d._, #]*/gim; // This regex matches too many unnecesary stuff, it can be checked at https://regexr.com/
    const content: string = fs.readFileSync(file, 'utf8');
    let n: RegExpExecArray;
    console.log("Parsing File...", file);

    var alreadyProcessedTemplates = {};
    while (n = variablePattern.exec(content)) {
        var templateName = n[0];
        var refTemplateName= n[1] || n[2];

        // Why not look for lineNr using n[1] instead?, n[0] seems to be matching too many stuff
        try {
            if(alreadyProcessedTemplates[templateName]) continue;
        
            if(n[0] != "..") { // Searching for .. Brings back more than 200k results on some files
                const lineNr = linenumber(content, templateName);

                const alias: string = getMatchingVariable(templateName, content);
                if (alias) {
                    insertRefs(refTemplateName, file, lineNr, allVariablePathMaps);
                }

                insertRefs(refTemplateName, file, lineNr, allVariablePathMaps);
        
            }
            alreadyProcessedTemplates[templateName] = true; // linenumber returns all possible paths where n[0] is being used so just don't process it again
        } catch(e){
            console.error(e);
        }
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
