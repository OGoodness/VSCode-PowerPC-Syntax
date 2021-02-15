# PowerPC Syntax - What's new?
# [1.1.5] - 2/15/2021
- Fixed broken definition support from last update. Everything should work now. 
- Added more support for command definitions
- Added the ability to find references (Not context specific)
- Update to VSCode client and server versions

# [1.1.4] - 2/10/2021
- Update to `On Hover` information for command
- Unintentional broken definition support

# [1.1.3] - 2/8/2021
- ReEnabled  `ctrl+click` on files, fixed issue where it would automatically go to file when you hovered over it.
- Updated to include auto completion when writing variable or command names
- Will now show definitions of commands when you hover over them (Most commands missing definitions currently :) )
- When typing `.macro` a `.endm` will automatically be appended.
- Package should be smaller.

# [1.1.2] - 2/6/2021
- Temporary disable of `ctrl+click` on files
# [1.1.0] - 2/5/2021
- "Go To Definition" support (or `ctrl+click`) for **Labels, Variables, and Macros***
- Ability to go to file through "Go To Definition" (or `ctrl+click`)
- Hover over PowerPC commands to see a description of their use.
- Hover over Hex codes and see their resolved numbers.
    - Also, if the hex happens to be a SSBM Global Address or Character Data Offset, relevant data will appear.

![Show Character Data](https://i.imgur.com/qSrycj3.png)
![Hover over Hex](https://i.imgur.com/WRacdNW.png)
![Show Definition](https://i.imgur.com/ZUAqKjJ.png)

# [1.0.2] - 2/4/2021
- Updated `storage.modifier.ppc.assembly` to account for spaces or tabs at the start of the string

# [1.0.0] - 2/3/2021
- Initial release
