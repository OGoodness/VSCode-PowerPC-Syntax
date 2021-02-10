export interface Command {
  mnemonics: string;
  description: string;
}

export const UnknownCommand: Command = {
  mnemonics: "Unknown Command",
  description: "Unknown"
};

export const Commands: { [command: string]: Command } = {
	"a": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"abs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"abso": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"add": {
		"mnemonics": "add / add. / addo / addo.",
		"description": "Add"
	},
	"addc": {
		"mnemonics": "addc / addc. / addco /addco.",
		"description": "Add Carrying"
	},
	"addco": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"adde": {
		"mnemonics": "adde / adde. / addeo /addeo.",
		"description": "Add Extended"
	},
	"addeo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"addex": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"addg6s": {
		"mnemonics": "????",
		"description": "Unknown???"
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
	"addmeo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"addo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"addpcis": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"addze": {
		"mnemonics": "addze / addze. / addzeo / addzeo.",
		"description": "Add to Zero Extended"
	},
	"addzeo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ae": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"aeo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ai": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ame": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ameo": {
		"mnemonics": "????",
		"description": "Unknown???"
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
	"ao": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"attntdlgti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"aze": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"azeo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"b": {
		"mnemonics": "b / ba / bl / bla",
		"description": "Branch"
	},
	"ba": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbelr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbfa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbfl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbfla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbfr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbfrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bblels": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbta": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbtl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbtla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbtr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bbtrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bc": {
		"mnemonics": "bc /bca / bcl bcla",
		"description": "Branch Conditional"
	},
	"bca": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bcc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bccl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bcctr": {
		"mnemonics": "bcctr / bcctrl",
		"description": "Branch Conditional to Count Register"
	},
	"bcctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bcl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bcla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bclr": {
		"mnemonics": "bclr / bclrl",
		"description": "Branch Conditional to Link Register"
	},
	"bclrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bcr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bcrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bctar": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bctarl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdn": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdna": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnza": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnzf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnzfa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnzfl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnzfla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnzflr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnzflrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnzl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnzla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnzlr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnzlrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnzt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnzta": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnztl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnztla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnztlr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdnztlrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdza": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdzf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdzfa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdzfl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdzfla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdzflr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdzflrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdzl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdzla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdzlr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdzlrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdzt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdzta": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdztl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdztla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdztlr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bdztlrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"beq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"beqa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"beqctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"beqctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"beql": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"beqla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"beqlr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"beqlrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"beqr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"beqrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bfa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bfctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bfctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bfl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bfla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bflr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bflrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bge": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgea": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgectr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgectrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgel": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgela": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgelr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgelrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bger": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgerl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgta": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgtctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgtctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgtl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgtla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgtlr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgtlrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgtr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bgtrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bl": {
		"mnemonics": "bl label",
		"description": "Branch and link to label (call function, return with **blr**"
	},
	"bla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ble": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"blea": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"blectr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"blectrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"blel": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"blela": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"blelr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"blelrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bler": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"blerl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"blr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"blrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"blt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"blta": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bltctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bltctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bltl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bltla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bltlr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bltlrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bltr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bltrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bne": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnea": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnectr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnectrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnel": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnela": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnelr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnelrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bner": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnerl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bng": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnga": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bngctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bngctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bngl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bngla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnglr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnglrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bngr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bngrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnlctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnlctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnll": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnlla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnllr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnllrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnlr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnlrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bns": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnsa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnsctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnsctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnsl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnsla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnslr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnslrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnsrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnua": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnuctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnuctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnul": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnula": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnulr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bnulrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bpermd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"br": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"brinc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"brl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bso": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bsoa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bsoctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bsoctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bsol": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bsola": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bsolr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bsolrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bsor": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bsorl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bta": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"btctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"btctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"btl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"btla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"btlr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"btlrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bun": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"buna": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bunctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bunctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bunl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bunla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bunlr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"bunlrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cal": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cau": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cax": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"caxo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cbcdtd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cctph": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cctpl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cctpm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cdtbcd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cget": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"clcs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"clf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cli": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"clrbhrb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"clrldi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"clrlwi / clrrwi / clrlslwi": {
		"mnemonics": "Rotate Left Word Immediate then AND with Mask",
		"description": ""
	},
	"clrlwi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cmp": {
		"mnemonics": "cmp / cmpw",
		"description": "Compare"
	},
	"cmpb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cmpd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cmpdi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cmpeqb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cmpi": {
		"mnemonics": "cmpi / cmpwi",
		"description": "Compare Immediate"
	},
	"cmpl": {
		"mnemonics": "cmpl / cmplw",
		"description": "Compare Logical"
	},
	"cmpld": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cmpldi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cmpli": {
		"mnemonics": "cmpli / cmplwi",
		"description": "Compare Logical Immediate"
	},
	"cmplw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cmplwi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cmprb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cmpw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cmpwi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cntlz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cntlzd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cntlzw": {
		"mnemonics": "cntlzw / cntlzw.",
		"description": "Count Leading Zeros Word"
	},
	"cnttzd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cnttzw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"copy": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"copy_first": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cp_abort": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cput": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"crand": {
		"mnemonics": "crand",
		"description": "Condition Register AND"
	},
	"crandc": {
		"mnemonics": "crandc",
		"description": "Condition Register AND with Complement"
	},
	"crclr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"creqv": {
		"mnemonics": "creqv / crset",
		"description": "Condition Register Equivalent"
	},
	"crmove": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"crnand": {
		"mnemonics": "crnand",
		"description": "Condition Register NAND"
	},
	"crnor": {
		"mnemonics": "crnor / crnot",
		"description": "Condition Register NOR"
	},
	"crnot": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"cror": {
		"mnemonics": "cror  / crmove",
		"description": "Condition Register OR"
	},
	"crorc": {
		"mnemonics": "crorc",
		"description": "Condition Register OR with Complement"
	},
	"crset": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"crxor": {
		"mnemonics": "crxor / crclr",
		"description": "Condition Register XOR"
	},
	"dadd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"daddq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"darn": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"db10cyc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"db12cyc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"db16cyc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"db8cyc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcba": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbal": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbfep": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbfl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcblc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcblce": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbst": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbstep": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbtep": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbtls": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbtlse": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbtst": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbtstep": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbtstls": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbtstlse": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbtstt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbtt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbz_l": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbzep": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcbzl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dccci": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcffix": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcffixq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dci": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dclst": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dclz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcmpo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcmpoq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcmpu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcmpuq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcread": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dcs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dctdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dctfix": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dctfixq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dctqpq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ddedpd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ddedpdq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ddiv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ddivq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"denbcd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"denbcdq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"diex": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"diexq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"div": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divde": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divdeo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divdeu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divdeuo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divdo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divdu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divduo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divso": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divw": {
		"mnemonics": "divw / divw. / divwo / divwo.",
		"description": "Divide Word"
	},
	"divwe": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divweo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divweu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divweuo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divwo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"divwu": {
		"mnemonics": "divwu / divwu. / divwuo / divwuo.",
		"description": "Divide Word Unsigned"
	},
	"divwuo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dlmzb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dmul": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dmulq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dnh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dni": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"doz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"doze": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dozi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dozo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dqua": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dquai": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dquaiq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dquaq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"drdpq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"drintn": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"drintnq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"drintx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"drintxq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"drrnd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"drrndq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"drsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dscli": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dscliq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dscri": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dscriq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dsn": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dss": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dssall": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dst": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dstst": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dststt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dstt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dsub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dsubq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dtstdc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dtstdcq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dtstdg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dtstdgq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dtstex": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dtstexq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dtstsf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dtstsfi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dtstsfiq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dtstsfq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dxex": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"dxexq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"eciwx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ecowx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdabs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdadd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdcfs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdcfsf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdcfsi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdcfsid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdcfuf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdcfui": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdcfuid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdcmpeq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdcmpgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdcmplt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdctsf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdctsi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdctsidz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdctsiz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdctuf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdctui": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdctuidz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdctuiz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efddiv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdmul": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdnabs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdneg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdsub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdtsteq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdtstgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efdtstlt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efsabs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efsadd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efscfd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efscfsf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efscfsi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efscfuf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efscfui": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efscmpeq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efscmpgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efscmplt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efsctsf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efsctsi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efsctsiz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efsctuf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efsctui": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efsctuiz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efsdiv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efsmul": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efsnabs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efsneg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efssub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efststeq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efststgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"efststlt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ehpriv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"eieio": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"eqv": {
		"mnemonics": "eqv / eqv.",
		"description": "Equivalent"
	},
	"eratilx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"erativax": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"eratre": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"eratsx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"eratwe": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evabs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evaddiw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evaddsmiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evaddssiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evaddumiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evaddusiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evaddw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evand": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evandc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evcmpeq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evcmpgts": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evcmpgtu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evcmplts": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evcmpltu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evcntlsw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evcntlzw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evdivws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evdivwu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"eveqv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evextsb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evextsh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfsabs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfsadd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfscfsf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfscfsi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfscfuf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfscfui": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfscmpeq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfscmpgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfscmplt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfsctsf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfsctsi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfsctsiz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfsctuf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfsctui": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfsctuiz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfsdiv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfsmul": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfsnabs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfsneg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfssub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfststeq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfststgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evfststlt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evldd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlddx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evldh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evldhx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evldw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evldwx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlhhesplat": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlhhesplatx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlhhossplat": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlhhossplatx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlhhousplat": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlhhousplatx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlwhe": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlwhex": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlwhos": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlwhosx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlwhou": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlwhoux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlwhsplat": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlwhsplatx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlwwsplat": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evlwwsplatx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmergehi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmergehilo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmergelo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmergelohi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhegsmfaa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhegsmfan": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhegsmiaa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhegsmian": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhegumiaa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhegumian": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhesmf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhesmfa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhesmfaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhesmfanw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhesmi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhesmia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhesmiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhesmianw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhessf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhessfa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhessfaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhessfanw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhessiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhessianw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmheumi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmheumia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmheumiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmheumianw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmheusiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmheusianw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhogsmfaa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhogsmfan": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhogsmiaa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhogsmian": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhogumiaa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhogumian": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhosmf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhosmfa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhosmfaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhosmfanw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhosmi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhosmia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhosmiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhosmianw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhossf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhossfa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhossfaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhossfanw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhossiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhossianw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhoumi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhoumia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhoumiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhoumianw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhousiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmhousianw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmra": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwhsmf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwhsmfa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwhsmi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwhsmia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwhssf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwhssfa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwhumi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwhumia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwlsmiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwlsmianw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwlssiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwlssianw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwlumi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwlumia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwlumiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwlumianw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwlusiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwlusianw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwsmf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwsmfa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwsmfaa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwsmfan": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwsmi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwsmia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwsmiaa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwsmian": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwssf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwssfa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwssfaa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwssfan": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwumi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwumia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwumiaa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evmwumian": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evnand": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evneg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evnor": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evnot": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evor": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evorc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evrlw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evrlwi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evrndw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsel": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evslw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evslwi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsplatfi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsplati": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsrwis": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsrwiu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsrws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsrwu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstdd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstddx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstdh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstdhx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstdw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstdwx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstwhe": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstwhex": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstwho": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstwhox": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstwwe": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstwwex": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstwwo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evstwwox": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsubfsmiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsubfssiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsubfumiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsubfusiaaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsubfw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsubifw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsubiw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evsubw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"evxor": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"exts": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"extsb": {
		"mnemonics": "extsb / extsb.",
		"description": "Extend Sign Byte"
	},
	"extsh": {
		"mnemonics": "extsh / extsh.",
		"description": "Extend Sign Half Word"
	},
	"extsw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"extswsli": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fabs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fadd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fadds": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fcfid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fcfids": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fcfidu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fcfidus": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fcir": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fcirz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fcmpo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fcmpu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fcpsgn": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fctid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fctidu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fctiduz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fctidz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fctiw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fctiwu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fctiwuz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fctiwz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fdiv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fdivs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fma": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fmadd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fmadds": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fmr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fmrgew": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fmrgow": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fms": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fmsub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fmsubs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fmul": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fmuls": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fnabs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fneg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fnma": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fnmadd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fnmadds": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fnms": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fnmsub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fnmsubs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fre": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fres": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"frim": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"frin": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"frip": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"friz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"frsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"frsqrte": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"frsqrtes": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fsel": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fsqrt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fsqrts": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fsub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"fsubs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ftdiv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ftsqrt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"get": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"hrfid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"hwsync": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"icbi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"icbiep": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"icblc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"icblce": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"icbt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"icbtls": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"icbtlse": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"iccci": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ici": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"icread": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ics": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"icswepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"icswx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"isel": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"iseleq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"iselgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"isellt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"isync": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"l": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"la": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lbarx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lbdx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lbepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lbfcmux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lbfcmx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lbrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lbz": {
		"mnemonics": "lbz",
		"description": "Load Byte and Zero"
	},
	"lbzcix": {
		"mnemonics": "????",
		"description": "Unknown???"
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
	"ld": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ldarx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ldat": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ldbrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ldcix": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lddx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ldepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ldfcmux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ldfcmx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ldmx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ldu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ldux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ldx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfddx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfdepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfdpx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfdu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfdux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfdx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfiwax": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfiwzx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfqu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfqux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfqx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfsu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfsux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lfsx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lha": {
		"mnemonics": "lha",
		"description": "Load Half Word Algebraic"
	},
	"lharx": {
		"mnemonics": "????",
		"description": "Unknown???"
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
	"lhdx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lhepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lhfcmux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lhfcmx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lhz": {
		"mnemonics": "lhz",
		"description": "Load Half Word and Zero"
	},
	"lhzcix": {
		"mnemonics": "????",
		"description": "Unknown???"
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
	"li": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lil": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lis": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"liu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lmw": {
		"mnemonics": "lmw",
		"description": "Load Multiple Word"
	},
	"lq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lqarx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lqfcmux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lqfcmx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lscbx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lsi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lswi": {
		"mnemonics": "lswi",
		"description": "Load String Word Immediate"
	},
	"lswx": {
		"mnemonics": "lswx",
		"description": "Load String Word Indexed"
	},
	"lsx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvebx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvehx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvepxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvewx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvexbx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvexhx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvexwx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvlx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvlxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvrxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvsl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvsm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvswx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvswxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvtlx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvtlxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvtrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvtrxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lvxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lwa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lwarx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lwat": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lwaux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lwax": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lwbrx": {
		"mnemonics": "lwbrx",
		"description": "Load Word Byte-Reversed Indexed"
	},
	"lwdx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lwepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lwfcmux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lwfcmx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lwsync": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lwz": {
		"mnemonics": "lwz",
		"description": "Load Word and Zero"
	},
	"lwzcix": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lwzmx": {
		"mnemonics": "????",
		"description": "Unknown???"
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
	"lx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxsd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxsdx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxsibzx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxsihzx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxsiwax": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxsiwzx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxssp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxsspx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxvb16x": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxvd2x": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxvdsx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxvh8x": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxvl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxvll": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxvw4x": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxvwsx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"lxvx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"macchw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"macchwo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"macchws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"macchwso": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"macchwsu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"macchwsuo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"macchwu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"macchwuo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"machhw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"machhwo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"machhws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"machhwso": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"machhwsu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"machhwsuo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"machhwu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"machhwuo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maclhw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maclhwo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maclhws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maclhwso": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maclhwsu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maclhwsuo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maclhwu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maclhwuo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maddhd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maddhdu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maddld": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maskg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"maskir": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mbar": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mcrf": {
		"mnemonics": "mcrf",
		"description": "Move Condition Regisiter Field"
	},
	"mcrfs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mcrxr": {
		"mnemonics": "mcrxr",
		"description": "Move to Condition Register from XER"
	},
	"mcrxrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mdoio": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mdoom": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mdors": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfapidi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfasr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbar": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbbear": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbbtar": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbear": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbesr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbhrbe": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbr2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbr3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbr4": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbr5": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbr6": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfbr7": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfccr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfccr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcdbcr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcfar": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfclcsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcmpa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcmpb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcmpc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcmpd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcmpe": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcmpf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcmpg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcmph": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcounta": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcountb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcr": {
		"mnemonics": "mfcr",
		"description": "Move from Condition Register"
	},
	"mfcsrr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfcsrr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdac1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdac2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdar": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdbatl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdbatu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdbcr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdbcr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdbcr2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdbdr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdbsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdc_adr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdc_cst": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdc_dat": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdccr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdcdbtrh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdcdbtrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdcr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdcrux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdcrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdcwr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdear": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdec": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfder": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmacc0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmacc1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmacc2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmacc3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmacr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmacr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmacr2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmacr3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmact0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmact1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmact2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmact3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmada0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmada1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmada2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmada3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmasa0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmasa1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmasa2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmasa3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdmasr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdpdr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdpir": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdscr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdsisr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdvc1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdvc2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdvlim": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfdvndx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfear": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfesr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfevpr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfexier": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfexisr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mffgpr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mffprd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mffprwz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mffs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfiac1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfiac2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfiac3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfiac4": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfibatl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfibatu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfic_adr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfic_cst": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfic_dat": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mficcr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mficdbdr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mficdbtr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mficr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfictc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfictrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfimmr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfiocr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivlim": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivndx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor10": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor11": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor12": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor13": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor14": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor15": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor32": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor33": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor34": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor35": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor4": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor5": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor6": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor7": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor8": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivor9": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfivpr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfl2cr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mflctrl1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mflctrl2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mflr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfm_casid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfm_tw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmcar": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmcsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmcsrr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmcsrr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmd_ap": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmd_ctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmd_dbcam": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmd_dbram0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmd_dbram1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmd_epn": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmd_rpn": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmd_twb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmd_twc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmi_ap": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmi_ctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmi_dbcam": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmi_dbram0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmi_dbram1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmi_epn": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmi_rpn": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmi_twc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmmcr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmmcr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmmucr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfmsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfocrf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpbl1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpbl2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpbu1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpbu2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpir": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpit": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpmc1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpmc2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpmc3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpmc4": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpmr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfppr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfppr32": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfpvr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfrstcfg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfrtcl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfrtcu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsdr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsdr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsgr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsler": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfspefscr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfspr": {
		"mnemonics": "mfspr / mfxer / mflr / mfctr",
		"description": "Move from Special-Purpose Register"
	},
	"mfsprg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsprg0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsprg1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsprg2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsprg3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsprg4": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsprg5": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsprg6": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsprg7": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsri": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsrin": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsrr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsrr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsrr2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsrr3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfsu0r": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mftb": {
		"mnemonics": "mftb",
		"description": "Move from Time Base"
	},
	"mftbhi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mftbl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mftblo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mftbu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mftcr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mftgpr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfthrm1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfthrm2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfthrm3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mftid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mftmr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mftsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfummcr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfummcr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfupmc1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfupmc2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfupmc3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfupmc4": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfusia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfusprg0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfvrd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfvrsave": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfvrwz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfvscr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfvsrd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfvsrld": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfvsrwz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfxer": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mfzpr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"miso": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"modsd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"modsw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"modud": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"moduw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"msgclr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"msgclrp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"msgsnd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"msgsndp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"msgsync": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"msync": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtasr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbar": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbbear": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbbtar": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbear": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbesr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbr2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbr3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbr4": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbr5": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbr6": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtbr7": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtccr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtccr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcdbcr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcfar": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtclcsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcmpa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcmpb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcmpc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcmpd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcmpe": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcmpf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcmpg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcmph": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcounta": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcountb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcrf": {
		"mnemonics": "mtcrf",
		"description": "Move to Condition Register Fields"
	},
	"mtcsrr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtcsrr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtctr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtctrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdac1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdac2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdar": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdbatl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdbatu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdbcr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdbcr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdbcr2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdbdr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdbsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdccr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdcr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdcrux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdcrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdcwr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdear": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdec": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdecar": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtder": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmacc0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmacc1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmacc2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmacc3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmacr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmacr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmacr2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmacr3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmact0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmact1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmact2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmact3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmada0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmada1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmada2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmada3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmasa0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmasa1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmasa2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmasa3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdmasr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdscr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdsisr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdvc1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdvc2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdvlim": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtdvndx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtear": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtesr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtevpr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtexier": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtexisr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtfprd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtfprwa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtfprwz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtfsb0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtfsb1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtfsf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtfsfi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtiac1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtiac2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtiac3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtiac4": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtibatl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtibatu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mticcr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mticdbdr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mticr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtictc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtictrl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtiocr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivlim": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivndx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor10": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor11": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor12": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor13": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor14": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor15": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor32": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor33": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor34": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor35": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor4": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor5": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor6": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor7": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor8": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivor9": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtivpr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtl2cr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtlctrl1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtlctrl2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtlr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtmcsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtmcsrr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtmcsrr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtmmcr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtmmcr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtmq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtmsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtmsrd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtocrf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtpbl1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtpbl2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtpbu1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtpbu2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtpid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtpit": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtpmc1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtpmc2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtpmc3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtpmc4": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtpmr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtppr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtppr32": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtrmmucr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtrtcl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtrtcu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsdr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsdr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsgr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsle": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsler": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtspefscr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtspr": {
		"mnemonics": "mtspr / mtxer / mtlr / mtctr",
		"description": "Move to Special-Purpose Register"
	},
	"mtsprg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsprg0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsprg1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsprg2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsprg3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsprg4": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsprg5": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsprg6": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsprg7": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsrd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsrdin": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsri": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsrin": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsrr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsrr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsrr2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsrr3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtsu0r": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mttbhi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mttbl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mttblo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mttbu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mttcr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtthrm1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtthrm2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtthrm3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mttid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mttmr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mttsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtummcr0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtummcr1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtupmc1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtupmc2": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtupmc3": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtupmc4": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtusia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtusprg0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtvrd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtvrsave": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtvrwa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtvrwz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtvscr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtvsrd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtvsrdd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtvsrwa": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtvsrws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtvsrwz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtxer": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mtzpr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mul": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mulchw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mulchwu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mulhd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mulhdu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mulhhw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mulhhwu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mulhw": {
		"mnemonics": "mulhw / mulhw.",
		"description": "Multiply High Word"
	},
	"mulhwu": {
		"mnemonics": "mulhwu / mulhwu.",
		"description": "Multiply High Word Unsigned"
	},
	"muli": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mulld": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mulldo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mullhw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mullhwu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mulli": {
		"mnemonics": "mulli",
		"description": "Multiply Low Immediate"
	},
	"mullw": {
		"mnemonics": "mullw / mullw. / mullwo / mullwo.",
		"description": "Multiply Low Word"
	},
	"mullwo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mulo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"muls": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mulso": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mvidsplt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"mviwsplt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nabs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nabso": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nand": {
		"mnemonics": "nand / nand.",
		"description": "NAND"
	},
	"nap": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ncget": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ncput": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"neg": {
		"mnemonics": "neg / neg. / nego / nego.",
		"description": "Negate"
	},
	"nego": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nget": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nmacchw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nmacchwo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nmacchws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nmacchwso": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nmachhw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nmachhwo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nmachhws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nmachhwso": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nmaclhw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nmaclhwo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nmaclhws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nmaclhwso": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nop": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nor": {
		"mnemonics": "nor /nor.",
		"description": "NOR"
	},
	"not": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"nput": {
		"mnemonics": "????",
		"description": "Unknown???"
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
	"oril": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"oris": {
		"mnemonics": "oris",
		"description": "OR Immediate Shifted"
	},
	"oriu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"paste": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"paste_last": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"popcntb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"popcntd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"popcntw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"prtyd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"prtyw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_abs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_add": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_cmpo0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_cmpo1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_cmpu0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_cmpu1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_div": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_madd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_madds0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_madds1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_merge00": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_merge01": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_merge10": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_merge11": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_mr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_msub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_mul": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_muls0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_muls1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_nabs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_neg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_nmadd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_nmsub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_res": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_rsqrte": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_sel": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_sub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_sum0": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ps_sum1": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"psq_l": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"psq_lu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"psq_lux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"psq_lx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"psq_st": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"psq_stu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"psq_stux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"psq_stx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ptesync": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"put": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rac": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rfci": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rfdi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rfebb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rfgi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rfi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rfid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rfmci": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rfsvc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rldcl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rldcr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rldic": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rldicl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rldicr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rldimi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rlimi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rlinm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rlmi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rlnm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rlwimi": {
		"mnemonics": "rlwimi / rlwimi. / inslwi / insrwi",
		"description": "Rotate Left Word Immediate then Mask Insert"
	},
	"rlwinm": {
		"mnemonics": "rlwinm / rlwinm. / extlwi / extrwi<br>",
		"description": ""
	},
	"rlwnm": {
		"mnemonics": "rlwnm / rlwnm. / rotlw",
		"description": "Rotate Left Word then AND with Mask"
	},
	"rmieg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rotld": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rotldi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rotlw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rotlwi / rotrwi / slwi / srwi<br>": {
		"mnemonics": "",
		"description": ""
	},
	"rotlwi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rrib": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"rvwinkle": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"setb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sf": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sfe": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sfeo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sfi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sfme": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sfmeo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sfo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sfze": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sfzeo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"slbia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"slbie": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"slbieg": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"slbmfee": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"slbmfev": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"slbmte": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"slbsync": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sld": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sle": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sleep": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sleq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sliq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"slliq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sllq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"slq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"slw": {
		"mnemonics": "slw / slw.",
		"description": "Shift Left Word"
	},
	"sr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sra": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"srad": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sradi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"srai": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sraiq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sraq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sraw": {
		"mnemonics": "sraw /sraw.",
		"description": "Shift Right Algebraic Word"
	},
	"srawi": {
		"mnemonics": "srawi / srawi.",
		"description": "Shift Right Algebraic Word Immediate"
	},
	"srd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sre": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"srea": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sreq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sriq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"srliq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"srlq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"srq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"srw": {
		"mnemonics": "srw / srw.",
		"description": "Shift Right Word"
	},
	"st": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stb": {
		"mnemonics": "stb",
		"description": "Store Byte"
	},
	"stbcix": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stbdx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stbepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stbfcmux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stbfcmx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stbrx": {
		"mnemonics": "????",
		"description": "Unknown???"
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
	"std": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stdat": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stdbrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stdcix": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stddx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stdepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stdfcmux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stdfcmx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stdu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stdux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stdx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfddx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfdepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfdpx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfdu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfdux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfdx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfiwx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfqu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfqux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfqx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfsu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfsux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stfsx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sth": {
		"mnemonics": "sth",
		"description": "Store Half Word"
	},
	"sthbrx": {
		"mnemonics": "sthbrx",
		"description": "Store Half Word Byte-Reverse Indexed"
	},
	"sthcix": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sthdx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sthepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sthfcmux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sthfcmx": {
		"mnemonics": "????",
		"description": "Unknown???"
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
	"stm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stmw": {
		"mnemonics": "stmw",
		"description": "Store Multiple Word"
	},
	"stop": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stqfcmux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stqfcmx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stsi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stswi": {
		"mnemonics": "stswi",
		"description": "Store String Word Immediate"
	},
	"stswx": {
		"mnemonics": "stswx",
		"description": "Store String Word Indexed"
	},
	"stsx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvebx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvehx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvepxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvewx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvexbx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvexhx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvexwx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvflx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvflxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvfrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvfrxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvlx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvlxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvrxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvswx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvswxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stvxl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stw": {
		"mnemonics": "stw",
		"description": "Store Word"
	},
	"stwat": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stwbrx": {
		"mnemonics": "stwbrx",
		"description": "Store Word Byte-Reverse Indexed"
	},
	"stwcix": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stwdx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stwepx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stwfcmux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stwfcmx": {
		"mnemonics": "????",
		"description": "Unknown???"
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
	"stx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxsd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxsdx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxsibx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxsihx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxsiwx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxssp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxsspx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxvb16x": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxvd2x": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxvh8x": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxvl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxvll": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxvw4x": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"stxvx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"subc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"subco": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"subf": {
		"mnemonics": "subf / subf. / subfo / subfo. / sub",
		"description": "Subtract From"
	},
	"subfc": {
		"mnemonics": "subfc / subfc. / subfco / subfco. / subc",
		"description": "Subtract from Carrying"
	},
	"subfco": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"subfe": {
		"mnemonics": "subfe / subfe. / subfeo. / subfeo.",
		"description": "Subtrect from Extended"
	},
	"subfeo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"subfic": {
		"mnemonics": "subfic",
		"description": "Subtract from Immediate Carrying"
	},
	"subfme": {
		"mnemonics": "subfme / subfme. / subfmeo / subfmeo.",
		"description": "Subtract from Minus One Extended"
	},
	"subfmeo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"subfo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"subfze": {
		"mnemonics": "subfze / subfze. / subfzeo / subfzeo.",
		"description": "Subtract from Zero Extended"
	},
	"subfzeo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"subi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"subic": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"subis": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"subo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"subpcis": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"svc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"svca": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"svcl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"svcla": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"sync": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"t": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tcheck": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"td": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdeq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdeqi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdge": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdgei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdgti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdle": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdlei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdlge": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdlgei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdlgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdlle": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdllei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdllt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdllti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdlng": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdlngi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdlnl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdlnli": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdlt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdlti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdne": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdnei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdng": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdngi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdnl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdnli": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tdui": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"teq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"teqi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tge": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tgei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tgti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"ti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbia": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbie": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbiel": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbilx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbilxlpid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbilxpid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbilxva": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbivax": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbld": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbli": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbre": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbrehi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbrelo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbsx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbsync": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbwe": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbwehi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlbwelo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tle": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlge": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlgei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlgti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlle": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tllei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tllt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tllti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlng": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlngi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlnl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlnli": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tlti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tne": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tnei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tng": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tngi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tnl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tnli": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"trap": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tui": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tweq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"tweqi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twge": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twgei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twgti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twle": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twlei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twlge": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twlgei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twlgt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twlgti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twlle": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twllei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twllt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twllti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twlng": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twlngi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twlnl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twlnli": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twlt": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twlti": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twne": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twnei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twng": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twngi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twnl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twnli": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"twui": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi0fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi10fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi11fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi12fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi13fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi14fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi15fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi1fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi2fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi3fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi4fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi5fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi6fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi7fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi8fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"udi9fcm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"urfid": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vabsdub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vabsduh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vabsduw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vaddcuq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vaddcuw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vaddecuq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vaddeuqm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vaddfp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vaddsbs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vaddshs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vaddsws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vaddubm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vaddubs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vaddudm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vadduhm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vadduhs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vadduqm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vadduwm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vadduws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vand": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vandc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vavgsb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vavgsh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vavgsw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vavgub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vavguh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vavguw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vbpermd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vbpermq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcfpsxws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcfpuxws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcfsx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcfux": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcipher": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcipherlast": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vclzb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vclzd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vclzh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vclzlsbb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vclzw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpbfp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpeqfp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpequb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpequd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpequh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpequw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpgefp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpgtfp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpgtsb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpgtsd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpgtsh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpgtsw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpgtub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpgtud": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpgtuh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpgtuw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpneb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpneh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpnew": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpnezb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpnezh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcmpnezw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcsxwfp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vctsxs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vctuxs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vctzb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vctzd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vctzh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vctzlsbb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vctzw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vcuxwfp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"veqv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vexptefp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextractd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextractub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextractuh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextractuw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextsb2d": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextsb2w": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextsh2d": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextsh2w": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextsw2d": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextublx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextubrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextuhlx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextuhrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextuwlx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vextuwrx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vgbbd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vinsertb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vinsertd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vinserth": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vinsertw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vlogefp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmaddfp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmaxfp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmaxsb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmaxsd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmaxsh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmaxsw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmaxub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmaxud": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmaxuh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmaxuw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmhaddshs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmhraddshs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vminfp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vminsb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vminsd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vminsh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vminsw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vminub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vminud": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vminuh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vminuw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmladduhm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmrgew": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmrghb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmrghh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmrghw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmrglb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmrglh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmrglw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmrgow": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmsummbm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmsumshm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmsumshs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmsumubm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmsumudm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmsumuhm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmsumuhs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmul10cuq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmul10ecuq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmul10euq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmul10uq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmulesb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmulesh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmulesw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmuleub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmuleuh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmuleuw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmulosb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmulosh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmulosw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmuloub": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmulouh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmulouw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vmuluwm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vnand": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vncipher": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vncipherlast": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vnegd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vnegw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vnmsubfp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vnor": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vnot": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vor": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vorc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vperm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpermr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpermxor": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpkpx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpksdss": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpksdus": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpkshss": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpkshus": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpkswss": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpkswus": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpkudum": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpkudus": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpkuhum": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpkuhus": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpkuwum": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpkuwus": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpmsumb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpmsumd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpmsumh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpmsumw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpopcntb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpopcntd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpopcnth": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vpopcntw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vprtybd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vprtybq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vprtybw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrefp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrfim": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrfin": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrfip": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrfiz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrlb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrld": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrldmi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrldnm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrlh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrlw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrlwmi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrlwnm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vrsqrtefp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsbox": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsel": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vshasigmad": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vshasigmaw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vslb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsld": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsldoi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vslh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vslo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vslv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vslw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vspltb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsplth": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vspltisb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vspltish": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vspltisw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vspltw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsrab": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsrad": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsrah": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsraw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsrb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsrd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsrh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsro": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsrv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsrw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubcuq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubcuw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubecuq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubeuqm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubfp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubsbs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubshs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubsws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsububm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsububs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubudm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubuhm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubuhs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubuqm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubuwm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsubuws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsum2sws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsum4sbs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsum4shs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsum4ubs": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vsumsws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vupkhpx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vupkhsb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vupkhsh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vupkhsw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vupklpx": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vupklsb": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vupklsh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vupklsw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"vxor": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"wait": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"waitasec": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"waitimpl": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"waitrsv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"wchkall": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"wclr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"wclrall": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"wclrone": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"wrtee": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"wrteei": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xnop": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xor": {
		"mnemonics": "xor / xor.",
		"description": "XOR"
	},
	"xori": {
		"mnemonics": "xori",
		"description": "XOR Immediate"
	},
	"xoril": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xoris": {
		"mnemonics": "xoris",
		"description": "XOR Immediate Shifted"
	},
	"xoriu": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsabsdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsabsqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsadddp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsaddqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsaddqpo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsaddsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscmpeqdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscmpexpdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscmpexpqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscmpgedp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscmpgtdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscmpodp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscmpoqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscmpudp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscmpuqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscpsgndp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscpsgnqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvdphp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvdpqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvdpsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvdpspn": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvdpsxds": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvdpsxws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvdpuxds": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvdpuxws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvhpdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvqpdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvqpdpo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvqpsdz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvqpswz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvqpudz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvqpuwz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvsdqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvspdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvspdpn": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvsxddp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvsxdsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvudqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvuxddp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xscvuxdsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsdivdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsdivqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsdivqpo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsdivsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsiexpdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsiexpqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmaddadp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmaddasp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmaddmdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmaddmsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmaddqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmaddqpo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmaxcdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmaxdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmaxjdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmincdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmindp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsminjdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmsubadp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmsubasp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmsubmdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmsubmsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmsubqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmsubqpo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmuldp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmulqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmulqpo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsmulsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnabsdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnabsqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnegdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnegqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnmaddadp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnmaddasp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnmaddmdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnmaddmsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnmaddqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnmaddqpo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnmsubadp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnmsubasp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnmsubmdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnmsubmsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnmsubqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsnmsubqpo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsrdpi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsrdpic": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsrdpim": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsrdpip": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsrdpiz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsredp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsresp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsrqpi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsrqpix": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsrqpxp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsrsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsrsqrtedp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsrsqrtesp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xssqrtdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xssqrtqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xssqrtqpo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xssqrtsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xssubdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xssubqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xssubqpo": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xssubsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xstdivdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xstsqrtdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xststdcdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xststdcqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xststdcsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsxexpdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsxexpqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsxsigdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xsxsigqp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvabsdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvabssp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvadddp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvaddsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcmpeqdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcmpeqsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcmpgedp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcmpgesp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcmpgtdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcmpgtsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcpsgndp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcpsgnsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvdpsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvdpsxds": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvdpsxws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvdpuxds": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvdpuxws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvhpsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvspdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvsphp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvspsxds": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvspsxws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvspuxds": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvspuxws": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvsxddp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvsxdsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvsxwdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvsxwsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvuxddp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvuxdsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvuxwdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvcvuxwsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvdivdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvdivsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xviexpdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xviexpsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmaddadp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmaddasp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmaddmdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmaddmsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmaxdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmaxsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmindp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvminsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmovdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmovsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmsubadp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmsubasp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmsubmdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmsubmsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmuldp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvmulsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvnabsdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvnabssp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvnegdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvnegsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvnmaddadp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvnmaddasp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvnmaddmdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvnmaddmsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvnmsubadp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvnmsubasp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvnmsubmdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvnmsubmsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvrdpi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvrdpic": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvrdpim": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvrdpip": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvrdpiz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvredp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvresp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvrspi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvrspic": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvrspim": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvrspip": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvrspiz": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvrsqrtedp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvrsqrtesp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvsqrtdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvsqrtsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvsubdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvsubsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvtdivdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvtdivsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvtsqrtdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvtsqrtsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvtstdcdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvtstdcsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvxexpdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvxexpsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvxsigdp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xvxsigsp": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxbrd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxbrh": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxbrq": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxbrw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxextractuw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxinsertw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxland": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxlandc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxleqv": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxlnand": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxlnor": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxlor": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxlorc": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxlxor": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxmrghd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxmrghw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxmrgld": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxmrglw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxperm": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxpermdi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxpermr": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxsel": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxsldwi": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxspltd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxspltib": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxspltw": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"xxswapd": {
		"mnemonics": "????",
		"description": "Unknown???"
	},
	"yield": {
		"mnemonics": "????",
		"description": "Unknown???"
	}
};

export const getCommand = (value: string) =>{
  return Commands[value] || UnknownCommand
}

export const getAllCommands = () =>{
  return Commands
}

export const setHover = (value: string, formattedText: any) => {
  console.log(value)
  let item =  getCommand(value);
  if(item !== UnknownCommand){
    formattedText.appendMarkdown(`**ASM Command**  \n`)
    formattedText.appendMarkdown(`* **Mnemonics:** ${item.mnemonics}  \n`)
    formattedText.appendMarkdown(`* **Description:** ${item.description}  \n`);
  }
}