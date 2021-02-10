export interface GlobalAddress {
  effect: string;
  comments: string;
}

const UnknownAddress: GlobalAddress = {
  effect: "Unknown Address",
  comments: "Unknown"
};

export const globalAddresses: { [address: string]: GlobalAddress } = {
  "0x803B7C08": {
    "effect": "Classic mode continue coin requirements",
    "comments": "0x00 - Very Easy (1 coin required)"
  },
  "0x803B7C0D": {
    "effect": "lmode continue coin requirements",
    "comments": "Same as above."
  },
  "0x803B7C11": {
    "effect": "All-Star mode continue coin requirements",
    "comments": "Same as above, but all five values in this offset are \"0A\"."
  },
  "0x803C12E0": {
    "effect": "START of Per Character Action State Table",
    "comments": "Indexed by Internal Character ID"
  },
  "0x803c14f0": {
    "effect": "P3 character select",
    "comments": "Byte 2 is costume ID (goes from 0x00 to 0x03 or however many costumes a character has), so the example means player 1 has Fox's orange costume since 0x01 is the associated ID."
  },
  "0x803C167C": {
    "effect": "Per Character Neutral Special Action Initalization Table",
    "comments": "Indexed by Internal Character ID"
  },
  "0x803C2800": {
    "effect": "START of Shared Action State Function Table",
    "comments": "See Action State Reference"
  },
  "0x803D4A48": {
    "effect": "Game duration and pause on/off",
    "comments": "Loaded from DOL.See the \"Modifying Default Settings\" DOL mod section for information on the variable list: http://smashboards.com/threads/the-dol-mod-topic.326347/"
  },
  "0x803D4A50": {
    "effect": "Game duration and pause on/off",
    "comments": "0x08010000 = 8 minutes, pause off. 0x08000100 = 8 minutes, pause on"
  },
  "0x803f0328": {
    "effect": "Ready to fight banner visiblity status",
    "comments": ""
  },
  "0x803f0aa8": {
    "effect": "Stamina Mode Narrarator Sound FX ID",
    "comments": "Other Special Melee Sound FX ID's are located around here"
  },
  "0x803F0E06": {
    "effect": "P1 Character select",
    "comments": "0x00 - Team (0x00 = Red 0x01 = Blue 0x02 = Green)"
  },
  "0x803F0E08": {
    "effect": "P1 character select",
    "comments": ""
  },
  "0x803F0E2A": {
    "effect": "P2 Character select",
    "comments": "0x01 - Player Mode (0x00 = Human 0x01 = CPU 0x02 = Demo? 0x03 = Disabled)"
  },
  "0x803F0E2C": {
    "effect": "P2 character select",
    "comments": "4 Bytes - Example: Reading 4 bytes at address 0x803F0E08 returns 0x00010A0A"
  },
  "0x803F0E4E": {
    "effect": "P3 Character select",
    "comments": "0x02 - Costume ID"
  },
  "0x803F0E72": {
    "effect": "P4 Character select",
    "comments": "0x03 - Last VALID selected/hovered character ID (0x00 to 0x18)"
  },
  "0x803F0E74": {
    "effect": "P4 character select",
    "comments": "Byte 3 and 4 indicate the character ID. Unsure if they're ever different. 0x00 is Dr. mario and 0x18 is Roy (Roster ordering). Therefore, the example means player 1 is Fox since 0x0A is Fox's ID."
  },
  "0x803F14C4": {
    "effect": "Start of Item Action Function Table",
    "comments": "Indexed by Item ID. See Entity Data Offsets for info."
  },
  "0x803F20E0": {
    "effect": "",
    "comments": "These all seem to be addresses within a function, rather than a pointer to the start of the function."
  },
  "0x80432A28": {
    "effect": "Frame advance on/off",
    "comments": "0x80000000 = on. Increment word by 1 to advance frame by frame. 00000000 = unpause"
  },
  "0x80432A2C": {
    "effect": "Global speed modifier",
    "comments": "Defaults at 0xA4CB8. Cut it in half for double speed (0x5265C)."
  },
  "0x80452C68": {
    "effect": "START INGAME Camera Struct",
    "comments": "See Entity Data Offsets for notes"
  },
  "0x80453080": {
    "effect": "P1 Block",
    "comments": "0x00 of P1's static Player Block data. Each player is 0xE90 apart (goes up to Player 6)."
  },
  "0x8045310E": {
    "effect": "P1Stock",
    "comments": ""
  },
  "0x80453130": {
    "effect": "P1 character entity data pointer",
    "comments": "Refer to the Char Offset table. Each subsequent player's pointer is stored at 0xE90"
  },
  "0x80453F10": {
    "effect": "P2 Block",
    "comments": ""
  },
  "0x80453F9E": {
    "effect": "P2Stock",
    "comments": ""
  },
  "0x80453FC0": {
    "effect": "P2 character entity data pointer",
    "comments": ""
  },
  "0x80454DA0": {
    "effect": "P3 Block",
    "comments": ""
  },
  "0x80454E2E": {
    "effect": "P3Stock",
    "comments": ""
  },
  "0x80454E50": {
    "effect": "P3 character entity data pointer",
    "comments": ""
  },
  "0x80455C30": {
    "effect": "P4 Block",
    "comments": ""
  },
  "0x80455CBE": {
    "effect": "P4Stock",
    "comments": ""
  },
  "0x80455CE0": {
    "effect": "P4 character entity data pointer",
    "comments": ""
  },
  "0x8045BF10": {
    "effect": "???",
    "comments": "See above for variable list."
  },
  "0x8045BF28": {
    "effect": "Unlocked characters bitfield",
    "comments": "0 = locked, 1 = unlocked. Characters are in order of their external values excluding starters, from Mr. Game & Watch in the LSB to Ganondorf in 10"
  },
  "0x8045BF2A": {
    "effect": "Unlocked stages bitfield",
    "comments": "0 = locked, 1 = unlocked. Stages are in a unique order"
  },
  "0x8045C370": {
    "effect": "Item Frequency, VS Mode (8-bit)",
    "comments": ""
  },
  "0x8045c384": {
    "effect": "Music/Sound volume slider last position?",
    "comments": "Doesn't actually affect the music/sound volume when changed, but if changed outside of sound menu the slider will appear at the newly inputted position upon next sound menu entry"
  },
  "0x8045D850": {
    "effect": "Start of Nametag Data",
    "comments": ""
  },
  "0x8046B6C4": {
    "effect": "Bomb Rain Timer",
    "comments": "If it is greater than 0x4B0, it rains bombs (likely num frames of current match)."
  },
  "0x8046B6C8": {
    "effect": "Game timer minutes/seconds left",
    "comments": "Ex. 000001E0 = 8 minutes (1E0=decimal 480[seconds] = 8 minutes)"
  },
  "0x8046B6CC": {
    "effect": "Game timer counter (16-bit)",
    "comments": "Counts up every frame to subtract from timer. Write 0 to this every frame to freeze timer."
  },
  "0x8046DB6D": {
    "effect": "",
    "comments": ""
  },
  "0x8046DB6E": {
    "effect": "Bomb Rain toggle/Is Sudden Death",
    "comments": "Change to anything greater than 00 to immediately start bomb rain during a match (has to be at least 20 seconds after match starts for bombs to drop)"
  },
  "0x8046DB80": {
    "effect": "Start of Current Match information",
    "comments": "@ +0x08 = Item Switch values"
  },
  "0x80479C5F": {
    "effect": "P1 Previous Input Timer (8-bit)",
    "comments": "These appear to reset to 0 whenever an input is received."
  },
  "0x80479C8F": {
    "effect": "P2 Previous Input Timer (8-bit)",
    "comments": "counts up 1 every frame until another input is sent, or it hits 0x64 (100 frames). Also resets on menu transition - Absolome"
  },
  "0x80479CBF": {
    "effect": "P3 Previous Input Timer (8-bit)",
    "comments": "These are spaced 0x30 apart"
  },
  "0x80479CEF": {
    "effect": "P4 Previous Input Timer (8-bit)",
    "comments": ""
  },
  "0x80479D30": {
    "effect": "Scene controller",
    "comments": "00 = Current major; 01 = Pending major; 02 = Previous major; 03 = Current minor"
  },
  "0x80479D60": {
    "effect": "Global frame timer",
    "comments": ""
  },
  "0x80479D68": {
    "effect": "Game pause on/off",
    "comments": "0x10000000 = paused"
  },
  "0x80479D7C": {
    "effect": "Game loop enable/disable flags",
    "comments": "Disable game functions from processing each frame. Each bit is a flag for a different function."
  },
  "0x804807C8": {
    "effect": "Teams Mode flag (8-bit)",
    "comments": "01 = on, 00 = off (free for all)"
  },
  "0x80480820": {
    "effect": "P1 Character Select?",
    "comments": "Uses External ID"
  },
  "0x8048082c": {
    "effect": "Has Something to do with above address",
    "comments": ""
  },
  "0x8049E6C8": {
    "effect": "START of Current Stage Info",
    "comments": ""
  },
  "0x804A1FD8": {
    "effect": "In-game debug settings",
    "comments": ""
  },
  "0x804C1FAC": {
    "effect": "Controller 1 Digital Data",
    "comments": "Bit Flags: xxxx xxxx UDLR UDLR xxxS YXBA xLRZ UDRL"
  },
  "0x804C1FB0": {
    "effect": "Controller 1 Digital Data (previous frame)",
    "comments": "Nibbles: [0] ? [1] ? [2]C-Stick [3] Control Stick [4] Start Button [5] Right-Side Buttons [6]Top-of-Controller Buttons [7] D-Pad"
  },
  "0x804C1FC4": {
    "effect": "Controller 1 Analog Data",
    "comments": "32-Bit Floats (-1 - 1) | Words: [0] Control Stick X [1] Control Stick Y [2] C-Stick X [3] C-Stick Y"
  },
  "0x804C1FC8": {
    "effect": "",
    "comments": "Unsigned Bytes 0x00-0x8C | Bytes: [0] Left Shoulder [1] Right Shoulder"
  },
  "0x804C1FCC": {
    "effect": "Controller 1 Analog Data",
    "comments": ""
  },
  "0x804D36A0": {
    "effect": "Hitbox color",
    "comments": ""
  },
  "0x804D36A4": {
    "effect": "Grab box color",
    "comments": ""
  },
  "0x804D36A8": {
    "effect": "",
    "comments": "Careful i have write accessd"
  },
  "0x804D36AC": {
    "effect": "Hurtbox color",
    "comments": ""
  },
  "0x804D36B0": {
    "effect": "",
    "comments": ""
  },
  "0x804D36B4": {
    "effect": "Invincible hurtbox color",
    "comments": ""
  },
  "0x804D36B8": {
    "effect": "",
    "comments": ""
  },
  "0x804D36BC": {
    "effect": "Intangible hurtbox color",
    "comments": ""
  },
  "0x804D36C0": {
    "effect": "",
    "comments": ""
  },
  "0x804D36C4": {
    "effect": "Shield collision bubble color",
    "comments": ""
  },
  "0x804D36C8": {
    "effect": "",
    "comments": ""
  },
  "0x804D36CC": {
    "effect": "Reflector collision bubble color",
    "comments": ""
  },
  "0x804D36D0": {
    "effect": "",
    "comments": ""
  },
  "0x804D36D4": {
    "effect": "",
    "comments": ""
  },
  "0x804D36D8": {
    "effect": "",
    "comments": ""
  },
  "0x804D36DC": {
    "effect": "Detection box color (i.e. Ganondorf/Falcon side-B)",
    "comments": ""
  },
  "0x804D36E0": {
    "effect": "",
    "comments": ""
  },
  "0x804D36E4": {
    "effect": "",
    "comments": ""
  },
  "0x804D36E8": {
    "effect": "",
    "comments": ""
  },
  "0x804D36EC": {
    "effect": "",
    "comments": ""
  },
  "0x804D36F0": {
    "effect": "",
    "comments": ""
  },
  "0x804D36F4": {
    "effect": "",
    "comments": ""
  },
  "0x804D36F8": {
    "effect": "",
    "comments": ""
  },
  "0x804D36FC": {
    "effect": "",
    "comments": "last color table entry"
  },
  "0x804D4A08": {
    "effect": "Debug Level (32-bit)",
    "comments": "0 = Master, 1 = No-Debug-Rom, 2 = Debug-Develop, 3 = Debug-Rom, 4 = Develop"
  },
  "0x804D5F90": {
    "effect": "Random seed",
    "comments": "Changes every frame and is affected by player actions. For ALL random events."
  },
  "0x804d6554": {
    "effect": "Pointer to PICo.dat",
    "comments": "NOTE: This does not point to the entire PICo.dat file. Instead it only points first offset located in the PICo Offsets sheet"
  },
  "0x804D6554": {
    "effect": "Pointer to common attributes table from PlCo.dat",
    "comments": ""
  },
  "0x804D6730": {
    "effect": "KO star count (8-bit per player)",
    "comments": "=p1p2p3p4"
  },
  "0x804d6ca4": {
    "effect": "Frames before inputs are taken on SSS",
    "comments": "Byte"
  },
  "0x804D6CAD": {
    "effect": "Stage select (16-bit)",
    "comments": "Indicates the stage selection on the stage select screen."
  },
  "0x804d6cf2": {
    "effect": "Frames before inputs are taken on CSS",
    "comments": "Byte"
  },
  "0x804D6D58": {
    "effect": "HUD toggle",
    "comments": "Toggle for displaying the game timer, player's percents, stock icons, etc. 00=ON, 01=OFF"
  },
  "0x804D7420": {
    "effect": "Global Power-on Count",
    "comments": "Increments by 1 every frame. Never resets."
  },
  "0x804D8278": {
    "effect": "Editing does something weird to animation",
    "comments": "(taken from AR code)"
  },
  "0x804D9250": {
    "effect": "Fox/Falco horizontal momentum from shooting laser",
    "comments": "Default is zero. Changing this value was very unstable."
  },
  "0x804D9254": {
    "effect": "Fox/Falco Laser offsets",
    "comments": "Fox - vertical offset of entire laser. Falco - z-axis offset of laser ring graphic effect"
  },
  "0x804D9258": {
    "effect": "Fox/Falco horizontal laser offset",
    "comments": "Negative = shoots from behind them"
  },
  "0x804D9274": {
    "effect": "Fox/Falco Gun Size Multiplier",
    "comments": ""
  },
  "0x804D9278": {
    "effect": "Fox/Falco vertical momentum during Up-B",
    "comments": "Default is zero. Making it too high/negative will affect being able to go in angles (above 1 or below -1?)"
  },
  "0x804D927C": {
    "effect": "Fox/Falco Up-B charge animation speed multiplier",
    "comments": "Default is 3f800000 = 1. Increase to make faster. Making it too fast will cause freezes."
  },
  "0x804D9280": {
    "effect": "Fox/Falco angle of pointed body while traveling in Up-B animation",
    "comments": ""
  },
  "0x804D92D4": {
    "effect": "Fox/Falco side-b speed modifier",
    "comments": ""
  },
  "0x804DE328": {
    "effect": "UI Camera FOV",
    "comments": "[float] Changes the camera angle along with HUD and menu elements, but does not issue any black coloring on textures"
  },
  "0x804DE338": {
    "effect": "",
    "comments": ""
  },
  "0x8065CC14": {
    "effect": "Current Menu?",
    "comments": "It updates to a different predictable value every time you switch menus, but it's written to by the OSAllocFromHeap function so setting a breakpoint here really doesn't work."
  },
  "0x80BDC5F4": {
    "effect": "Global width multiplier",
    "comments": "1.0 by default. Written by some code at 0x803427C4."
  },
  "0x80c56618": {
    "effect": "Pointer to PICo.dat (repeat?)",
    "comments": ""
  },
  "0x80C6BEF0": {
    "effect": "",
    "comments": ""
  },
  "0x8111674C": {
    "effect": "P4 Cursor X Position",
    "comments": "Floating point ranging from -35 to 26 (If set outside of the boundaries, moves to closest point within boundaries)"
  },
  "0x81116750": {
    "effect": "P4 Cursor Y Position",
    "comments": "Floating point ranging from -22 to 25 (If set outside of the boundaries, moves to closest point within boundaries)"
  },
  "0x811176EC": {
    "effect": "P3 Cursor X Position",
    "comments": "Floating point ranging from -35 to 26 (If set outside of the boundaries, moves to closest point within boundaries)"
  },
  "0x811176F0": {
    "effect": "P3 Cursor Y Position",
    "comments": "Floating point ranging from -22 to 25 (If set outside of the boundaries, moves to closest point within boundaries)"
  },
  "0x8111826C": {
    "effect": "P2 Cursor X Position",
    "comments": "Floating point ranging from -35 to 26 (If set outside of the boundaries, moves to closest point within boundaries)"
  },
  "0x81118270": {
    "effect": "P2 Cursor Y Position",
    "comments": "Floating point ranging from -22 to 25 (If set outside of the boundaries, moves to closest point within boundaries)"
  },
  "0x81118DEC": {
    "effect": "P1 Cursor X Position",
    "comments": "Floating point ranging from -35 to 26 (If set outside of the boundaries, moves to closest point within boundaries)"
  },
  "0x81118DF0": {
    "effect": "P1 Cursor Y Position",
    "comments": "Floating point ranging from -22 to 25 (If set outside of the boundaries, moves to closest point within boundaries)"
  },
  "0x811ad6c0": {
    "effect": "Offset to RAM copy of character Plxx.dat file for P1?",
    "comments": "*usually*, this seems to change depending on the order that the .dat files were loaded into ram, so if p2 chooses a character first, then this will not be p1's .dat file."
  }
}



export const getGlobalAddresses = (value: string, formattedText: any) => {
  let item = globalAddresses[value] || UnknownAddress;
  if(item !== UnknownAddress){
    formattedText.appendMarkdown(`**Global Address**  \n`)
    formattedText.appendMarkdown(`* **Effect:** ${item.effect}  \n`)
    formattedText.appendMarkdown(`* **Comments:** ${item.comments}  \n`);
  }
}