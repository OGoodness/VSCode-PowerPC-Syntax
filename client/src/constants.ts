export enum GlobalState {
    CurrentVersion = 'soyFileSupportVersion'
}

export enum Commands {
    // Soy File Support commands
    ReparseWorkSpace     = 'soyfilesupport.reparse.workspace',
    ShowExtensionChanges = 'soyfilesupport.showExtensionChanges',
    About                = 'soyfilesupport.about',

    // VS Code commands
    ShowMarkDownPreview  = 'markdown.showPreview'
}

export enum ExtensionData {
    ExtensionIdentifier = 'ogoodness.powerpc-syntax'
}

export enum TriggerCharacters {
    Dot = '.',
}

export enum UpdateNotificationItem {
    SeeUpdates = 'Let\'s see!',
    Dismiss    = 'Maybe later...'
}
