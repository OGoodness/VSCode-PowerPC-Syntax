export enum GlobalState {
    CurrentVersion = 'asmFileSupportVersion'
}

export enum Commands {
    // Asm File Support commands
    ReparseWorkSpace     = 'asmfilesupport.reparse.workspace',
    ShowExtensionChanges = 'asmfilesupport.showExtensionChanges',
    About                = 'asmfilesupport.about',

    // VS Code commands
    ShowMarkDownPreview  = 'markdown.showPreview'
}

export enum ExtensionData {
    ExtensionIdentifier = 'ogoodness.powerpc-syntax'
}

export enum TriggerCharacters {
    Dot = '.',
    Backslash = '\\',
}

export enum UpdateNotificationItem {
    SeeUpdates = 'Let\'s see!',
    Dismiss    = 'Maybe later...'
}
