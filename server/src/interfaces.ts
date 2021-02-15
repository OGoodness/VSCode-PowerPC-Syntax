export interface IErrorItem {
    pattern: RegExp;
    message: string;
}

export interface IAsmConfigSettings {
    ignoreTodo: boolean;
    ignoreBreakingChange: boolean;
    ignoreErrors: boolean;
    disallowAllowemptydefault: boolean;
}
