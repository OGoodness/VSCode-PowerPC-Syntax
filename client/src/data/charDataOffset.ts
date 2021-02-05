import * as vscode from 'vscode';

export interface CharacterDataOffset {
  effect: string;
  comments: string;
  notes: string;
}
const UnknownOffset: CharacterDataOffset = {
  effect: "Unknown Character",
  comments: "Unknown",
  notes: "Unknown",
};
const charDataOffset: { [address: string]: CharacterDataOffset } = {
  "0": {
    "effect": "Instant Buttons",
    "comments": "",
    "notes": ""
  },
  "": {
    "effect": "",
    "comments": "",
    "notes": ""
  },
  "Static Player Block": {
    "effect": "Length 0xE90",
    "comments": "Static block starting at 0x80453080 for P1, 80453F10 for P2, 80454dA0 for P3, 80455C30 for P4",
    "notes": ""
  },
  "0x00": {
    "effect": "Entity Struct Pointer",
    "comments": "Points back to 0x00 of the Entity",
    "notes": ""
  },
  "0x04": {
    "effect": "P Priority",
    "comments": "Byte. Reference 8038ffb8",
    "notes": ""
  },
  "0x08": {
    "effect": "Current Spawn #",
    "comments": "The current life is the nth character spawned since the beginning of the match",
    "notes": ""
  },
  "0x0C": {
    "effect": "Player Slot",
    "comments": "Byte",
    "notes": ""
  },
  "0x0E": {
    "effect": "",
    "comments": "Byte",
    "notes": ""
  },
  "0x10": {
    "effect": "Action State",
    "comments": "The value at this address indicates the action state of the character. Modifying this alone does nothing.",
    "notes": ""
  },
  "0x14": {
    "effect": "Animation State",
    "comments": "The animation to occur after the current one ends. Only has an effect if the current action state is set to loop.",
    "notes": ""
  },
  "0x18": {
    "effect": "0x155",
    "comments": "Move table divider constant?",
    "notes": ""
  },
  "0x1C": {
    "effect": "Shared Action State Table Pointer",
    "comments": "",
    "notes": ""
  },
  "0x20": {
    "effect": "Move Table Pointer",
    "comments": "Player dependent move table pointer",
    "notes": ""
  },
  "0x24": {
    "effect": "Character's action state hitbox/animation pointer",
    "comments": "",
    "notes": ""
  },
  "0x28": {
    "effect": "End of hitbox data pointer?",
    "comments": "",
    "notes": ""
  },
  "0x2C": {
    "effect": "Facing direction",
    "comments": "Float. 1 is right, -1 is left",
    "notes": ""
  },
  "0x30": {
    "effect": "Facing direction (Repeated)",
    "comments": "Not a direct repeat of above. I believe 0x30 is the actual facing direction of the model / Bone 0, and 0x2C is the \"official\" character facing as far as game/move logic is concerned.",
    "notes": ""
  },
  "0x34": {
    "effect": "Player Scale",
    "comments": "Read on map load.",
    "notes": ""
  },
  "0x38": {
    "effect": "Player Scale",
    "comments": "Read on map load. Set according to 0x94. Affects physics. [Affects hitbox size?]",
    "notes": ""
  },
  "0x3C": {
    "effect": "Player Depth Scale",
    "comments": "Read on map load. Changes width on Z-Axis",
    "notes": ""
  },
  "0x40": {
    "effect": "Pointer to Next Linked List",
    "comments": "Traditionally 0x00000000. THIS IS NOT ALWAYS CONSISTENT",
    "notes": ""
  },
  "0x44": {
    "effect": "Pointer to 0x40 / Pointer to Prev Linked List",
    "comments": "",
    "notes": ""
  },
  "0x45": {
    "effect": "?",
    "comments": "Byte.",
    "notes": ""
  },
  "0x46": {
    "effect": "Controller Index",
    "comments": "Byte.",
    "notes": ""
  },
  "0x47": {
    "effect": "",
    "comments": "Byte. 00 = red, 01 = blue, 02 = green",
    "notes": ""
  },
  "0x48": {
    "effect": "Length of Linked List",
    "comments": "Always 0x40 (64)?",
    "notes": ""
  },
  "0x49": {
    "effect": "CPU Level",
    "comments": "Byte.",
    "notes": ""
  },
  "0x4A": {
    "effect": "CPU Type",
    "comments": "Byte.",
    "notes": ""
  },
  "0x4B": {
    "effect": "Handicap Value",
    "comments": "Byte.",
    "notes": ""
  },
  "0x4C": {
    "effect": "?",
    "comments": "",
    "notes": ""
  },
  "0x50": {
    "effect": "?",
    "comments": "Float",
    "notes": ""
  },
  "0x54": {
    "effect": "Attack Ratio",
    "comments": "Float",
    "notes": ""
  },
  "0x58": {
    "effect": "Damage Defense Ratio",
    "comments": "Float",
    "notes": ""
  },
  "0x5C": {
    "effect": "Model Scale",
    "comments": "Float. Scale that match was started with. Modifying does nothing.",
    "notes": ""
  },
  "0x60": {
    "effect": "Stamina HP Lost / Percentage - Currently Displayed",
    "comments": "Short",
    "notes": ""
  },
  "0x62": {
    "effect": "Starting Percentage / Nana's %",
    "comments": "Short. Used in modes like Sudden Death to set your starting Percentage. Otherwise Nana's or Sheik's %",
    "notes": ""
  },
  "0x64": {
    "effect": "Stamina HP",
    "comments": "Short",
    "notes": ""
  },
  "0x66": {
    "effect": "?",
    "comments": "Short",
    "notes": ""
  },
  "0x68": {
    "effect": "Falls",
    "comments": "Int",
    "notes": ""
  },
  "0x6C": {
    "effect": "Nana's Death Count",
    "comments": "Int",
    "notes": ""
  },
  "0x70": {
    "effect": "P1 KOs",
    "comments": "Int",
    "notes": ""
  },
  "0x74": {
    "effect": "Unk",
    "comments": "Float. Used for Ness's Jump (@ 800CC654)",
    "notes": ""
  },
  "0x78": {
    "effect": "",
    "comments": "Float.",
    "notes": ""
  },
  "0x7C": {
    "effect": "P4 KOs",
    "comments": "Int",
    "notes": ""
  },
  "0x80": {
    "effect": "Horizontal velocity (self-induced)",
    "comments": "Changing this will only have an effect if the character is in the air.",
    "notes": ""
  },
  "0x84": {
    "effect": "Vertical Velocity (self-induced)",
    "comments": "Float. Positive = up, negative = down. Changes when the player jumps/falls of his own accord. Does not kill upward.",
    "notes": ""
  },
  "0x88": {
    "effect": "Depth velocity (self-induced)",
    "comments": "Float. Assume unused.",
    "notes": ""
  },
  "0x8C": {
    "effect": "Horizontal velocity (attack-induced)",
    "comments": "Float. Positive = right, negative = left.",
    "notes": ""
  },
  "0x8E": {
    "effect": "Stocks",
    "comments": "Byte",
    "notes": ""
  },
  "0x8F": {
    "effect": "00?",
    "comments": "Byte",
    "notes": ""
  },
  "0x90": {
    "effect": "Vertical velocity (attack-induced)",
    "comments": "Float. Positive = up, negative = down. Only works when player is in the air. Changes when the player is attacked. Kills upward.",
    "notes": ""
  },
  "0x94": {
    "effect": "Depth velocity (attack-induced)",
    "comments": "Float. Assume unused.",
    "notes": ""
  },
  "0x98": {
    "effect": "?",
    "comments": "",
    "notes": ""
  },
  "0x9C": {
    "effect": "?",
    "comments": "Int.",
    "notes": ""
  },
  "0xA0": {
    "effect": "",
    "comments": "Float.",
    "notes": ""
  },
  "0xA4": {
    "effect": "Pointer to Prev Linked List",
    "comments": "",
    "notes": ""
  },
  "0xA8": {
    "effect": "Pointer to Next Linked List",
    "comments": "",
    "notes": ""
  },
  "0xAC": {
    "effect": "Length of Linked List",
    "comments": "Int. Always 0x6 (6)?",
    "notes": ""
  },
  "0xAD": {
    "effect": "?",
    "comments": "",
    "notes": ""
  },
  "0xAE": {
    "effect": "?",
    "comments": "",
    "notes": ""
  },
  "0xAF": {
    "effect": "?",
    "comments": "",
    "notes": ""
  },
  "0xB0": {
    "effect": "X (Horizontal) position",
    "comments": "Float. Positive is right, negative is left. 00000000 is center.",
    "notes": ""
  },
  "0xB4": {
    "effect": "Y (Vertical) position",
    "comments": "Float. Only works when player is in the air.",
    "notes": ""
  },
  "0xBC": {
    "effect": "X (Horizonal) position (Prev. Frame)",
    "comments": "Float",
    "notes": ""
  },
  "0xC0": {
    "effect": "Y (Vertical) position (Prev. Frame)",
    "comments": "Float",
    "notes": ""
  },
  "0xC4": {
    "effect": "Z (Depth) Position (Prev. Frame)",
    "comments": "Float",
    "notes": ""
  },
  "0xC8": {
    "effect": "X Delta (Curr - Prev Pos)",
    "comments": "Float",
    "notes": ""
  },
  "0xCC": {
    "effect": "Y Delta (Curr - Prev Pos)",
    "comments": "Float",
    "notes": ""
  },
  "0xD0": {
    "effect": "Z Delta (Curr - Prev Pos)",
    "comments": "Float",
    "notes": ""
  },
  "0xD4": {
    "effect": "Stale Move Index 5",
    "comments": "",
    "notes": ""
  },
  "0xD8": {
    "effect": "Stale Move Index 6",
    "comments": "",
    "notes": ""
  },
  "0xDC": {
    "effect": "Stale Move Index 7",
    "comments": "",
    "notes": ""
  },
  "0xE0": {
    "effect": "Ground/Air state",
    "comments": "0x00000000 on ground, 0x00000001 in air. Changing does nothing.",
    "notes": ""
  },
  "0xE4": {
    "effect": "Horzitonal Velocity Queue (Will be added to 0xEC)",
    "comments": "Float.",
    "notes": ""
  },
  "0xE8": {
    "effect": "???",
    "comments": "Float.",
    "notes": ""
  },
  "0xEC": {
    "effect": "Horizontal velocity (ground, self-induced)",
    "comments": "Float. Self-induced. Also affects running animation.",
    "notes": ""
  },
  "0x6A8": {
    "effect": "Unk (Y Offset from Double Jump position?)",
    "comments": "Float. Used for Peach, Mewtwo, Yoshi, Ness Jump calc.",
    "notes": ""
  },
  "0x66C": {
    "effect": "Dash Forward Count",
    "comments": "",
    "notes": ""
  },
  "0x674": {
    "effect": "Frames Analog Stick Has Been in SmashTurn or Tilt (Y-Axis)",
    "comments": "",
    "notes": ""
  },
  "0x690": {
    "effect": "Ledge Grab Count",
    "comments": "",
    "notes": ""
  },
  "0x694": {
    "effect": "Taunt Count",
    "comments": "*",
    "notes": ""
  },
  "0x69C": {
    "effect": "Shield Count",
    "comments": "",
    "notes": ""
  },
  "0xD18": {
    "effect": "Total Connected Attacks",
    "comments": "Int. Incremented when an attack lands",
    "notes": ""
  },
  "0xD1C": {
    "effect": "Total Damage Received",
    "comments": "Float.",
    "notes": ""
  },
  "0xD20": {
    "effect": "Peak Damage Received",
    "comments": "Float. Reflects the highest amount of damage received in a single life",
    "notes": ""
  },
  "0xD28": {
    "effect": "Total Damage Given",
    "comments": "Float.",
    "notes": ""
  },
  "0xD38": {
    "effect": "Total Damage Received (Repeated?)",
    "comments": "Float.",
    "notes": ""
  },
  "START Player Entity Struct": {
    "effect": "Length 0x44",
    "comments": "Refers to values starting from the \"data pointer,\" also known as a GObj",
    "notes": ""
  },
  "0x02": {
    "effect": "p_link",
    "comments": "Byte.",
    "notes": ""
  },
  "0x03": {
    "effect": "gx_link",
    "comments": "Byte. Index into 2 arrays (highest render priority & lowest) of various GObjs for rendering, essentially indicating object type.",
    "notes": ""
  },
  "0x05": {
    "effect": "GX Render priority",
    "comments": "Byte. Reference 8039069C",
    "notes": ""
  },
  "0x06": {
    "effect": "obj_kind",
    "comments": "Byte. Set to 0xFF for NO REF.",
    "notes": ""
  },
  "0x07": {
    "effect": "data_kind",
    "comments": "Byte. Set to 0xFF for NO REF.",
    "notes": ""
  },
  "START Player Character Data": {
    "effect": "",
    "comments": "Traditionally, the game points to this for anything related to Char Data, as sometimes the data does not immediately follow the entity struct",
    "notes": ""
  },
  "0x01": {
    "effect": "Player Index (Internal ID)",
    "comments": "Word. Used for bone lookups, such as prior to spawning JObjs at a specified bone",
    "notes": ""
  },
  "0x0D": {
    "effect": "",
    "comments": "Byte",
    "notes": ""
  },
  "0x0F": {
    "effect": "",
    "comments": "Byte",
    "notes": ""
  },
  "0xB8": {
    "effect": "Z (Depth) position",
    "comments": "Float",
    "notes": ""
  },
  "0xF0": {
    "effect": "???",
    "comments": "Float.",
    "notes": ""
  },
  "0xF4": {
    "effect": "???",
    "comments": "Float.",
    "notes": ""
  },
  "0xF8": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x100": {
    "effect": "???",
    "comments": "Float.",
    "notes": ""
  },
  "0x104": {
    "effect": "Unk Pointer",
    "comments": "",
    "notes": ""
  },
  "0x108": {
    "effect": "Unk Pointer",
    "comments": "",
    "notes": ""
  },
  "0x10C": {
    "effect": "Pointer to .dat file in RAM",
    "comments": "0x8 from the address located here contains a pointer to the start of the .dat (0x20 of the start of the .dat in RAM)\n0x44 from the address located here contains a pointer to ledge grab box values. 0x10,014,0x18 are ledge grab box values",
    "notes": ""
  },
  "Character Attributes": {
    "effect": "",
    "comments": "These values are taken from the dat files and loaded directly into memory.",
    "notes": ""
  },
  "0x110": {
    "effect": "Walk initial velocity",
    "comments": "Float.",
    "notes": ""
  },
  "0x114": {
    "effect": "Walk acceleration",
    "comments": "",
    "notes": ""
  },
  "0x118": {
    "effect": "Walk maximum velocity",
    "comments": "",
    "notes": ""
  },
  "0x11C": {
    "effect": "Slow walk max?",
    "comments": "",
    "notes": ""
  },
  "0x120": {
    "effect": "Mid walk point?",
    "comments": "",
    "notes": ""
  },
  "0x124": {
    "effect": "Fast walk min?",
    "comments": "",
    "notes": ""
  },
  "0x128": {
    "effect": "Ground friction",
    "comments": "",
    "notes": ""
  },
  "0x12C": {
    "effect": "Dash initial velocity",
    "comments": "",
    "notes": ""
  },
  "0x130": {
    "effect": "Dash/run acceleration A",
    "comments": "...",
    "notes": ""
  },
  "0x134": {
    "effect": "Dash/run acceleration B",
    "comments": "",
    "notes": ""
  },
  "0x138": {
    "effect": "Dash/run terminal velocity",
    "comments": "",
    "notes": ""
  },
  "0x13C": {
    "effect": "Run animation scaling",
    "comments": "",
    "notes": ""
  },
  "0x140": {
    "effect": "Run Acceleration?",
    "comments": "",
    "notes": ""
  },
  "0x144": {
    "effect": "Grounded Max Horizontal Velocity",
    "comments": "",
    "notes": ""
  },
  "0x148": {
    "effect": "Jump startup time",
    "comments": "",
    "notes": ""
  },
  "0x14C": {
    "effect": "Jump H initial velocity",
    "comments": "",
    "notes": ""
  },
  "0x150": {
    "effect": "Jump V initial velocity",
    "comments": "",
    "notes": ""
  },
  "0x154": {
    "effect": "Ground to air jump momentum multiplier",
    "comments": "",
    "notes": ""
  },
  "0x158": {
    "effect": "Jump H max velocity",
    "comments": "",
    "notes": ""
  },
  "0x15C": {
    "effect": "Hop V initial velocity",
    "comments": "",
    "notes": ""
  },
  "0x160": {
    "effect": "Air jump V multiplier",
    "comments": "",
    "notes": ""
  },
  "0x164": {
    "effect": "Air jump H multiplier",
    "comments": "",
    "notes": ""
  },
  "0x168": {
    "effect": "Max Jumps",
    "comments": "",
    "notes": ""
  },
  "0x16C": {
    "effect": "Gravity",
    "comments": "Float.",
    "notes": ""
  },
  "0x170": {
    "effect": "Terminal Velocity",
    "comments": "",
    "notes": ""
  },
  "0x174": {
    "effect": "Air mobility A",
    "comments": "",
    "notes": ""
  },
  "0x178": {
    "effect": "Air mobility B",
    "comments": "",
    "notes": ""
  },
  "0x17C": {
    "effect": "Max Horizontal Air Speed",
    "comments": "",
    "notes": ""
  },
  "0x180": {
    "effect": "Horizontal Air Friction",
    "comments": "",
    "notes": ""
  },
  "0x184": {
    "effect": "Fastfall Velocity",
    "comments": "",
    "notes": ""
  },
  "0x188": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x18C": {
    "effect": "Jab-2 input window",
    "comments": "",
    "notes": ""
  },
  "0x190": {
    "effect": "Jab-3 input window",
    "comments": "",
    "notes": ""
  },
  "0x194": {
    "effect": "Frames to change direction on standing turn",
    "comments": "",
    "notes": ""
  },
  "0x198": {
    "effect": "Weight",
    "comments": "",
    "notes": ""
  },
  "0x19C": {
    "effect": "Model Scaling",
    "comments": "",
    "notes": ""
  },
  "0x1A0": {
    "effect": "Initial Shield Size",
    "comments": "",
    "notes": ""
  },
  "0x1A4": {
    "effect": "Shield break initial velocity",
    "comments": "",
    "notes": ""
  },
  "0x1A8": {
    "effect": "Rapid jab window",
    "comments": "",
    "notes": ""
  },
  "0x1AC": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1B0": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1B4": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1B8": {
    "effect": "Ledge Jump Horizontal Velocity",
    "comments": "",
    "notes": ""
  },
  "0x1BC": {
    "effect": "Ledge Jump Vertical Velocity",
    "comments": "",
    "notes": ""
  },
  "0x1C0": {
    "effect": "Item Throw Velocity Multiplier",
    "comments": "",
    "notes": ""
  },
  "0x1C4": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1C8": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1CC": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1D0": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1D4": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1D8": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1DC": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1E0": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1E4": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1E8": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1EC": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x1F0": {
    "effect": "Kirby B Star Damage",
    "comments": "",
    "notes": ""
  },
  "0x1F4": {
    "effect": "Normal Landing Lag",
    "comments": "",
    "notes": ""
  },
  "0x1F8": {
    "effect": "N-air Landing Lag",
    "comments": "",
    "notes": ""
  },
  "0x1FC": {
    "effect": "F-air Landing Lag",
    "comments": "",
    "notes": ""
  },
  "0x200": {
    "effect": "B-air Landing Lag",
    "comments": "",
    "notes": ""
  },
  "0x204": {
    "effect": "U-air Landing Lag",
    "comments": "",
    "notes": ""
  },
  "0x208": {
    "effect": "D-air Landing Lag",
    "comments": "",
    "notes": ""
  },
  "0x20C": {
    "effect": "Victory Screen Window Model Scale",
    "comments": "",
    "notes": ""
  },
  "0x210": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x214": {
    "effect": "Wall Jump Horizontal Velocity",
    "comments": "",
    "notes": ""
  },
  "0x218": {
    "effect": "Wall Jump Vertical Velocity",
    "comments": "",
    "notes": ""
  },
  "0x21C": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x220": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x224": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x228": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x22C": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x230": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x234": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x238": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x23C": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x240": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x244": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x248": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x24C": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x250": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x254": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x258": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x25C": {
    "effect": "Bubble ratio?",
    "comments": "",
    "notes": ""
  },
  "0x260": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x264": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x268": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x26C": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x270": {
    "effect": "Respawn Platform Scale",
    "comments": "",
    "notes": ""
  },
  "0x274": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x278": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x27C": {
    "effect": "Camera Zoom Target Bone?",
    "comments": "",
    "notes": ""
  },
  "0x280": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x284": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x288": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x28C": {
    "effect": "Special Jump Action = -1...?",
    "comments": "",
    "notes": ""
  },
  "0x290": {
    "effect": "Weight Dependent Throw Speed Flags",
    "comments": "",
    "notes": ""
  },
  "*Character Attributes End*": {
    "effect": "",
    "comments": "",
    "notes": ""
  },
  "0x2D4": {
    "effect": "Pointer to 0x2420",
    "comments": "Used by functions that are checking Article FP data",
    "notes": ""
  },
  "0x2D8": {
    "effect": "Pointer to 0x2420 (Repeated)",
    "comments": "",
    "notes": ""
  },
  "0x3E4": {
    "effect": "Sub Action Event Timer",
    "comments": "(Start of subaction struct. Often referenced as a pointer in subaction event functions as r4)",
    "notes": ""
  },
  "0x3E8": {
    "effect": "Sub Action State Frame Counter",
    "comments": "Float, resets to 1 with each new action state.",
    "notes": ""
  },
  "0x3EC": {
    "effect": "Subaction Syntax Data Position Pointer",
    "comments": "Pointer. Pointer points to the current position of the subaction event data (by the Word) as it is being read by the subaction event handler. The subaction event data is as it is stored in the Pl**.dat file. (That's right, like in Crazy Hand)",
    "notes": ""
  },
  "0x3F0": {
    "effect": "Event Loop Count",
    "comments": "Int. Controlled by Event 0x0C",
    "notes": ""
  },
  "0x3F4": {
    "effect": "Event Return Pointer",
    "comments": "",
    "notes": ""
  },
  "0x3F8": {
    "effect": "Unk",
    "comments": "Int. Same functionality as 0x3F0.",
    "notes": ""
  },
  "0x3FC": {
    "effect": "Unk",
    "comments": "",
    "notes": ""
  },
  "0x400": {
    "effect": "Pointer to 0x460",
    "comments": "",
    "notes": ""
  },
  "0x404": {
    "effect": "Pointer to 0x3C0",
    "comments": "",
    "notes": ""
  },
  "0x49C": {
    "effect": "Pointer to 0x4B0 / Color Blend Pointer",
    "comments": "",
    "notes": ""
  },
  "0x4B4": {
    "effect": "rrggbbaa color",
    "comments": "Changing changes color.",
    "notes": ""
  },
  "0x4B8": {
    "effect": "Red value",
    "comments": "Float. Set between 0 and 255.",
    "notes": ""
  },
  "0x4BC": {
    "effect": "Green value",
    "comments": "Float",
    "notes": ""
  },
  "0x4C0": {
    "effect": "Blue value",
    "comments": "Float",
    "notes": ""
  },
  "0x4C4": {
    "effect": "Alpha value",
    "comments": "Float",
    "notes": ""
  },
  "0x4C8": {
    "effect": "Red blink rate",
    "comments": "Float",
    "notes": ""
  },
  "0x4CC": {
    "effect": "Green blink rate",
    "comments": "Float",
    "notes": ""
  },
  "0x4D0": {
    "effect": "Blue blink rate",
    "comments": "Float",
    "notes": ""
  },
  "0x4D4": {
    "effect": "Alpha blink rate",
    "comments": "Float",
    "notes": ""
  },
  "0x504": {
    "effect": "Color tint on/off",
    "comments": "Byte. Change to 0x80 or above to induce a color tint. Melee uses 0x91",
    "notes": ""
  },
  "0x58C": {
    "effect": "Action state ID?",
    "comments": "read during ASC @ 80085cf8",
    "notes": ""
  },
  "0x590": {
    "effect": "Action state data pointer",
    "comments": "I THINK this points to data related to current action state.",
    "notes": ""
  },
  "0x594": {
    "effect": "Team ID",
    "comments": "Most-significant bit appears to be related to air-to-ground momentum transfer, rest unknown",
    "notes": ""
  },
  "0x598": {
    "effect": "Unknown pointer",
    "comments": "",
    "notes": ""
  },
  "0x59C": {
    "effect": "Pointer to portion of PlxxAJ.dat for current subaction",
    "comments": "",
    "notes": ""
  },
  "0x5A4": {
    "effect": "Action state data length",
    "comments": "",
    "notes": ""
  },
  "0x5E8": {
    "effect": "Bone lookup table (Points to a table of pointers to JObjs)",
    "comments": "http://smashboards.com/threads/custom-subaction-event-character-data-modifications.429112/#post-20920399",
    "notes": "Note: The Table1 referenced here is incorrect - It's actually a JObj."
  },
  "0x5F8": {
    "effect": "Item Held Bool?",
    "comments": "",
    "notes": ""
  },
  "0x60C": {
    "effect": "Pointer to GFX to display",
    "comments": "",
    "notes": ""
  },
  "0x618": {
    "effect": "Player controller number",
    "comments": "Byte. Change this to have a different player control the character.",
    "notes": ""
  },
  "0x619": {
    "effect": "Costume ID",
    "comments": "Byte.",
    "notes": ""
  },
  "0x61A": {
    "effect": "Color Overlay ID",
    "comments": "",
    "notes": ""
  },
  "0x61B": {
    "effect": "Team ID",
    "comments": "Byte. 00 = red, 01 = blue, 02 = green",
    "notes": ""
  },
  "0x620": {
    "effect": "Analog Stick Data X",
    "comments": "Used to compare previous value vs. current value to differentiate \"tilts\" and \"smashes",
    "notes": ""
  },
  "0x624": {
    "effect": "Analog Stick Data Y",
    "comments": "",
    "notes": ""
  },
  "0x628": {
    "effect": "Prev Analog Stick X",
    "comments": "",
    "notes": ""
  },
  "0x62C": {
    "effect": "Prev Analog Stick Y",
    "comments": "",
    "notes": ""
  },
  "0x630": {
    "effect": "",
    "comments": "",
    "notes": ""
  },
  "0x634": {
    "effect": "",
    "comments": "",
    "notes": ""
  },
  "0x638": {
    "effect": "C-Stick X-Axis",
    "comments": "Float (-1.0 to 1.0)",
    "notes": ""
  },
  "0x63C": {
    "effect": "C-Stick Y-Axis",
    "comments": "Float (-1.0 to 1.0)",
    "notes": ""
  },
  "0x640": {
    "effect": "Flags",
    "comments": "",
    "notes": ""
  },
  "0x644": {
    "effect": "",
    "comments": "",
    "notes": ""
  },
  "0x648": {
    "effect": "",
    "comments": "",
    "notes": ""
  },
  "0x64C": {
    "effect": "",
    "comments": "",
    "notes": ""
  },
  "0x650": {
    "effect": "Analog trigger data",
    "comments": "43/140 minimum, 1.00 maximum. 0.35 if z held.",
    "notes": ""
  },
  "0x65C": {
    "effect": "Digital Button Data",
    "comments": "See Global Addresses regarding Controller Data to better understand this.",
    "notes": ""
  },
  "0x660": {
    "effect": "Digital Button Data (Prev. Frame)",
    "comments": "",
    "notes": ""
  },
  "0x670": {
    "effect": "Frames Analog Stick Has Been in Tilt (X-Axis)",
    "comments": "",
    "notes": ""
  },
  "0x671": {
    "effect": "Frames Analog Stick Has Been in Tilt (Y-Axis)",
    "comments": "",
    "notes": ""
  },
  "0x672": {
    "effect": "Frames Analog Trigger Has Been Lightly Pressed",
    "comments": "",
    "notes": ""
  },
  "0x673": {
    "effect": "Frames Analog Stick Has Been in SmashTurn or Tilt (X-Axis)",
    "comments": "",
    "notes": ""
  },
  "0x675": {
    "effect": "Frames Analog Trigger Has Been Hard Pressed",
    "comments": "",
    "notes": ""
  },
  "0x676": {
    "effect": "Frames Since Analog Stick Was Moved From X-Axis",
    "comments": "",
    "notes": ""
  },
  "0x677": {
    "effect": "Frames Since Analog Stick Was Moved From Y-Axis",
    "comments": "",
    "notes": ""
  },
  "0x678": {
    "effect": "Frames Since Analog Trigger Was Moved",
    "comments": "",
    "notes": ""
  },
  "0x67C": {
    "effect": "Frames Since A Button Was Pressed",
    "comments": "",
    "notes": ""
  },
  "0x67D": {
    "effect": "Frames Since B Button Was Pressed",
    "comments": "",
    "notes": ""
  },
  "0x67E": {
    "effect": "Frames Since X/Y Button Was Pressed",
    "comments": "",
    "notes": ""
  },
  "0x67F": {
    "effect": "Frames Since Z Button Was Pressed",
    "comments": "",
    "notes": ""
  },
  "0x680": {
    "effect": "Frames Since L/R Digital Button Was Pressed",
    "comments": "",
    "notes": ""
  },
  "0x681": {
    "effect": "Frames Since DPad Up Button Was Pressed",
    "comments": "",
    "notes": ""
  },
  "0x682": {
    "effect": "Frames Since DPad Down Button Was Pressed",
    "comments": "",
    "notes": ""
  },
  "0x688": {
    "effect": "Unknown Byte Flag",
    "comments": "Modified in function at 0x8006abec; unknown.",
    "notes": ""
  },
  "0x689": {
    "effect": "Time since Special Button being pressed (not modifiable?)",
    "comments": "Modified in function at 0x8006abec; is based on the bool return value of a function pertaining to the B button. Byte. (0=just pressed; n = pressed n frames ago)",
    "notes": ""
  },
  "0x6AC": {
    "effect": "Unk",
    "comments": "Float. Seen using Peach's Umbrella",
    "notes": ""
  },
  "0x6F0": {
    "effect": "Pointer to 0x00 / Start of Physics Struct",
    "comments": "",
    "notes": ""
  },
  "0x6F4": {
    "effect": "X (Curr Frame)",
    "comments": "Float. Likely positions of TopN for physics related functions.",
    "notes": ""
  },
  "0x6F8": {
    "effect": "Y",
    "comments": "Float",
    "notes": ""
  },
  "0x6FC": {
    "effect": "Z",
    "comments": "Float",
    "notes": ""
  },
  "0x700": {
    "effect": "X (Prev Frame)",
    "comments": "Float",
    "notes": ""
  },
  "0x704": {
    "effect": "Y",
    "comments": "Float",
    "notes": ""
  },
  "0x708": {
    "effect": "Z",
    "comments": "Float",
    "notes": ""
  },
  "0x70C": {
    "effect": "X (Prev Frame)",
    "comments": "Float",
    "notes": ""
  },
  "0x710": {
    "effect": "Y",
    "comments": "Float",
    "notes": ""
  },
  "0x714": {
    "effect": "Z",
    "comments": "Float",
    "notes": ""
  },
  "0x718": {
    "effect": "X (Curr Frame)",
    "comments": "Float",
    "notes": ""
  },
  "0x71C": {
    "effect": "Y",
    "comments": "Float",
    "notes": ""
  },
  "0x720": {
    "effect": "Z",
    "comments": "Float",
    "notes": ""
  },
  "0x726": {
    "effect": "Ledge grab box activation",
    "comments": "",
    "notes": ""
  },
  "0x72C": {
    "effect": "Floor ID - Action State",
    "comments": "",
    "notes": ""
  },
  "0x738": {
    "effect": "Collision?",
    "comments": "",
    "notes": ""
  },
  "0x744": {
    "effect": "Ledge Grab Box - X Width",
    "comments": "",
    "notes": ""
  },
  "0x748": {
    "effect": "Ledge Grab Box - Y Displacement",
    "comments": "",
    "notes": ""
  },
  "0x74C": {
    "effect": "Ledge Grab Box - Y Stretch",
    "comments": "",
    "notes": ""
  },
  "0x7A4": {
    "effect": "",
    "comments": "",
    "notes": ""
  },
  "0x7A8": {
    "effect": "ECB top",
    "comments": "",
    "notes": ""
  },
  "0x7AC": {
    "effect": "ECB left",
    "comments": "",
    "notes": ""
  },
  "0x7B0": {
    "effect": "ECB bottom",
    "comments": "",
    "notes": ""
  },
  "0x7C4": {
    "effect": "ECB right (prev frame)?",
    "comments": "",
    "notes": ""
  },
  "0x7C8": {
    "effect": "ECB top (prev frame)?",
    "comments": "",
    "notes": ""
  },
  "0x7CC": {
    "effect": "ECB left (pref frame)?",
    "comments": "",
    "notes": ""
  },
  "0x7D0": {
    "effect": "ECB bottom (prev frame)?",
    "comments": "",
    "notes": ""
  },
  "0x824": {
    "effect": "Environment Bitfield",
    "comments": "",
    "notes": ""
  },
  "0x830": {
    "effect": "Position Last Landed",
    "comments": "",
    "notes": ""
  },
  "0x83C": {
    "effect": "Floor ID",
    "comments": "",
    "notes": ""
  },
  "0x840": {
    "effect": "Ground Type",
    "comments": "",
    "notes": ""
  },
  "0x83F": {
    "effect": "Platform ID",
    "comments": "",
    "notes": ""
  },
  "0x842": {
    "effect": "Stage relation ID",
    "comments": "",
    "notes": ""
  },
  "0x843": {
    "effect": "Stage transformation ID",
    "comments": "Byte. Default is 00, Pokemon Stadium transformations change this value",
    "notes": ""
  },
  "0x88C": {
    "effect": "ECB Inactive Frames",
    "comments": "Int.",
    "notes": ""
  },
  "0x890": {
    "effect": "Pointer to Floating Point Data",
    "comments": "See 80086B80 for example",
    "notes": ""
  },
  "0x894": {
    "effect": "Action State Frame Counter",
    "comments": "Float, resets to 1 with each new action state.",
    "notes": ""
  },
  "0x898": {
    "effect": "???",
    "comments": "Float. Used for setting 0x3E8 during Event function",
    "notes": ""
  },
  "0x89C": {
    "effect": "Speed of Current Animation",
    "comments": "Float. Changing does nothing.",
    "notes": ""
  },
  "0x8A4": {
    "effect": "???",
    "comments": "Knocks player out of action states when set to 40C00000",
    "notes": ""
  },
  "0x914": {
    "effect": "Hitbox 0",
    "comments": "http://smashboards.com/threads/custom-subaction-event-character-data-modifications.429112/#post-20920399",
    "notes": ""
  },
  "0xA4C": {
    "effect": "Hitbox 1",
    "comments": "Note that the above thread lists as +0x60 position",
    "notes": ""
  },
  "0xB84": {
    "effect": "Hitbox 2",
    "comments": "",
    "notes": ""
  },
  "0xCBC": {
    "effect": "Hitbox 3",
    "comments": "",
    "notes": ""
  },
  "0x1198": {
    "effect": "Player ID Hitbox cannot Hit?",
    "comments": "For some reason there is a flag in the hitbox subaction event that, when combined with this address being zero, prevents said hitbox from spawning (The code literally makes the parser skip over the hitbox.). See 0x8007121c. // Makes an exception for hitbox collision?",
    "notes": "Update: Pointer of the player who threw this character. Used for throw knockback collisions and enables hitboxes only when character is thrown."
  },
  "0x119C": {
    "effect": "Team ID stored here",
    "comments": "Somethign to do with Hitboxes and friendly fire?",
    "notes": ""
  },
  "0x119D": {
    "effect": "Grabbing player's 0xC variable?",
    "comments": "The byte at 0xC of the grabbing player's block is stored here for the person who was grabbed",
    "notes": ""
  },
  "0x11A0": {
    "effect": "Hurtbox data start.",
    "comments": "https://smashboards.com/threads/melee-gecko-codes-guide-and-discussion.327311/page-44#post-21572283",
    "notes": ""
  },
  "0x1830": {
    "effect": "Percentage",
    "comments": "Float.",
    "notes": ""
  },
  "0x1838": {
    "effect": "Percentage for Damage Calculation",
    "comments": "Float",
    "notes": ""
  },
  "0x183C": {
    "effect": "Damage Applied",
    "comments": "",
    "notes": ""
  },
  "0x1840": {
    "effect": "0x00000000?",
    "comments": "",
    "notes": ""
  },
  "0x1844": {
    "effect": "Damage Direction",
    "comments": "Float. -1 to 1",
    "notes": ""
  },
  "0x1848": {
    "effect": "Knockback Angle",
    "comments": "Int. Normally 0x00000169 (Sakurai Angle)",
    "notes": ""
  },
  "0x184C": {
    "effect": "0x00000001?",
    "comments": "",
    "notes": ""
  },
  "0x1850": {
    "effect": "Force Applied",
    "comments": "Float.",
    "notes": ""
  },
  "0x1854": {
    "effect": "X Position of Hitbox",
    "comments": "Float",
    "notes": ""
  },
  "0x1858": {
    "effect": "Y Position of Hitbox",
    "comments": "Float",
    "notes": ""
  },
  "0x185C": {
    "effect": "Z Position of Hitbox",
    "comments": "Float",
    "notes": ""
  },
  "0x1860": {
    "effect": "Unk",
    "comments": "Dependent on 0x1848",
    "notes": ""
  },
  "0x1864": {
    "effect": "Unk",
    "comments": "Dependent on 0x1848",
    "notes": ""
  },
  "0x1868": {
    "effect": "Damage Source",
    "comments": "Points to an entity",
    "notes": ""
  },
  "0x186C": {
    "effect": "Last Applied Damage",
    "comments": "Float",
    "notes": ""
  },
  "0x18A4": {
    "effect": "???",
    "comments": "Float. Loaded with 80087454",
    "notes": ""
  },
  "0x18B4": {
    "effect": "Armor",
    "comments": "Acts like Yoshi's Double Jump Armor. Works on Grounded and Aerial! Float.",
    "notes": ""
  },
  "0x18B8": {
    "effect": "SDI horizontal offset",
    "comments": "",
    "notes": ""
  },
  "0x18BC": {
    "effect": "SDI vertical offset",
    "comments": "",
    "notes": ""
  },
  "0x18C4": {
    "effect": "Slot of Last Damage Source",
    "comments": "0 - 5, with 6 indicating a self-destruct",
    "notes": ""
  },
  "0x18F4": {
    "effect": "Turn Timer",
    "comments": "",
    "notes": ""
  },
  "0x1910": {
    "effect": "Frames Spent Offscreen",
    "comments": "Goes up by 1 for every frame in offscreen bubble",
    "notes": ""
  },
  "0x195C": {
    "effect": "Hitlag counter",
    "comments": "Float. Counts down by 1 every frame until reaching 0. The last frame of hitlag is the frame before it hits 0.",
    "notes": ""
  },
  "0x1968": {
    "effect": "Number of jumps used (8-bit)",
    "comments": "Gives more jumps if lowered.",
    "notes": ""
  },
  "0x1969": {
    "effect": "Number of walljumps used",
    "comments": "Read by the Walljump AS to determine how much velocity to give (800c2114)",
    "notes": ""
  },
  "0x1974": {
    "effect": "Item Held",
    "comments": "",
    "notes": ""
  },
  "0x1978": {
    "effect": "Item Related?",
    "comments": "",
    "notes": ""
  },
  "0x197C": {
    "effect": "Bunny Hood",
    "comments": "",
    "notes": ""
  },
  "0x198C": {
    "effect": "Player body state (32-bit)",
    "comments": "0 = normal, 1 = invulnerable, 2 = intangible",
    "notes": ""
  },
  "0x1990": {
    "effect": "Ledge invincibility timer",
    "comments": "Invincibility runs out when this hits 0. Modifiable.",
    "notes": ""
  },
  "0x1994": {
    "effect": "Halo invincibility timer",
    "comments": "Invincibility runs out when this hits 0. Modifiable.",
    "notes": ""
  },
  "0x1998": {
    "effect": "Shield size",
    "comments": "",
    "notes": ""
  },
  "0x199C": {
    "effect": "Lightshield amount",
    "comments": "Float. 1 is hard shield. z-shield is 3D924921, or .071429",
    "notes": ""
  },
  "0x19A4": {
    "effect": "Shield Follow Bit",
    "comments": "",
    "notes": ""
  },
  "0x19C4": {
    "effect": "Shield Follow Bit",
    "comments": "",
    "notes": ""
  },
  "0x19E8": {
    "effect": "Reflect Follow Bit",
    "comments": "",
    "notes": ""
  },
  "0x1A40": {
    "effect": "Direction Absorb Was Hit From",
    "comments": "Float,",
    "notes": ""
  },
  "0x1A44": {
    "effect": "Damage Dealt to Absorb?",
    "comments": "Int.",
    "notes": ""
  },
  "0x1A4C": {
    "effect": "Breakout countdowns",
    "comments": "Float. Grabs, sleep attack element, ground attack element. Player breaks out when this reaches 0.",
    "notes": ""
  },
  "0x1A58": {
    "effect": "Pointer to Grabbing Player",
    "comments": "",
    "notes": ""
  },
  "0x1A5C": {
    "effect": "Pointer to Grabbing Player (Repeated)",
    "comments": "",
    "notes": ""
  },
  "0x1A68": {
    "effect": "???",
    "comments": "Short. Set according to r4 in 8007e2d0",
    "notes": ""
  },
  "0x1A6A": {
    "effect": "Grabbable Flag",
    "comments": "Short. Set according to r4 by 8007e2f4",
    "notes": ""
  },
  "0x1A94": {
    "effect": "CPU AI Type",
    "comments": "Int. Lower 8 bits is the type. Can be changed mid-game.",
    "notes": ""
  },
  "0x1A98": {
    "effect": "CPU Level",
    "comments": "Int. Can be changed midgame",
    "notes": ""
  },
  "0x1F1C": {
    "effect": "Pointer to 0x1F90",
    "comments": "",
    "notes": ""
  },
  "0x1F74": {
    "effect": "Pointer to 0x1F7C",
    "comments": "",
    "notes": ""
  },
  "0x2000": {
    "effect": "Lip Stick Flower Remainder",
    "comments": "Frames of Lip Stick Flower remaining",
    "notes": ""
  },
  "0x2004": {
    "effect": "Starman Invincibility",
    "comments": "Controls something with the duration of the sparkle after starman ends.",
    "notes": ""
  },
  "0x2008": {
    "effect": "Mushroom Duration",
    "comments": "(32-bit) After obtaining a either mushroom, default length gets stored in this address and is decremented by one every frame. Transforms back to regular size when reaches 0.",
    "notes": ""
  },
  "0x2014": {
    "effect": "Bunny Hood Duration",
    "comments": "Frames of Bunny Hood remaining",
    "notes": ""
  },
  "0x2028": {
    "effect": "Metal Box Duration",
    "comments": "Frames of Metal Box remaining",
    "notes": ""
  },
  "0x2030": {
    "effect": "Cloaking Device Duration",
    "comments": "Frames of Cloaking Device remaining",
    "notes": ""
  },
  "0x2064": {
    "effect": "Ledge Grab Cooldown",
    "comments": "Decrements by 1 each frame off the ledge",
    "notes": ""
  },
  "0x206C": {
    "effect": "Total # of action states",
    "comments": "Increases by 1 with every new action state until match end.",
    "notes": ""
  },
  "0x2070": {
    "effect": "Word from 0x4 of Move Logic Table",
    "comments": "8-Bit (is read in bits, but is stored with a word @ 8008968c (comes from action state change))",
    "notes": ""
  },
  "0x2071": {
    "effect": "Unknown",
    "comments": "8-Bit (80037cdc reads this during actionstatechange)",
    "notes": ""
  },
  "0x2072": {
    "effect": "Unknown",
    "comments": "8-Bit (80037ca4 and 80037c88 read this during actionstatechange)",
    "notes": ""
  },
  "0x2073": {
    "effect": "Unknown",
    "comments": "Byte (80037cf8 reads this during actionstatechange),",
    "notes": ""
  },
  "0x2074": {
    "effect": "Percentage as Int?",
    "comments": "Written to here (800896a4)",
    "notes": ""
  },
  "0x2084": {
    "effect": "???",
    "comments": "Byte. Seems to have something to do with how the Sakurai angle is calculated. See 0x8007ac9c.",
    "notes": ""
  },
  "0x208C": {
    "effect": "Last attack landed",
    "comments": "",
    "notes": ""
  },
  "0x2090": {
    "effect": "Combo count (16-bit)",
    "comments": "",
    "notes": ""
  },
  "0x2098": {
    "effect": "Player tag countdown",
    "comments": "Displays the \"P1\", etc. tag when the countdown hits 1.",
    "notes": ""
  },
  "0x20A4": {
    "effect": "???",
    "comments": "Pointer to loaded by 800872B0",
    "notes": ""
  },
  "0x20C4": {
    "effect": "Pointer to 0x2138",
    "comments": "These are part of some sort of linked list. The next value after pointers always seems to be 6.",
    "notes": ""
  },
  "0x20D4": {
    "effect": "Pointer to 0x1FDC",
    "comments": "",
    "notes": ""
  },
  "0x20D8": {
    "effect": "Pointer to 0x214C",
    "comments": "",
    "notes": ""
  },
  "0x20E8": {
    "effect": "Pointer to 0x1FE4",
    "comments": "",
    "notes": ""
  },
  "0x20EC": {
    "effect": "Pointer to 0x2160",
    "comments": "",
    "notes": ""
  },
  "0x210C": {
    "effect": "Wallride counter (8-bit)",
    "comments": "Set to 0 when contact with a wall (other conditions necessary)",
    "notes": ""
  },
  "0x2110": {
    "effect": "Wall location (float)",
    "comments": "Wall on left(1)/right(-1) of character",
    "notes": ""
  },
  "0x2114": {
    "effect": "Smash attack state",
    "comments": "2 = charging smash, 3 = attacking with charged smash, 0 = all other times",
    "notes": ""
  },
  "0x2118": {
    "effect": "Smash attack charge frame counter",
    "comments": "",
    "notes": ""
  },
  "0x211C": {
    "effect": "Frame number at which a fully charged smash initiates (float)",
    "comments": "default = 0x42700000 = 60",
    "notes": "This isn't accurate for Fox. For him, it's a pointer to 0x2124. So, this is likely some kind of struct that needs to be better understood."
  },
  "0x2120": {
    "effect": "Charged smash attack strength multiplier",
    "comments": "",
    "notes": ""
  },
  "0x2124": {
    "effect": "Charged smash attack animation speed multiplier (attack animation only)",
    "comments": "",
    "notes": ""
  },
  "0x2188": {
    "effect": "???",
    "comments": "",
    "notes": ""
  },
  "0x218C": {
    "effect": "???",
    "comments": "Int. Some kind of timer. Seems to count down on attacks and up during states like Wait",
    "notes": ""
  },
  "0x219C": {
    "effect": "Current Action State IASA Function Pointer",
    "comments": "",
    "notes": ""
  },
  "0x21A0": {
    "effect": "Current Action State Animation Interrupt Pointer",
    "comments": "",
    "notes": ""
  },
  "0x21A4": {
    "effect": "Current Action State Physics Pointer",
    "comments": "",
    "notes": ""
  },
  "0x21A8": {
    "effect": "Current Action State Collision Interrupt Pointer",
    "comments": "",
    "notes": ""
  },
  "0x21AC": {
    "effect": "Current Action State Camera Behavior Pointer",
    "comments": "",
    "notes": ""
  },
  "0x21BC": {
    "effect": "Projectile Spawn Function Pointer",
    "comments": "800E1178 is an example of this being set for Mario's Special N.",
    "notes": ""
  },
  "0x21C0": {
    "effect": "Pointer to function to execute on-hit",
    "comments": "Used by Link/YL dair and possibly others. Works for any grounded or aerial normal, but it seems not to be evaluated for specials.",
    "notes": ""
  },
  "0x21C4": {
    "effect": "Function to run on Shield Hit",
    "comments": "",
    "notes": ""
  },
  "0x21C8": {
    "effect": "Function to run on Reflect Hit",
    "comments": "",
    "notes": ""
  },
  "0x21D4": {
    "effect": "Function to run when player is hit",
    "comments": "",
    "notes": ""
  },
  "0x21D8": {
    "effect": "Function to run when player leaves hitlag",
    "comments": "",
    "notes": ""
  },
  "0x21DC": {
    "effect": "Function to run when player is hit",
    "comments": "",
    "notes": ""
  },
  "0x21E4": {
    "effect": "",
    "comments": "",
    "notes": ""
  },
  "0x21EC": {
    "effect": "Function to run when player is thrown",
    "comments": "Function is run after kirby Up-Throw hit's the ground. blrl for this exists at 80069bd8 inside ActionStateChange",
    "notes": ""
  },
  "0x21F4": {
    "effect": "Function to run when white detection bubbles collide",
    "comments": "",
    "notes": ""
  },
  "0x21FC": {
    "effect": "Collision bubble toggle (8-bit)",
    "comments": "01=no collision bubbles (default), 02=collision bubbles & no char textures, 03=overlayed bubbles",
    "notes": ""
  },
  "0x2200": {
    "effect": "???",
    "comments": "Int. Checked == 0 in 800e4f48 and set to 0 if != 0",
    "notes": ""
  },
  "0x2204": {
    "effect": "Flag to Init Reflect Hitbox",
    "comments": "Checked for Mario Cape @ 800e1668, equals 1 when reflect hitbox should be active // Used during Fox/Falco's Shine at 800e65bc",
    "notes": ""
  },
  "0x220C": {
    "effect": "??? Flags",
    "comments": "Compared with 2 during Fox/Falco's shine at 800e65bc",
    "notes": ""
  },
  "0x2210": {
    "effect": "??? Flags",
    "comments": "Byte. Mario's fireball spawn (800E0EE0) checks bit 24 == 1",
    "notes": ""
  },
  "0x2218": {
    "effect": "IASA Flags",
    "comments": "Byte. Checked and modified with 80093bc0 and 80093cd0. 0x80 = IASA enabled. Set by 80071950 (Subaction 0x5C)",
    "notes": ""
  },
  "0x2219": {
    "effect": "Various Flags",
    "comments": "Byte. 0x05 = character freezes and hitboxes stay out for 1 collision. 0x03 = player acts normal and freezes when hit, can SDI around after. (verify: 0x10 = hitbox is out?) [0x01 bit appears to be the flag that controls whether or not the hitboxes of the character can have  collisions.]",
    "notes": ""
  },
  "0x221A": {
    "effect": "isFastFalling Flag",
    "comments": "Byte. Bit 31 checked and modified with 80093bc0 and 80093cd0",
    "notes": ""
  },
  "0x221B": {
    "effect": "Shield Enabled Bit",
    "comments": "Byte. Checked and modified with 80093bc0",
    "notes": ""
  },
  "0x221D": {
    "effect": "??? Flags",
    "comments": "",
    "notes": ""
  },
  "0x221E": {
    "effect": "Model Visibility Flag",
    "comments": "rightmost bit = visibility bit",
    "notes": ""
  },
  "0x221F": {
    "effect": "Bit Flags",
    "comments": "Byte. Get bit 24 with 80086B64. Get bit 28 with 800874BC. Get bit 29 with 8008730C.",
    "notes": ""
  },
  "0x2223": {
    "effect": "Metal Texture Toggle (8-bit)",
    "comments": "01=on (like getting the metal box item), 00=off",
    "notes": ""
  },
  "0x2224": {
    "effect": "Can walljump (8-bit)",
    "comments": "01 = can walljump, 00 = can't walljump",
    "notes": ""
  },
  "0x2227": {
    "effect": "Bit flags",
    "comments": "Byte.",
    "notes": ""
  },
  "0x222C": {
    "effect": "Misc Flags // Bowser Flame Degradation Count // Marth Side B Refresh // Peach Float // Luigi Cyclone Flag",
    "comments": "Compared to 0 for transitioning to Action State 14 during Fox/Falco Shine @ 800e65bc, is also expected to be 0 prior in the function // Peach Float Flag reset @ (0x80069934)",
    "notes": ""
  },
  "0x2230": {
    "effect": "Flags",
    "comments": "Used as a check in DrMario's pill spawn function @ 0x800E0FD0 as an index for the current pill color",
    "notes": ""
  },
  "0x223C": {
    "effect": "Original Held Item Pointer",
    "comments": "Pointer to an Item GObj",
    "notes": "When Peach's Parasol is removed by 802BDB94, this is swapped into the Held Item. Presumably for when Up-Bing with an Item"
  },
  "0x2324": {
    "effect": "???",
    "comments": "Appears to be a value or duration of sorts. See @0x800768a0",
    "notes": ""
  },
  "0x2328": {
    "effect": "???",
    "comments": "Directly related to Hitbox.0x04. When creating a hitbox, if what that value gets set to is equal to the value in this memory address, it will trigger a function that copies unknown parts of the hitbox.See @0x800768a0",
    "notes": ""
  },
  "0x2290": {
    "effect": "Misc Special Flags?",
    "comments": "Used for Kirby's vertical velocity boost on side B.Reset to 0 when",
    "notes": "Also used to count other things relating to frames (but as integers): Shield Time, Grabbed Time, Time Left on Spawn Platform, Time left to lie on Ground"
  },
  "0x2330": {
    "effect": "Hammer Duration",
    "comments": "Frames of Hammer remaining",
    "notes": "Also used to count other things relating to frames (but as integers): Shield Time, Grabbed Time, Time Left on Spawn Platform, Time left to lie on Ground"
  },
  "0x2340": {
    "effect": "Misc Flags // Hitstun counter // Short Hop Identifier // PS Count",
    "comments": "Float. Frames of hitstun left. Decremented by 1 every frame of game. // 0 = full hop, 1 = short hop",
    "notes": ""
  },
  "0x2342": {
    "effect": "Misc Flags",
    "comments": "Byte. Used for flags, like Cliff Grab.",
    "notes": ""
  },
  "0x2344": {
    "effect": "Misc Flags // Shield Location from Body",
    "comments": "Float. 0 = center of body, 1 = furthest amount away",
    "notes": ""
  },
  "0x2348": {
    "effect": "Shield Angle",
    "comments": "Float, degrees. 0 = in front of, 90 = up, 180 = behind, 270 = down (offset +10 degrees?)",
    "notes": ""
  },
  "0x234C": {
    "effect": "Misc Flags // Times Walljumped",
    "comments": "",
    "notes": ""
  },
  "0x2354": {
    "effect": "Landing Lag Divisor",
    "comments": "Float. Used to calclulate landing lag. Dividend is usually 30, so 30 divided by this value gives you the number the animation speed will be DIVIDED by. Quotient smaller numbers = longer animation",
    "notes": ""
  },
  "0x2358": {
    "effect": "Act out of Landing Flag / ??",
    "comments": "Read upon landing at 80096d68 and compared at 800d5db0. If 0, cannot act out of landing. If 1, can act out of landing after 4 frames. (Used to differentiate between a specialland and normal land?) // OLD DESCRIPTION: Float. Used for a comparison @ 80093c94 and 80093cd0",
    "notes": ""
  },
  "0x2420": {
    "effect": "Start of Per Character Article Floating Points",
    "comments": "Doesn't appear to be 1:1 with Dantarion's offsets, but mostly the same. Not all changes work. Plus they reset whenever a new spawn of the character occurs.",
    "notes": ""
  }
}


export const getDataOffset = (value: string, formattedText: any) => {
  let item = charDataOffset[value] || UnknownOffset;
  if(item !== UnknownOffset){
    formattedText.appendMarkdown(`**Char Data Offset**  \n`)
    formattedText.appendMarkdown(`* **Effect:** ${item.effect}  \n`)
    formattedText.appendMarkdown(`* **Comments:** ${item.comments}  \n`);
  }
}