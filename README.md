# Asm/PowerPC file support
General file support for `.asm` and `.s` files. See section below for details.

## Functionality
- Syntax highlight
- Go to definition support
- Find References
- Code Autocompletion (Variables/Commands/Macros)
- Outline
- Open File/folder
- Snippets (Need a list of useful snippets)
<!-- - Syntax check: inline error and warning underline -->

### Syntax highlight
- Highlight of Labels, Commands, Comments, Strings, Numbers, Hex, etc

### Definition lookup
- `Go to Definition`
- `Peek Definition`

### Code Autocompletion
- Autocomplete for known variables/macros

### Commands
- `Asm File Support: Reparse workspace`: Useful after external changes (eg: switching branches) to find all new context data
- `Asm File Support: Show extension changes`: Opens your favorite changelog to show what's new :)
- `Asm File Support: About`: Opens the readme file


### Auto Closing Brackets, Strings, and macros

### Snippets (Coming Soon)
All snippets start with the character `_` to be able to quickly search for them.


### Contributing:
Clone and build the repo:  
```bash
git clone https://github.com/OGoodness/VSCode-PowerPC-Syntax.git
cd VSCode-PowerPC-Syntax
# code .

npm install
npm run watch
```  
Whenever you make changes to the application you need to run the `watch` command, that way TypeScript can actively look for changes.  
From there do the following: 
- Open VS Code on this folder.
- Run the above command.
- Switch to the Debug viewlet.
- Select `Launch Client` from the drop down.
- Run the launch config.
- If you want to debug the server as well use the launch configuration `Attach to Server`

Make your changes and open up a PR! :D

**Snippets**:
<!-- - **sfor** - `foreach` block
- **sforin** - `for .. in` block
- **sif** - `if` block
- **sife** - `if-else` block
- **sl** - `let` statement - single line
- **slb** - `let` statement - block
- **sp** - `param` statement - single line
- **spb** - `param` statement - block
- **sps** - `param` signature
- **sc** - `call` block
- **sdelc** - `delcall` block
- **sdelcempty** - `delcall` block with `allowemptydefault="true"`
- **stemp** - `template` skeleton
- **sdeltemp** - `deltemplate` skeleton -->
### Error highlights (Coming Soon)
<!-- - Missing `$` sign in variable declarations
- Missing closing tag for `let` declarations and `param`s
- Extra space before closing tag for `let`s and `param`s
- Unnecessary `/` character for `let` and `param` blocks
- Self closing for `template`s and `deltemplate`s
- Empty declaration
- Missing colon
- Some common wrong stuctures of `{elseif}`, eg: `{else if}` -->


<!-- ### Information highlights
- `TODO` comments
- `Breaking Change` comments -->
