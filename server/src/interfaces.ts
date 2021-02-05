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
