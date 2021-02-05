export interface Command {
  mnemonics: string;
  description: string;
}

export const UnknownCommand: Command = {
  mnemonics: "Unknown Command",
  description: "Unknown"
};

export const Commands: { [command: string]: Command } = {
  "add": {
    "mnemonics": "add / add. / addo / addo.",
    "description": "Add"
  },
  "addc": {
    "mnemonics": "addc / addc. / addco /addco.",
    "description": "Add Carrying"
  },
  "adde": {
    "mnemonics": "adde / adde. / addeo /addeo.",
    "description": "Add Extended"
  },
  "addi": {
    "mnemonics": "addi / li / la / subi",
    "description": "Add Immediate"
  },
  "addic": {
    "mnemonics": "addic / subic",
    "description": "Add Immediate Carrying"
  },
  "addic.": {
    "mnemonics": "addic. / subic.",
    "description": "Add Immediate Carrying and Record"
  },
  "addis": {
    "mnemonics": "addis / lis / subis",
    "description": "Add Immediate Shifted"
  },
  "addme": {
    "mnemonics": "addme / addme. / addmeo / addmeo.",
    "description": "Add to Minus One Extended"
  },
  "addze": {
    "mnemonics": "addze / addze. / addzeo / addzeo.",
    "description": "Add to Zero Extended"
  },
  "and": {
    "mnemonics": "and / and.",
    "description": "AND"
  },
  "andc": {
    "mnemonics": "andc / andc.",
    "description": "AND with Complement"
  },
  "andi.": {
    "mnemonics": "andi.",
    "description": "AND Immediate"
  },
  "andis.": {
    "mnemonics": "andis.",
    "description": "AND Immediate Shifted"
  },
  "b": {
    "mnemonics": "b / ba / bl / bla",
    "description": "Branch"
  },
  "bc": {
    "mnemonics": "bc /bca / bcl bcla",
    "description": "Branch Conditional"
  },
  "bcctr": {
    "mnemonics": "bcctr / bcctrl",
    "description": "Branch Conditional to Count Register"
  },
  "bclr": {
    "mnemonics": "bclr / bclrl",
    "description": "Branch Conditional to Link Register"
  },
  "cmp": {
    "mnemonics": "cmp / cmpw",
    "description": "Compare"
  },
  "cmpi": {
    "mnemonics": "cmpi / cmpwi",
    "description": "Compare Immediate"
  },
  "cmpl": {
    "mnemonics": "cmpl / cmplw",
    "description": "Compare Logical"
  },
  "cmpli": {
    "mnemonics": "cmpli / cmplwi",
    "description": "Compare Logical Immediate"
  },
  "cntlzw": {
    "mnemonics": "cntlzw / cntlzw.",
    "description": "Count Leading Zeros Word"
  },
  "crand": {
    "mnemonics": "crand",
    "description": "Condition Register AND"
  },
  "crandc": {
    "mnemonics": "crandc",
    "description": "Condition Register AND with Complement"
  },
  "creqv": {
    "mnemonics": "creqv / crset",
    "description": "Condition Register Equivalent"
  },
  "crnand": {
    "mnemonics": "crnand",
    "description": "Condition Register NAND"
  },
  "crnor": {
    "mnemonics": "crnor / crnot",
    "description": "Condition Register NOR"
  },
  "cror": {
    "mnemonics": "cror  / crmove",
    "description": "Condition Register OR"
  },
  "crorc": {
    "mnemonics": "crorc",
    "description": "Condition Register OR with Complement"
  },
  "crxor": {
    "mnemonics": "crxor / crclr",
    "description": "Condition Register XOR"
  },
  "divw": {
    "mnemonics": "divw / divw. / divwo / divwo.",
    "description": "Divide Word"
  },
  "divwu": {
    "mnemonics": "divwu / divwu. / divwuo / divwuo.",
    "description": "Divide Word Unsigned"
  },
  "eqv": {
    "mnemonics": "eqv / eqv.",
    "description": "Equivalent"
  },
  "extsb": {
    "mnemonics": "extsb / extsb.",
    "description": "Extend Sign Byte"
  },
  "extsh": {
    "mnemonics": "extsh / extsh.",
    "description": "Extend Sign Half Word"
  },
  "lbz": {
    "mnemonics": "lbz",
    "description": "Load Byte and Zero"
  },
  "lbzu": {
    "mnemonics": "lbzu",
    "description": "Load Byte and Zero with Update"
  },
  "lbzux": {
    "mnemonics": "lbzux",
    "description": "Load Byte and Zero with Update Indexed"
  },
  "lbzx": {
    "mnemonics": "lbzx",
    "description": "Load Byte and Zero Indexed"
  },
  "lha": {
    "mnemonics": "lha",
    "description": "Load Half Word Algebraic"
  },
  "lhau": {
    "mnemonics": "lhau",
    "description": "Load Half Word Algebraic with Update"
  },
  "lhaux": {
    "mnemonics": "lhaux",
    "description": "Load Half Word Algebraic with Update Indexed"
  },
  "lhax": {
    "mnemonics": "lhax",
    "description": "Load Half Word Algebraic Indexed"
  },
  "lhbrx": {
    "mnemonics": "lhbrx",
    "description": "Load Half Word Byte-Reverse Indexed"
  },
  "lhz": {
    "mnemonics": "lhz",
    "description": "Load Half Word and Zero"
  },
  "lhzu": {
    "mnemonics": "lhzu",
    "description": "Load Half Word and Zero with Update"
  },
  "lhzux": {
    "mnemonics": "lhzux",
    "description": "Load Half Word and Zero with Update Indexed"
  },
  "lhzx": {
    "mnemonics": "lhzx",
    "description": "Load Half Word and Zero Indexed"
  },
  "lmw": {
    "mnemonics": "lmw",
    "description": "Load Multiple Word"
  },
  "lswi": {
    "mnemonics": "lswi",
    "description": "Load String Word Immediate"
  },
  "lswx": {
    "mnemonics": "lswx",
    "description": "Load String Word Indexed"
  },
  "lwbrx": {
    "mnemonics": "lwbrx",
    "description": "Load Word Byte-Reversed Indexed"
  },
  "lwz": {
    "mnemonics": "lwz",
    "description": "Load Word and Zero"
  },
  "lwzu": {
    "mnemonics": "lwzu",
    "description": "Load Word and Zero with Update"
  },
  "lwzux": {
    "mnemonics": "lwzux",
    "description": "Load Word and Zero with Update Indexed"
  },
  "lwzx": {
    "mnemonics": "lwzx",
    "description": "Load Word and Zero Indexed"
  },
  "mcrf": {
    "mnemonics": "mcrf",
    "description": "Move Condition Regisiter Field"
  },
  "mcrxr": {
    "mnemonics": "mcrxr",
    "description": "Move to Condition Register from XER"
  },
  "mfcr": {
    "mnemonics": "mfcr",
    "description": "Move from Condition Register"
  },
  "mfspr": {
    "mnemonics": "mfspr / mfxer / mflr / mfctr",
    "description": "Move from Special-Purpose Register"
  },
  "mftb": {
    "mnemonics": "mftb",
    "description": "Move from Time Base"
  },
  "mtcrf": {
    "mnemonics": "mtcrf",
    "description": "Move to Condition Register Fields"
  },
  "mtspr": {
    "mnemonics": "mtspr / mtxer / mtlr / mtctr",
    "description": "Move to Special-Purpose Register"
  },
  "mulhw": {
    "mnemonics": "mulhw / mulhw.",
    "description": "Multiply High Word"
  },
  "mulhwu": {
    "mnemonics": "mulhwu / mulhwu.",
    "description": "Multiply High Word Unsigned"
  },
  "mulli": {
    "mnemonics": "mulli",
    "description": "Multiply Low Immediate"
  },
  "mullw": {
    "mnemonics": "mullw / mullw. / mullwo / mullwo.",
    "description": "Multiply Low Word"
  },
  "nand": {
    "mnemonics": "nand / nand.",
    "description": "NAND"
  },
  "neg": {
    "mnemonics": "neg / neg. / nego / nego.",
    "description": "Negate"
  },
  "nor": {
    "mnemonics": "nor /nor.",
    "description": "NOR"
  },
  "or": {
    "mnemonics": "or / or.",
    "description": "OR"
  },
  "orc": {
    "mnemonics": "orc / orc.",
    "description": "OR with Complement"
  },
  "ori": {
    "mnemonics": "ori",
    "description": "OR Immediate"
  },
  "oris": {
    "mnemonics": "oris",
    "description": "OR Immediate Shifted"
  },
  "rlwimi": {
    "mnemonics": "rlwimi / rlwimi. / inslwi / insrwi",
    "description": "Rotate Left Word Immediate then Mask Insert"
  },
  "rlwinm": {
    "mnemonics": "rlwinm / rlwinm. / extlwi / extrwi<br>",
    "description": ""
  },
  "rotlwi / rotrwi / slwi / srwi<br>": {
    "mnemonics": "",
    "description": ""
  },
  "clrlwi / clrrwi / clrlslwi": {
    "mnemonics": "Rotate Left Word Immediate then AND with Mask",
    "description": ""
  },
  "rlwnm": {
    "mnemonics": "rlwnm / rlwnm. / rotlw",
    "description": "Rotate Left Word then AND with Mask"
  },
  "slw": {
    "mnemonics": "slw / slw.",
    "description": "Shift Left Word"
  },
  "sraw": {
    "mnemonics": "sraw /sraw.",
    "description": "Shift Right Algebraic Word"
  },
  "srawi": {
    "mnemonics": "srawi / srawi.",
    "description": "Shift Right Algebraic Word Immediate"
  },
  "srw": {
    "mnemonics": "srw / srw.",
    "description": "Shift Right Word"
  },
  "stb": {
    "mnemonics": "stb",
    "description": "Store Byte"
  },
  "stbu": {
    "mnemonics": "stbu",
    "description": "Store Byte with Update"
  },
  "stbux": {
    "mnemonics": "stbux",
    "description": "Store Byte with Update Indexed"
  },
  "stbx": {
    "mnemonics": "stbx",
    "description": "Store Byte Indexed"
  },
  "sth": {
    "mnemonics": "sth",
    "description": "Store Half Word"
  },
  "sthbrx": {
    "mnemonics": "sthbrx",
    "description": "Store Half Word Byte-Reverse Indexed"
  },
  "sthu": {
    "mnemonics": "sthu",
    "description": "Store Half Word with Update"
  },
  "sthux": {
    "mnemonics": "sthux",
    "description": "Store Half Word with Update Indexed"
  },
  "sthx": {
    "mnemonics": "sthx",
    "description": "Store Half Word Indexed"
  },
  "stmw": {
    "mnemonics": "stmw",
    "description": "Store Multiple Word"
  },
  "stswi": {
    "mnemonics": "stswi",
    "description": "Store String Word Immediate"
  },
  "stswx": {
    "mnemonics": "stswx",
    "description": "Store String Word Indexed"
  },
  "stw": {
    "mnemonics": "stw",
    "description": "Store Word"
  },
  "stwbrx": {
    "mnemonics": "stwbrx",
    "description": "Store Word Byte-Reverse Indexed"
  },
  "stwu": {
    "mnemonics": "stwu",
    "description": "Store Word with Update"
  },
  "stwux": {
    "mnemonics": "stwux",
    "description": "Store Word with Update Indexed"
  },
  "stwx": {
    "mnemonics": "stwx",
    "description": "Store Word Indexed"
  },
  "subf": {
    "mnemonics": "subf / subf. / subfo / subfo. / sub",
    "description": "Subtract From"
  },
  "subfc": {
    "mnemonics": "subfc / subfc. / subfco / subfco. / subc",
    "description": "Subtract from Carrying"
  },
  "subfe": {
    "mnemonics": "subfe / subfe. / subfeo. / subfeo.",
    "description": "Subtrect from Extended"
  },
  "subfic": {
    "mnemonics": "subfic",
    "description": "Subtract from Immediate Carrying"
  },
  "subfme": {
    "mnemonics": "subfme / subfme. / subfmeo / subfmeo.",
    "description": "Subtract from Minus One Extended"
  },
  "subfze": {
    "mnemonics": "subfze / subfze. / subfzeo / subfzeo.",
    "description": "Subtract from Zero Extended"
  },
  "xor": {
    "mnemonics": "xor / xor.",
    "description": "XOR"
  },
  "xori": {
    "mnemonics": "xori",
    "description": "XOR Immediate"
  },
  "xoris": {
    "mnemonics": "xoris",
    "description": "XOR Immediate Shifted"
  },
  "bl": {
    "mnemonics": "bl label",
    "description": "Branch and link to label (call function, return with **blr**"
  }
}

export const getCommand = (value: string) =>{
  return Commands[value] || UnknownCommand
}

export const setHover = (value: string, formattedText: any) => {
  console.log(value)
  let item =  getCommand(value);
  if(item !== UnknownCommand){
    formattedText.appendMarkdown(`**Global Command**  \n`)
    formattedText.appendMarkdown(`* **Mnemonics:** ${item.mnemonics}  \n`)
    formattedText.appendMarkdown(`* **Description:** ${item.description}  \n`);
  }
}