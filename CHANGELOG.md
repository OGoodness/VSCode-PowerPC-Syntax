# Soy File Support - What's new?

### [3.25.1] - 2020/11/06
- fixing parsing error; Thanks to [Adam Graf](https://github.com/netgrafe) [PR](https://github.com/Blodwynn/-VSCODE-.soy-language-server-client/pull/10)


## [3.25.0] - 2020/05/03
- adding support to exlude files / folders from being parsed, available in the settings; Thanks to [Ben Haines](https://github.com/bhainesva) [PR](https://github.com/Blodwynn/-VSCODE-.soy-language-server-client/pull/8)
    - a file eg: `path/to/my/file.soy`
    - a folder eg: `myExludedFolder/**/*.soy`
- dependency updates

### [3.24.2] - 2019/05/31
- dependency update due to vulnerability

### [3.24.1] - 2019/04/05
- readme cleanup, rewording

## [3.24.0] - 2019/03/25
- rewording commands and notifications to start with `Soy File Support` instead of using `Extension`

## [3.23.0] - 2019/03/22
- replacing the startup notifications with a process indicator upon startup and reparse command
- removing the `No Startup Messages` configuration node

## [3.22.0] - 2019/02/26
- adding configuration to disallow `allowemptydefault` of `delcall`s

## [3.21.0] - 2019/02/21
- adding `for .. in` snippet to `sforin` keystroke

## [3.20.0] - 2019/02/14
- adding configuration to hide startup messages: `ASM Language Server: No Startup Messages`

### [3.19.1] - 2019/02/08
- update package dependencies to apply `node.extend` vulnerability fix to prototype pollution [Vulnerability Report](https://hackerone.com/reports/430831)

## [3.19.0] - 2019/02/06
- adding error highlight for some incorrect typos of `elseif`, eg: `else if`

## [3.18.0] - 2019/01/16
- adding `truncate` highlight

## [3.17.0] - 2019/01/11
- adding `allowemptydefault` snippet
- adding descriptions for already existing snippets

### [3.16.1] - 2019/01/03
- fixing outline wrongly showing some non-template related items

## [3.16.0] - 2018/12/17
- added a popup with options to open the changelog upon update or not instead of always automatically opening it
- adding `Soy Extension: About` command to open the extension's readme file

### [3.15.2] - 2018/12/13
- fixing `param` error highlight when there's a selfclosing `call` nested in the same line

### [3.15.1] - 2018/12/07
- fixing path for folder parsing exclusing - might improve parse times on some systems
- extension starting up upon firing one of it's commands (if it was not started yet by opening a .soy file)

## [3.15.0] - 2018/12/03
- adding autocompletion support for template calls

## [3.14.0] - 2018/11/29
- changelog popping up upon new version release
- fixing issue with dropping all definitions of a `deltemplate` when modifying one of it's implementations

### [3.13.1] - 2018/11/27
- removing yet unhandled code completion, no more errors thrown about it

## [3.13.0] - 2018/11/26
- adding first version of outline

## [3.12.0] - 2018/11/22
- showing the number of declarations and references upon hovering a (del)template
- improved the reference provider to work faster and use less memory

## [3.11.0] - 2018/11/19
- adding a `command` to reparse workspace folders. Useful after external changes (eg: switching branches) to find all new template data
    - Run `Soy Extension: Reparse workspace`

### [3.10.1] - 2018/11/19
- removing dead config node for trace server

## [3.10.0] - 2018/11/15
- adding further validators for `let` and `param` declarations
- finetuning some older validators to be more flexible
- fixing some rare highlight issues

### [3.9.3] - 2018/11/15
- fixing `deltemplate` snippet
- fixing `@param` highlight with multiple whitespaces

### [3.9.2] - 2018/11/08
- underlining `TODO`s and `Breaking Change` texts only in comments, not globally

### [3.9.1] - 2018/11/08
- clearing document validation from Problems tab when document is closed

## [3.9.0] - 2018/11/06
- adding functionality to reparse definitions and references on file save
- adding startup notifications

### [3.8.1] - 2018/10/31
- refactor, fixing minor bug

## [3.8.0] - 2018/10/31
- adding **Go to Definition** support for named `alias`es (eg: `{alias long.template.name as namedAlias}`)

## [3.7.0] - 2018/10/30
- adding support for **Find References**

## [3.6.0] - 2018/10/26
- support to comment a line with VSCode shortcut
- support to comment selected block with VSCode shortcut
- support for autoclosing tags:
    - quotes: `'` and `"`
    - brackets: `()`, `[]` and `{}`
    - block and doc comments: `/* */` and `/** */`
- some finetuning on error highlights

### [3.5.2] - 2018/10/24
- removing `$` from param snippets
- improvements to some snippets

### [3.5.1] - 2018/10/24
- fixing highlight of strings containing escaped characters
- adding highlight to escaped characters

## [3.5.0] - 2018/10/24
- highlighting HTML tags in strings

### [3.4.1] - 2018/10/19
- fixing config description :)

## [3.4.0] - 2018/10/18
- adding basic configuration:
    - Ignore errors: `ASM Language Server: Ignore Errors`
    - Ignore Todo comments: `ASM Language Server: Ignore Todo`
    - Ignore breaking change comments: `ASM Language Server: Ignore Breaking Change`

### [3.3.1] - 2018/10/18
- adding missing `data` highlight

## [3.3.0] - 2018/10/18
Thanks to [Nick Fisher](https://github.com/spadgos) for the following [changes](https://github.com/Blodwynn/-VSCODE-.soy-language-server-client/pull/5):
- highlighting `alias` - `as`
- extending highlight of `param` types
- adding support to a large number of build-in functions
- some under the hood changes

### [3.2.6] - 2018/10/17
- fixing doc comment highlight for `@items`

### [3.2.5] - 2018/10/17
- fixing the extension reporting another kind of false error - Thanks to [Nick Fisher](https://github.com/spadgos) for the report [ISSUE-4](https://github.com/Blodwynn/-VSCODE-.soy-language-server-client/issues/4)
- giving highlight to non-doc multi-line comments

### [3.2.4] - 2018/10/16
- fixing single quotes causing issues - Thanks to [Nick Fisher](https://github.com/spadgos) for the report [ISSUE-2](https://github.com/Blodwynn/-VSCODE-.soy-language-server-client/issues/2)
- fixing the extension reporting false errors - Thanks to [Nick Fisher](https://github.com/spadgos) for the report [ISSUE-3](https://github.com/Blodwynn/-VSCODE-.soy-language-server-client/issues/3)

### [3.2.3] - 2018/10/16
- expanded highlight for `range`, `elseif`, `default`, `nil`, `lb`, `rb`, `ifempty`, `msg`, `fallbackmsg`

### [3.2.2] - 2018/10/16
- A **HUGE** thanks to [Nick Fisher](https://github.com/spadgos) for the following changes:
    - fixing `floor` and `ceiling` highlight
    - fixing `for-in` highlight
    - fixing a wide range of word boundary matches
- fixing the `@param` highlight when it's in the template

### [3.2.1] - 2018/10/16
- adding `variant` highlight
- fixing `noAutoescape` highlights when adding it to a variable

## [3.2.0] - 2018/10/15
- adding `delcall` Go To Definition support

### [3.1.1] - 2018/10/15
- fixing `delpackage` highlight

## [3.1.0] - 2018/10/15
- bracket closing pair autoinsertion

### [3.0.4] - 2018/10/15
- fixes

# [3.0.0] - 2018/10/12
- adding **Go to Definiton** support

## [2.4.0] - 2018/10/10
- adding `autoescape="strict"` snippet

## [2.3.0] - 2018/10/10
- adding `noAutoescape` highlight

### [2.2.3] - 2018/10/10
- fixing highlight for `param` comments

### [2.2.2] - 2018/10/10
- fixing `template` and `deltemplate` definition highlights

### [2.2.1] - 2018/10/10
- fixing `forEach` closing highlight

## [2.2.0] - 2018/10/10
- adding `setClientData` and `i18nJS` to highlights

### [2.1.4] - 2018/10/10
- fixing comment area

### [2.1.1] - 2018/10/10
- fixing value highlights

## [2.1.0] - 2018/10/09
- adding `kind` highlight

# [2.0.0] - 2018/10/09
- adding syntax highlight
- adding autoclosing for brackets

### [1.2.1] - 2018/10/08
- fixing the name and description of the extension

## [1.2.0] - 2018/10/08
- Adding snippets

### [1.1.1] - 2018/10/05
- Adding this CHANGELOG and a basic README file

## [1.1.0] - 2018/10/05
- Adding check for `$` in variable declarations

# [1.0.0] - 2018/10/05
- Initial release
