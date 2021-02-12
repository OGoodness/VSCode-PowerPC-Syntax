export interface VariablePathDescription {
    path: string;
    line: number;
    type?: string;
}

export interface VariablePathMap {
    [template: string]: VariablePathDescription[];
}

export interface IAliasMap {
    alias: string;
    aliasName: string;
}
