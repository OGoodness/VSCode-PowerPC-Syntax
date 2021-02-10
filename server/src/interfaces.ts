export interface IErrorItem {
    pattern: RegExp;
    message: string;
}

export interface ISoyConfigSettings {
    ignoreTodo: boolean;
    ignoreBreakingChange: boolean;
    ignoreErrors: boolean;
    disallowAllowemptydefault: boolean;
}

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
