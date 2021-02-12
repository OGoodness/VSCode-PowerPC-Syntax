export interface Command {
  mnemonics: string[];
  description: string;
}

export const UnknownCommand: Command = {
  mnemonics: [],
  description: "Unknown"
};

export const Commands: { [command: string]: Command } = {
	"abs":{
	   "mnemonics":[
		  "abs",
		  "abs.",
		  "abso",
		  "abso."
	   ],
	   "description":"Takes the absolute value of the contents of a general-purpose register and places the result in another general-purpose register."
	},
	"add":{
	   "mnemonics":[
		  "add",
		  "add.",
		  "addo",
		  "addo."
	   ],
	   "description":"Adds the contents of two general-purpose registers."
	},
	"addc":{
	   "mnemonics":[
		  "addc",
		  "addc.",
		  "addco",
		  "addco."
	   ],
	   "description":"Adds the contents of two general-purpose registers and places the result in a general-purpose register"
	},
	"adde":{
	   "mnemonics":[
		  "adde",
		  "adde.",
		  "addeo",
		  "addeo."
	   ],
	   "description":"Adds the contents of two general-purpose registers to the value of the Carry bit in the Fixed-Point Exception Register and places the result in a general-purpose register."
	},
	"addi":{
	   "mnemonics":[
		  "addi"
	   ],
	   "description":"Calculates an address from an offset and a base address and places the result in a general-purpose register."
	},
	"addic":{
	   "mnemonics":[
		  "addic"
	   ],
	   "description":"Adds the contents of a general-purpose register and a 16-bit signed integer, places the result in a general-purpose register, and affects the Carry bit of the Fixed-Point Exception Register."
	},
	"addic.":{
	   "mnemonics":[
		  "addic."
	   ],
	   "description":"Performs an addition with carry of the contents of a general-purpose register and an immediate value."
	},
	"addis":{
	   "mnemonics":[
		  "addis",
		  "addis"
	   ],
	   "description":"Calculates an address from a concatenated offset and a base address and loads the result in a general-purpose register."
	},
	"addme":{
	   "mnemonics":[
		  "addme",
		  "addme.",
		  "addmeo",
		  "addmeo"
	   ],
	   "description":"Adds the contents of a general-purpose register, the Carry bit in the Fixed-Point Exception Register, and -1 and places the result in a general-purpose register."
	},
	"addze":{
	   "mnemonics":[
		  "addze",
		  "addze.",
		  "addzeo",
		  "addzeo."
	   ],
	   "description":"Adds the contents of a general-purpose register, zero, and the value of the Carry bit in the FIxed-Point Exception Register and places the result in a general-purpose register."
	},
	"and":{
	   "mnemonics":[
		  "and",
		  "and."
	   ],
	   "description":"Logically ANDs the contents of two general-purpose registers and places the result in a general-purpose register."
	},
	"andc":{
	   "mnemonics":[
		  "andc",
		  "andc."
	   ],
	   "description":"Logically ANDs the contents of a general-purpose register with the complement of the contents of a general-purpose register."
	},
	"andi.":{
	   "mnemonics":[
		  "andi."
	   ],
	   "description":"Logically ANDs the contents of a general-purpose register with an immediate value. "
	},
	"andis.":{
	   "mnemonics":[
		  "andis."
	   ],
	   "description":"Logically ANDs the most significant 16 bits of the contents of a general-purpose register with a 16-bit unsigned integer and stores the result in a general-purpose register."
	},
	"b":{
	   "mnemonics":[
		  "b",
		  "ba",
		  "bl",
		  "bla"
	   ],
	   "description":"Branches to a specified target address."
	},
	"bc":{
	   "mnemonics":[
		  "bc",
		  "bca",
		  "bcl",
		  "bcla"
	   ],
	   "description":"Conditionally branches to a specified target address."
	},
	"bcctr":{
	   "mnemonics":[
		  "bcctr",
		  "bcctrl"
	   ],
	   "description":"Conditionally branches to the address contained within the Count Register."
	},
	"bclr":{
	   "mnemonics":[
		  "bclr",
		  "bclrl"
	   ],
	   "description":"Conditionally branches to an address contained in the Link Register."
	},
	"clcs":{
	   "mnemonics":[
		  "clcs"
	   ],
	   "description":"Places a specified cache line size in a general-purpose register."
	},
	"clf":{
	   "mnemonics":[
		  "clf"
	   ],
	   "description":"Writes a line of modified data from the data cache to main memory, or invalidates cached instructions or unmodified data."
	},
	"cli":{
	   "mnemonics":[
		  "cli"
	   ],
	   "description":"Invalidates a line containing the byte addressed in either the data or instruction cache, causing subsequent references to retrieve the line again from main memory.Note: The cli instruction is supported only in the POWER family architecture."
	},
	"cmp":{
	   "mnemonics":[
		  "cmp"
	   ],
	   "description":"Compares the contents of two general-purpose registers algebraically."
	},
	"cmpi":{
	   "mnemonics":[
		  "cmpi"
	   ],
	   "description":"Compares the contents of a general-purpose register and a given value algebraically."
	},
	"cmpl":{
	   "mnemonics":[
		  "cmpl"
	   ],
	   "description":"Compares the contents of two general-purpose registers logically."
	},
	"cmpli":{
	   "mnemonics":[
		  "cmpli"
	   ],
	   "description":"Compares the contents of a general-purpose register and a given value logically."
	},
	"cntlzd":{
	   "mnemonics":[
		  "cntlzd",
		  "cntlzd."
	   ],
	   "description":"Count the number of consecutive zero bits in the contents of a general  purpose register, beginning with the high-order bit."
	},
	"cntlzw":{
	   "mnemonics":[
		  "cntlzw",
		  "cntlzw."
	   ],
	   "description":"Counts the number of leading zeros of the 32-bit value in a source general-purpose register (GPR) and stores the result in a GPR.  "
	},
	"crand":{
	   "mnemonics":[
		  "crand"
	   ],
	   "description":"Places the result of ANDing two Condition Register bits in a Condition Register bit."
	},
	"crandc":{
	   "mnemonics":[
		  "crandc"
	   ],
	   "description":"Places the result of ANDing one Condition Register bit and the complement of a Condition Register bit in a Condition Register bit."
	},
	"creqv":{
	   "mnemonics":[
		  "creqv"
	   ],
	   "description":"Places the complemented result of XORing two Condition Register bits in a Condition Register bit."
	},
	"crnand":{
	   "mnemonics":[
		  "crnand"
	   ],
	   "description":"Places the complemented result of ANDing two Condition Register bits in a Condition Register bit."
	},
	"crnor":{
	   "mnemonics":[
		  "crnor"
	   ],
	   "description":"Places the complemented result of ORing two Condition Register bits in a Condition Register bit."
	},
	"cror":{
	   "mnemonics":[
		  "cror"
	   ],
	   "description":"Places the result of ORing two Condition Register bits in a Condition Register bit."
	},
	"crorc":{
	   "mnemonics":[
		  "crorc"
	   ],
	   "description":"Places the result of ORing a Condition Register bit and the complement of a Condition Register bit in a Condition Register bit."
	},
	"crxor":{
	   "mnemonics":[
		  "crxor"
	   ],
	   "description":"Places the result of XORing two Condition Register bits in a Condition Register bit."
	},
	"dcbf":{
	   "mnemonics":[
		  "dcbf"
	   ],
	   "description":"Copies modified cache blocks to main storage and invalidates the copy in the data cache."
	},
	"dcbi":{
	   "mnemonics":[
		  "dcbi"
	   ],
	   "description":"Invalidates a block containing the byte addressed in the data cache, causing subsequent references to retrieve the block again from main memory."
	},
	"dcbst":{
	   "mnemonics":[
		  "dcbst"
	   ],
	   "description":"Allows a program to copy the contents of a modified block to main memory."
	},
	"dcbt":{
	   "mnemonics":[
		  "dcbt"
	   ],
	   "description":"Allows a program to request a cache block fetch before it is actually needed by the program."
	},
	"dcbtst":{
	   "mnemonics":[
		  "dcbtst"
	   ],
	   "description":"Allows a program to request a cache block fetch before it is actually needed by the program."
	},
	"dcbz":{
	   "mnemonics":[
		  "dcbz"
	   ],
	   "description":"dcbz"
	},
	"dclst":{
	   "mnemonics":[
		  "dclst"
	   ],
	   "description":"Stores a line of modified data in the data cache into main memory."
	},
	"div":{
	   "mnemonics":[
		  "div",
		  "div.",
		  "divo",
		  "divo."
	   ],
	   "description":"Divides the contents of a general-purpose register concatenated with the MQ Register by the contents of a general-purpose register and stores the result in a general-purpose register."
	},
	"divd":{
	   "mnemonics":[
		  "divd",
		  "divd.",
		  "divdo",
		  "divdo."
	   ],
	   "description":"Divide the contents of a general purpose register by the contents of a general purpose register, storing the result into a general purpose register."
	},
	"divdu":{
	   "mnemonics":[
		  "divdu",
		  "divdu.",
		  "divduo",
		  "divduo."
	   ],
	   "description":"Divide the contents of a general purpose register by the contents of a general purpose register, storing the result into a general purpose register."
	},
	"divs":{
	   "mnemonics":[
		  "divs",
		  "divs.",
		  "divso",
		  "divso."
	   ],
	   "description":"Divides the contents of a general-purpose register by the contents of a general-purpose register and stores the result in a general-purpose register.Note: The divs instruction is supported only in the POWER family architecture."
	},
	"divw":{
	   "mnemonics":[
		  "divw",
		  "divw.",
		  "divwo",
		  "divwo."
	   ],
	   "description":"Divides the contents of a general-purpose register by the contents of another general-purpose register and stores the result in a third general-purpose register."
	},
	"divwu":{
	   "mnemonics":[
		  "divwu",
		  "divwu.",
		  "divwuo",
		  "divwuo."
	   ],
	   "description":"Divides the contents of a general-purpose register by the contents of another general-purpose register and stores the result in a third general-purpose register."
	},
	"doz":{
	   "mnemonics":[
		  "doz",
		  "doz.",
		  "dozo",
		  "dozo."
	   ],
	   "description":"Computes the difference between the contents of two general-purpose registers and stores the result or the value zero in a general-purpose register."
	},
	"dozi":{
	   "mnemonics":[
		  "dozi"
	   ],
	   "description":"Computes the difference between the contents of a general-purpose register and a signed 16-bit integer and stores the result or the value zero in a general-purpose register."
	},
	"eciwx":{
	   "mnemonics":[
		  "eciwx"
	   ],
	   "description":"Translates the effective address (EA) to a real address, sends the real address to a controller, and loads the word returned by the controller into a register."
	},
	"ecowx":{
	   "mnemonics":[
		  "ecowx"
	   ],
	   "description":"Translates the effective address (EA) to a real address and sends the real address and the contents of a register to a controller."
	},
	"eieio":{
	   "mnemonics":[
		  "eieio"
	   ],
	   "description":"Ensures that cache-inhibited storage accesses are performed in main memory in the order specified by the program."
	},
	"extsw":{
	   "mnemonics":[
		  "extsw",
		  "extsw."
	   ],
	   "description":"Copy the low-order 32 bits of a general purpose register into another general purpose register, and sign extend the fullword to a doubleword in size (64 bits)."
	},
	"eqv":{
	   "mnemonics":[
		  "eqv",
		  "eqv."
	   ],
	   "description":"Logically XORs the contents of two general-purpose registers and places the complemented result in a general-purpose register."
	},
	"extsb":{
	   "mnemonics":[
		  "extsb",
		  "extsb."
	   ],
	   "description":"Extends the sign of the low-order byte."
	},
	"extsh":{
	   "mnemonics":[
		  "extsh",
		  "extsh."
	   ],
	   "description":"Extends the lower 16-bit contents of a general-purpose register."
	},
	"fabs":{
	   "mnemonics":[
		  "fabs",
		  "fabs."
	   ],
	   "description":"Stores the absolute value of the contents of a floating-point register in another floating-point register."
	},
	"fadd":{
	   "mnemonics":[
		  "fadd",
		  "fadd."
	   ],
	   "description":"Adds two floating-point operands and places the result in a floating-point register."
	},
	"fcfid":{
	   "mnemonics":[
		  "fcfid",
		  "fcfid."
	   ],
	   "description":"Convert the fixed-point contents of a floating-point register to a double-precision floating-point number."
	},
	"fcmpo":{
	   "mnemonics":[
		  "fcmpo"
	   ],
	   "description":"Compares the contents of two floating-point registers."
	},
	"fcmpu":{
	   "mnemonics":[
		  "fcmpu"
	   ],
	   "description":"Compares the contents of two floating-point registers."
	},
	"fctid":{
	   "mnemonics":[
		  "fctid",
		  "fctid."
	   ],
	   "description":"Convert the contents of a floating-point register to a 64-bit signed fixed-point integer, placing the results into another floating-point register."
	},
	"fctidz":{
	   "mnemonics":[
		  "fctidz",
		  "fctidz."
	   ],
	   "description":"Convert the contents of a floating-point register to a 64-bit signed fixed-point integer using the round-toward-zero rounding mode. Place the results into another floating-point register."
	},
	"fctiw":{
	   "mnemonics":[
		  "fctiw",
		  "fctiw."
	   ],
	   "description":"Converts a floating-point operand to a 32-bit signed integer."
	},
	"fctiwz":{
	   "mnemonics":[
		  "fctiwz",
		  "fctiwz."
	   ],
	   "description":"Converts a floating-point operand to a 32-bit signed integer, rounding the result towards 0."
	},
	"fdiv":{
	   "mnemonics":[
		  "fdiv",
		  "fdiv."
	   ],
	   "description":"Divides one floating-point operand by another."
	},
	"fmadd":{
	   "mnemonics":[
		  "fmadd",
		  "fmadd."
	   ],
	   "description":"Adds one floating-point operand to the result of multiplying two floating-point operands without an intermediate rounding operation."
	},
	"fmr":{
	   "mnemonics":[
		  "fmr",
		  "fmr."
	   ],
	   "description":"Copies the contents of one floating-point register into another floating-point register."
	},
	"fmsub":{
	   "mnemonics":[
		  "fmsub",
		  "fmsub."
	   ],
	   "description":"Subtracts one floating-point operand from the result of multiplying two floating-point operands without an intermediate rounding operation."
	},
	"fmul":{
	   "mnemonics":[
		  "fmul",
		  "fmul."
	   ],
	   "description":"Multiplies two floating-point operands."
	},
	"fnabs":{
	   "mnemonics":[
		  "fnabs",
		  "fnabs."
	   ],
	   "description":"Negates the absolute contents of a floating-point register and places the result in another floating-point register."
	},
	"fneg":{
	   "mnemonics":[
		  "fneg",
		  "fneg."
	   ],
	   "description":"Negates the contents of a floating-point register and places the result into another floating-point register."
	},
	"fnmadd":{
	   "mnemonics":[
		  "fnmadd",
		  "fnmadd."
	   ],
	   "description":"Multiplies two floating-point operands, adds the result to one floating-point operand, and places the negative of the result in a floating-point register."
	},
	"fnmsub":{
	   "mnemonics":[
		  "fnmsub",
		  "fnmsub."
	   ],
	   "description":"Multiplies two floating-point operands, subtracts one floating-point operand from the result, and places the negative of the result in a floating-point register."
	},
	"fres":{
	   "mnemonics":[
		  "fres",
		  "fres."
	   ],
	   "description":"Calculates a single-precision estimate of the reciprocal of a floating-point operand."
	},
	"frsp":{
	   "mnemonics":[
		  "frsp",
		  "frsp."
	   ],
	   "description":"Rounds a 64-bit, double precision floating-point operand to single precision and places the result in a floating-point register."
	},
	"frsqrte":{
	   "mnemonics":[
		  "frsqrte",
		  "frsqrte."
	   ],
	   "description":"Calculates a double-precision estimated value of the reciprocal of the square root of a floating-point operand."
	},
	"fsel":{
	   "mnemonics":[
		  "fsel",
		  "fsel."
	   ],
	   "description":"Puts either of two floating-point operands into the target register based on the results of comparing another floating-point operand with zero."
	},
	"fsqrt":{
	   "mnemonics":[
		  "fsqrt",
		  "fsqrt."
	   ],
	   "description":"Calculate the square root of the contents of a floating- point register, placing the result in a floating-point register."
	},
	"fsqrts":{
	   "mnemonics":[
		  "fsqrts",
		  "fsqrts."
	   ],
	   "description":"Calculate the single-precision square root of the contents of a floating- point register, placing the result in a floating-point register."
	},
	"fsub":{
	   "mnemonics":[
		  "fsub",
		  "fsub."
	   ],
	   "description":"Subtracts one floating-point operand from another and places the result in a floating-point register."
	},
	"icbi":{
	   "mnemonics":[
		  "icbi"
	   ],
	   "description":"Invalidates a block containing the byte addressed in the instruction cache, causing subsequent references to retrieve the block from main memory."
	},
	"isync":{
	   "mnemonics":[
		  "isync"
	   ],
	   "description":"Refetches any instructions that might have been fetched prior to this instruction."
	},
	"lbz":{
	   "mnemonics":[
		  "lbz"
	   ],
	   "description":"Loads a byte of data from a specified location in memory into a general-purpose register and sets the remaining 24 bits to 0."
	},
	"lbzu":{
	   "mnemonics":[
		  "lbzu"
	   ],
	   "description":"Loads a byte of data from a specified location in memory into a general-purpose register, sets the remaining 24 bits to 0, and possibly places the address in a second general-purpose register."
	},
	"lbzux":{
	   "mnemonics":[
		  "lbzux"
	   ],
	   "description":"Loads a byte of data from a specified location in memory into a general-purpose register, setting the remaining 24 bits to 0, and places the address in the a second general-purpose register."
	},
	"lbzx":{
	   "mnemonics":[
		  "lbzx"
	   ],
	   "description":"Loads a byte of data from a specified location in memory into a general-purpose register and sets the remaining 24 bits to 0."
	},
	"ld":{
	   "mnemonics":[
		  "ld"
	   ],
	   "description":"Load a doubleword of data into the specified general purpose register."
	},
	"ldarx":{
	   "mnemonics":[
		  "ldarx"
	   ],
	   "description":"ldarx"
	},
	"ldu":{
	   "mnemonics":[
		  "ldu"
	   ],
	   "description":"Loads a doubleword of data into the specified general purpose register (GPR) , and updates the address base."
	},
	"ldux":{
	   "mnemonics":[
		  "ldux"
	   ],
	   "description":"Loads a doubleword of data from a specified memory location into a general purpose register (GPR), and updates the address base."
	},
	"ldx":{
	   "mnemonics":[
		  "ldx"
	   ],
	   "description":"Loads a doubleword from a specified memory location into a general purpose register (GPR)."
	},
	"lfd":{
	   "mnemonics":[
		  "lfd"
	   ],
	   "description":"Loads a doubleword of data from a specified location in memory into a floating-point register."
	},
	"lfdu":{
	   "mnemonics":[
		  "lfdu"
	   ],
	   "description":"Loads a doubleword of data from a specified location in memory into a floating-point register and possibly places the specified address in a general-purpose register."
	},
	"lfdux":{
	   "mnemonics":[
		  "lfdux"
	   ],
	   "description":"Loads a doubleword of data from a specified location in memory into a floating-point register and possibly places the specified address in a general-purpose register."
	},
	"lfdx":{
	   "mnemonics":[
		  "lfdx"
	   ],
	   "description":"Loads a doubleword of data from a specified location in memory into a floating-point register."
	},
	"lfq":{
	   "mnemonics":[
		  "lfq"
	   ],
	   "description":"Loads two double-precision values into floating-point registers."
	},
	"lfqu":{
	   "mnemonics":[
		  "lfqu"
	   ],
	   "description":"Loads two double-precision values into floating-point registers and updates the address base."
	},
	"lfqux":{
	   "mnemonics":[
		  "lfqux"
	   ],
	   "description":"Loads two double-precision values into floating-point registers and updates the address base."
	},
	"lfqx":{
	   "mnemonics":[
		  "lfqx"
	   ],
	   "description":"Loads two double-precision values into floating-point registers."
	},
	"lfs":{
	   "mnemonics":[
		  "lfs"
	   ],
	   "description":"Loads a floating-point, single-precision number that has been converted to a floating-point, double-precision number into a floating-point register."
	},
	"lfsu":{
	   "mnemonics":[
		  "lfsu"
	   ],
	   "description":"Loads a floating-point, single-precision number that has been converted to a floating-point, double-precision number into a floating-point register and possibly places the effective address in a general-purpose register."
	},
	"lfsux":{
	   "mnemonics":[
		  "lfsux"
	   ],
	   "description":"Loads a floating-point, single-precision number that has been converted to a floating-point, double-precision number into a floating-point register and possibly places the effective address in a general-purpose register."
	},
	"lfsx":{
	   "mnemonics":[
		  "lfsx"
	   ],
	   "description":"Loads a floating-point, single-precision number that has been converted to a floating-point, double-precision number into a floating-point register."
	},
	"lha":{
	   "mnemonics":[
		  "lha"
	   ],
	   "description":"Loads a halfword of data from a specified location in memory into a general-purpose register and copies bit 0 of the halfword into the remaining 16 bits of the general-purpose register."
	},
	"lhau":{
	   "mnemonics":[
		  "lhau"
	   ],
	   "description":"Loads a halfword of data from a specified location in memory into a general-purpose register, copies bit 0 of the halfword into the remaining 16 bits of the general-purpose register, and possibly places the address in another general-purpose register."
	},
	"lhaux":{
	   "mnemonics":[
		  "lhaux"
	   ],
	   "description":"Loads a halfword of data from a specified location in memory into a general-purpose register, copies bit 0 of the halfword into the remaining 16 bits of the general-purpose register, and possibly places the address in another general-purpose register."
	},
	"lhax":{
	   "mnemonics":[
		  "lhax"
	   ],
	   "description":"Loads a halfword of data from a specified location in memory into a general-purpose register and copies bit 0 of the halfword into the remaining 16 bits of the general-purpose register."
	},
	"lhbrx":{
	   "mnemonics":[
		  "lhbrx"
	   ],
	   "description":"Loads a byte-reversed halfword of data from a specified location in memory into a general-purpose register and sets the remaining 16 bits of the general-purpose register to zero."
	},
	"lhz":{
	   "mnemonics":[
		  "lhz"
	   ],
	   "description":"Loads a halfword of data from a specified location in memory into a general-purpose register and sets the remaining 16 bits to 0."
	},
	"lhzu":{
	   "mnemonics":[
		  "lhzu"
	   ],
	   "description":"Loads a halfword of data from a specified location in memory into a general-purpose register, sets the remaining 16 bits of the general-purpose register to 0, and possibly places the address in another general-purpose register."
	},
	"lhzux":{
	   "mnemonics":[
		  "lhzux"
	   ],
	   "description":"Loads a halfword of data from a specified location in memory into a general-purpose register, sets the remaining 16 bits of the general-purpose register to 0, and possibly places the address in another general-purpose register."
	},
	"lhzx":{
	   "mnemonics":[
		  "lhzx"
	   ],
	   "description":"Loads a halfword of data from a specified location in memory into a general-purpose register and sets the remaining 16 bits of the general-purpose register to 0."
	},
	"lmw":{
	   "mnemonics":[
		  "lmw"
	   ],
	   "description":"Loads consecutive words at a specified location into more than one general-purpose register."
	},
	"lq":{
	   "mnemonics":[
		  "lq"
	   ],
	   "description":"Load a quad-word of data into the specified general purpose register."
	},
	"lscbx":{
	   "mnemonics":[
		  "POWER family",
		  "lscbx",
		  "lscbx."
	   ],
	   "description":"Loads consecutive bytes in storage into consecutive registers."
	},
	"lswi":{
	   "mnemonics":[
		  "lswi"
	   ],
	   "description":"Loads consecutive bytes in storage from a specified location in memory into consecutive general-purpose registers."
	},
	"lswx":{
	   "mnemonics":[
		  "lswx"
	   ],
	   "description":"Loads consecutive bytes in storage from a specified location in memory into consecutive general-purpose registers."
	},
	"lwa":{
	   "mnemonics":[
		  "lwa"
	   ],
	   "description":"Load a fullword of data from storage into the low-order 32 bits of the specified general purpose register. Sign extend the data into the high-order 32 bits of the register."
	},
	"lwarx":{
	   "mnemonics":[
		  "lwarx"
	   ],
	   "description":"Used in conjunction with a subsequent stwcx. instruction to emulate a read-modify-write operation on a specified memory location.Note: The lwarx instruction is supported only in the PowerPC architecture."
	},
	"lwaux":{
	   "mnemonics":[
		  "lwaux"
	   ],
	   "description":"Load a fullword of data from storage into the low-order 32b its of the specified general purpose register.  Sign extend the data into the high-order 32 bits of the register.  Update the address base."
	},
	"lwax":{
	   "mnemonics":[
		  "lwax"
	   ],
	   "description":"Load a fullword of data from storage into the low-order 32 bits of the specified general purpose register.  Sign extend the data into the high-order 32 bits of the register."
	},
	"lwbrx":{
	   "mnemonics":[
		  "lwbrx"
	   ],
	   "description":"Loads a byte-reversed word of data from a specified location in memory into a general-purpose register."
	},
	"lwz":{
	   "mnemonics":[
		  "lwz"
	   ],
	   "description":"Loads a word of data from a specified location in memory into a general-purpose register."
	},
	"lwzu":{
	   "mnemonics":[
		  "lwzu"
	   ],
	   "description":"Loads a word of data from a specified location in memory into a general-purpose register and possibly places the effective address in a second general-purpose register."
	},
	"lwzux":{
	   "mnemonics":[
		  "lwzux"
	   ],
	   "description":"Loads a word of data from a specified location in memory into a general-purpose register and possibly places the effective address in a second general-purpose register."
	},
	"lwzx":{
	   "mnemonics":[
		  "lwzx"
	   ],
	   "description":"Loads a word of data from a specified location in memory into a general-purpose register."
	},
	"maskg":{
	   "mnemonics":[
		  "maskg",
		  "maskg."
	   ],
	   "description":"Generates a mask of ones and zeros and loads it into a general-purpose register."
	},
	"maskir":{
	   "mnemonics":[
		  "maskir",
		  "maskir."
	   ],
	   "description":"Inserts the contents of one general-purpose register into another general-purpose register under control of a bit mask."
	},
	"mcrf":{
	   "mnemonics":[
		  "mcrf"
	   ],
	   "description":"Copies the contents of one condition register field into another."
	},
	"mcrfs":{
	   "mnemonics":[
		  "mcrfs"
	   ],
	   "description":"Copies the bits from one field of the Floating-Point Status and Control Register into the Condition Register."
	},
	"mcrxr":{
	   "mnemonics":[
		  "mcrxr"
	   ],
	   "description":"Copies the Summary Overflow bit, Overflow bit, Carry bit, and bit 3 from the Fixed-Point Exception Register into a specified field of the Condition Register."
	},
	"mfcr":{
	   "mnemonics":[
		  "mfcr"
	   ],
	   "description":"Copies the contents of the Condition Register into a general-purpose register."
	},
	"mffs":{
	   "mnemonics":[
		  "Syntax    Form",
		  "mffs",
		  "mffs."
	   ],
	   "description":"Loads the contents of the Floating-Point Status and Control Register into a floating-point register and fills the upper 32 bits with ones."
	},
	"mfmsr":{
	   "mnemonics":[
		  "mfmsr"
	   ],
	   "description":"Copies the contents of the Machine State Register into a general-purpose register."
	},
	"mfocrf":{
	   "mnemonics":[
		  "mfocrf"
	   ],
	   "description":"Copies the contents of one Condition Register field into a general-purpose register. "
	},
	"mfspr":{
	   "mnemonics":[
		  "mfspr"
	   ],
	   "description":"Copies the contents of a special-purpose register into a general-purpose register."
	},
	"mfsr":{
	   "mnemonics":[
		  "mfsr"
	   ],
	   "description":"Copies the contents of a segment register into a general-purpose register."
	},
	"mfsri":{
	   "mnemonics":[
		  "mfsri"
	   ],
	   "description":"Copies the contents of a calculated segment register into a general-purpose register."
	},
	"mfsrin":{
	   "mnemonics":[
		  "mfsrin"
	   ],
	   "description":"Copies the contents of the specified segment register into a general-purpose register."
	},
	"mtcrf":{
	   "mnemonics":[
		  "mtcrf"
	   ],
	   "description":"Copies the contents of a general-purpose register into the condition register under control of a field mask."
	},
	"mtfsb0":{
	   "mnemonics":[
		  "mtfsb0",
		  "mtfsb0."
	   ],
	   "description":"Sets a specified Floating-Point Status and Control Register bit to 0."
	},
	"mtfsb1":{
	   "mnemonics":[
		  "mtfsb1",
		  "mtfsb1."
	   ],
	   "description":"Sets a specified Floating-Point Status and Control Register bit to 1."
	},
	"mtfsf":{
	   "mnemonics":[
		  "mtfsf",
		  "mtfsf."
	   ],
	   "description":"Copies the contents of a floating-point register into the Floating-Point Status and Control Register under the control of a field mask."
	},
	"mtfsfi":{
	   "mnemonics":[
		  "mtfsfi",
		  "mtfsfi."
	   ],
	   "description":"Copies an immediate value into a specified Floating-Point Status and Control Register field."
	},
	"mtocrf":{
	   "mnemonics":[
		  "mtocrf"
	   ],
	   "description":"Copies the contents of a general-purpose register into one condition register field under control of a field mask."
	},
	"mtspr":{
	   "mnemonics":[
		  "mtspr"
	   ],
	   "description":"Copies the contents of a general-purpose register into a special-purpose register."
	},
	"mul":{
	   "mnemonics":[
		  "mul",
		  "mul.",
		  "mulo",
		  "mulo."
	   ],
	   "description":"Multiplies the contents of two general-purpose registers and stores the result in a third general-purpose register."
	},
	"mulhd":{
	   "mnemonics":[
		  "mulhd",
		  "mulhd."
	   ],
	   "description":"Multiply two 64-bit values together.  Place the high-order 64 bits of the result into a register."
	},
	"mulhdu":{
	   "mnemonics":[
		  "mulhdu",
		  "mulhdu."
	   ],
	   "description":"Multiply 2 unsigned 64-bit values together.  Place the high-order 64 bits of the result into a register."
	},
	"mulhw":{
	   "mnemonics":[
		  "mulhw",
		  "mulhw."
	   ],
	   "description":"Computes the most significant 32 bits of the 64-bit product of two 32-bit integers."
	},
	"mulhwu":{
	   "mnemonics":[
		  "mulhwu",
		  "mulhwu."
	   ],
	   "description":"Computes the most significant 32 bits of the 64-bit product of two unsigned 32-bit integers."
	},
	"mulld":{
	   "mnemonics":[
		  "mulld",
		  "mulld.",
		  "mulldo",
		  "mulldo."
	   ],
	   "description":"Multiply 2 64-bit values together.  Place the low-order 64 bits of the result into a register."
	},
	"mulli":{
	   "mnemonics":[
		  "mulli"
	   ],
	   "description":"Multiplies the contents of a general-purpose register by a 16-bit signed integer and stores the result in another general-purpose register."
	},
	"mullw":{
	   "mnemonics":[
		  "mullw",
		  "mullw.",
		  "mullwo",
		  "mullwo."
	   ],
	   "description":"Computes the least significant 32 bits of the 64-bit product of two 32-bit integers."
	},
	"nabs":{
	   "mnemonics":[
		  "nabs",
		  "nabs",
		  "nabso",
		  "nabso."
	   ],
	   "description":"Negates the absolute value of the contents of a general-purpose register and stores the result in another general-purpose register."
	},
	"nand":{
	   "mnemonics":[
		  "nand",
		  "nand."
	   ],
	   "description":"Logically complements the result of ANDing the contents of two general-purpose registers and stores the result in another general-purpose register."
	},
	"neg":{
	   "mnemonics":[
		  "neg",
		  "neg.",
		  "nego",
		  "nego."
	   ],
	   "description":"Changes the arithmetic sign of the contents of a general-purpose register and places the result in another general-purpose register."
	},
	"nor":{
	   "mnemonics":[
		  "nor",
		  "nor."
	   ],
	   "description":"Logically complements the result of ORing the contents of two general-purpose registers and stores the result in another general-purpose register."
	},
	"or":{
	   "mnemonics":[
		  "or",
		  "or."
	   ],
	   "description":"Logically ORs the contents of two general-purpose registers and stores the result in another general-purpose register."
	},
	"orc":{
	   "mnemonics":[
		  "orc",
		  "orc."
	   ],
	   "description":"Logically ORs the contents of a general-purpose register with the complement of the contents of another general-purpose register and stores the result in a third general-purpose register."
	},
	"ori":{
	   "mnemonics":[
		  "ori"
	   ],
	   "description":"Logically ORs the lower 16 bits of the contents of a general-purpose register with a 16-bit unsigned integer and stores the result in another general-purpose register."
	},
	"oris":{
	   "mnemonics":[
		  "oris"
	   ],
	   "description":"Logically ORs the upper 16 bits of the contents of a general-purpose register with a 16-bit unsigned integer and stores the result in another general-purpose register."
	},
	"popcntbd":{
	   "mnemonics":[
		  "popcntbd"
	   ],
	   "description":"Allows a program to count the number of one bits in a doubleword. "
	},
	"rac":{
	   "mnemonics":[
		  "rac",
		  "rac."
	   ],
	   "description":"Translates an effective address into a real address and stores the result in a general-purpose register."
	},
	"rfi":{
	   "mnemonics":[
		  "rfi"
	   ],
	   "description":"Reinitializes the Machine State Register and continues processing after an interrupt."
	},
	"rfid":{
	   "mnemonics":[
		  "rfid"
	   ],
	   "description":"Reinitializes the Machine State Register and continues processing after an interrupt."
	},
	"rfsvc":{
	   "mnemonics":[
		  "rfsvc"
	   ],
	   "description":"svc"
	},
	"rldcl":{
	   "mnemonics":[
		  "rldcl",
		  "rldcl."
	   ],
	   "description":"Rotate the contents of a general purpose register left by the number of bits specified by the contents of another general purpose register.  Generate a mask that is ANDed with the result of the shift operation.  Store the result of this operation in another general purpose register."
	},
	"rldicl":{
	   "mnemonics":[
		  "rldicl",
		  "rldicl."
	   ],
	   "description":"Rotate the contents of a general purpose register left by a specified number of bits, clearing a specified number of high-order bits. The result is placed in another general purpose register."
	},
	"rldcr":{
	   "mnemonics":[
		  "rldcr",
		  "rldcr."
	   ],
	   "description":"Rotate the contents of a general purpose register left by the number of bits specified by the contents of another general purpose register.  Generate a mask that is ANDed with the result of the shift operation.  Store the result of this operation in another general purpose register."
	},
	"rldic":{
	   "mnemonics":[
		  "rldic"
	   ],
	   "description":"The contents of a general purpose register are rotated left a specified number of bits, then masked with a bit-field to clear some number of low-order and high-order bits. The result is placed in another general purpose register."
	},
	"rldicr":{
	   "mnemonics":[
		  "rldicr",
		  "rldicr."
	   ],
	   "description":"Rotate the contents of a general purpose register left by the number of bits specified by an immediate value.  Clear a specified number of low-order bits. Place the results in another general purpose register."
	},
	"rldimi":{
	   "mnemonics":[
		  "rldimi",
		  "rldimi."
	   ],
	   "description":"The contents of a general purpose register are rotated left a specified number of bits. A generated mask is used to insert a specified bit-field into the corresponding bit-field of another general purpose register."
	},
	"rlmi":{
	   "mnemonics":[
		  "rlmi",
		  "rlmi.",
		  "rlmi",
		  "rlmi."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by the number of bits specified in another general-purpose register and stores the result in a third general-purpose register under the control of a generated mask.Note: The rlmi instruction is supported only in the POWER family architecture."
	},
	"rlwimi":{
	   "mnemonics":[
		  "rlwimi",
		  "rlwimi.",
		  "rlwimi",
		  "rlwimi."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by a specified number of bits and stores the result in another general-purpose register under the control of a generated mask."
	},
	"rlwinm":{
	   "mnemonics":[
		  "rlwinm",
		  "rlwinm.",
		  "rlwinm",
		  "rlwinm."
	   ],
	   "description":"Logically ANDs a generated mask with the result of rotating left by a specified number of bits in the contents of a general-purpose register. "
	},
	"rlwnm":{
	   "mnemonics":[
		  "rlwnm",
		  "rlwnm.",
		  "rlwnm",
		  "rlwnm."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by the number of bits specified in another general-purpose register, logically ANDs the rotated data with the generated mask, and stores the result in a third general-purpose register."
	},
	"rrib":{
	   "mnemonics":[
		  "rrib",
		  "rrib."
	   ],
	   "description":"Rotates bit 0 in a general-purpose register to the right by the number of bits specified by another general-purpose register and stores the rotated bit in a third general-purpose register.Note: The rrib instruction is supported only in the POWER family architecture."
	},
	"sc":{
	   "mnemonics":[
		  "sc"
	   ],
	   "description":"Calls the system to provide a service."
	},
	"scv":{
	   "mnemonics":[
		  "scv"
	   ],
	   "description":"Calls the system to provide a service."
	},
	"si":{
	   "mnemonics":[
		  "si"
	   ],
	   "description":"Subtracts the value of a signed integer from the contents of a general-purpose register and places the result in a general-purpose register."
	},
	"si.":{
	   "mnemonics":[
		  "si."
	   ],
	   "description":"Subtracts the value of a signed integer from the contents of a general-purpose register and places the result in a second general-purpose register."
	},
	"sld":{
	   "mnemonics":[
		  "sld",
		  "sld."
	   ],
	   "description":"Shift the contents of a general purpose register left by the number of bits specified by the contents of another general purpose register."
	},
	"sle":{
	   "mnemonics":[
		  "sle",
		  "sle."
	   ],
	   "description":"Shifts the contents of a general-purpose register to the left by a specified number of bits, puts a copy of the rotated data in the MQ Register, and places the result in another general-purpose register."
	},
	"sleq":{
	   "mnemonics":[
		  "sleq",
		  "sleq."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by a specified number of bits, merges the result with the contents of the MQ Register under control of a mask, and places the rotated word in the MQ Register and the masked result in another general-purpose register."
	},
	"sliq":{
	   "mnemonics":[
		  "sliq",
		  "sliq."
	   ],
	   "description":"Shifts the contents of a general-purpose register to the left by a specified number of bits in an immediate value, and places the rotated contents in the MQ Register and the result in another general-purpose register."
	},
	"slliq":{
	   "mnemonics":[
		  "slliq",
		  "slliq."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by a specified number of bits in an immediate value, merges the result with the contents of the MQ Register under control of a mask, and places the rotated word in the MQ Register and the masked result in another general-purpose register."
	},
	"sllq":{
	   "mnemonics":[
		  "sllq",
		  "sllq."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by the number of bits specified in a general-purpose register, merges either the rotated data or a word of zeros with the contents of the MQ Register, and places the result in a third general-purpose register."
	},
	"slq":{
	   "mnemonics":[
		  "slq",
		  "slq."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by the number of bits specified in a general-purpose register, places the rotated word in the MQ Register, and places the logical AND of the rotated word and a generated mask in a third general-purpose register."
	},
	"slw":{
	   "mnemonics":[
		  "slw",
		  "slw."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by a specified number of bits and places the masked result in another general-purpose register."
	},
	"srad":{
	   "mnemonics":[
		  "srad",
		  "srad."
	   ],
	   "description":"Algebraically shift the contents of a general purpose register right by the number of bits specified by the contents of another general purpose register. Place the result of the operation in another general purpose register."
	},
	"sradi":{
	   "mnemonics":[
		  "sradi",
		  "sradi."
	   ],
	   "description":"Algebraically shift the contents of a general purpose register right by the number of bits specified by the immediate value. Place the result of the operation in another general purpose register."
	},
	"sraiq":{
	   "mnemonics":[
		  "sraiq",
		  "sraiq."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by a specified number of bits, merges the rotated data with a word of 32 sign bits from that general-purpose register under control of a generated mask, and places the rotated word in the MQ Register and the merged result in another general-purpose register."
	},
	"sraq":{
	   "mnemonics":[
		  "sraq",
		  "sraq."
	   ],
	   "description":"Rotates a general-purpose register a specified number of bits to the left, merges the result with a word of 32 sign bits from that general-purpose register under control of a generated mask, and places the rotated word in the MQ Register and the merged result in another general-purpose register."
	},
	"sraw":{
	   "mnemonics":[
		  "sraw",
		  "sraw."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by a specified number of bits, merges the rotated data with a word of 32 sign bits from that register under control of a generated mask, and places the result in another general-purpose register."
	},
	"srawi":{
	   "mnemonics":[
		  "srawi",
		  "srawi."
	   ],
	   "description":"Rotates the contents of a general-purpose register a specified number of bits to the left, merges the rotated data with a word of 32 sign bits from that register under control of a generated mask, and places the result in another general-purpose register."
	},
	"srd":{
	   "mnemonics":[
		  "srd",
		  "srd."
	   ],
	   "description":"Shift the contents of a general purpose register right by the number of bits specified by the contents of another general purpose register."
	},
	"sre":{
	   "mnemonics":[
		  "sre",
		  "sre."
	   ],
	   "description":"Shifts the contents of a general-purpose register to the right by a specified number of bits and places a copy of the rotated data in the MQ Register and the result in a general-purpose register."
	},
	"srea":{
	   "mnemonics":[
		  "srea",
		  "srea."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by a specified number of bits, places a copy of the rotated data in the MQ Register, merges the rotated word and a word of 32 sign bits from the general-purpose register under control of a mask, and places the result in another general-purpose register."
	},
	"sreq":{
	   "mnemonics":[
		  "sreq",
		  "sreq."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by a specified number of bits, merges the result with the contents of the MQ Register under control of a generated mask, and places the rotated word in the MQ Register and the merged result in another general-purpose register."
	},
	"sriq":{
	   "mnemonics":[
		  "sriq",
		  "sriq."
	   ],
	   "description":"Shifts the contents of a general-purpose register to the right by a specified number of bits and places the rotated contents in the MQ Register and the result in another general-purpose register."
	},
	"srliq":{
	   "mnemonics":[
		  "srliq",
		  "srliq."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by a specified number of bits, merges the result with the contents of the MQ Register under control of a generated mask, and places the result in another general-purpose register."
	},
	"srlq":{
	   "mnemonics":[
		  "srlq",
		  "srlq."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by a specified number of bits, merges either the rotated data or a word of zeros with the contents of the MQ Register under control of a generated mask, and places the result in a general-purpose register.  "
	},
	"srq":{
	   "mnemonics":[
		  "srq",
		  "srq."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by a specified number of bits, places the rotated word in the MQ Register, and places the logical AND of the rotated word and a generated mask in a general-purpose register."
	},
	"srw":{
	   "mnemonics":[
		  "srw",
		  "srw."
	   ],
	   "description":"Rotates the contents of a general-purpose register to the left by a specified number of bits and places the masked result in a general-purpose register."
	},
	"stb":{
	   "mnemonics":[
		  "stb"
	   ],
	   "description":"Stores a byte of data from a general-purpose register into a specified location in memory."
	},
	"stbu":{
	   "mnemonics":[
		  "stbu"
	   ],
	   "description":"Stores a byte of data from a general-purpose register into a specified location in memory and possibly places the address in another general-purpose register."
	},
	"stbux":{
	   "mnemonics":[
		  "stbux"
	   ],
	   "description":"Stores a byte of data from a general-purpose register into a specified location in memory and possibly places the address in another general-purpose register."
	},
	"stbx":{
	   "mnemonics":[
		  "stbx"
	   ],
	   "description":"Stores a byte from a general-purpose register into a specified location in memory."
	},
	"std":{
	   "mnemonics":[
		  "std"
	   ],
	   "description":"Store a doubleword of data from a general purpose register into a specified memory location."
	},
	"stdcx.":{
	   "mnemonics":[
		  "stdcx."
	   ],
	   "description":"Conditionally store the contents of a general purpose register into a storage location, based upon an existing reservation."
	},
	"stdu":{
	   "mnemonics":[
		  "stdu"
	   ],
	   "description":"Store a doubleword of data from a general purpose register into a specified memory location. Update the address base."
	},
	"stdux":{
	   "mnemonics":[
		  "stdux"
	   ],
	   "description":"Store a doubleword of data from a general purpose register into a specified memory location.  Update the address base."
	},
	"stdx":{
	   "mnemonics":[
		  "stdx"
	   ],
	   "description":"Store a doubleword of data from a general purpose register into a specified memory location."
	},
	"stfd":{
	   "mnemonics":[
		  "stfd"
	   ],
	   "description":"Stores a doubleword of data in a specified location in memory."
	},
	"stfdu":{
	   "mnemonics":[
		  "stfdu"
	   ],
	   "description":"Stores a doubleword of data in a specified location in memory and in some cases places the address in a general-purpose register."
	},
	"stfdux":{
	   "mnemonics":[
		  "stfdux"
	   ],
	   "description":"Stores a doubleword of data in a specified location in memory and in some cases places the address in a general-purpose register."
	},
	"stfdx":{
	   "mnemonics":[
		  "stfdx"
	   ],
	   "description":"Stores a doubleword of data in a specified location in memory."
	},
	"stfiwx":{
	   "mnemonics":[
		  "stfiwx"
	   ],
	   "description":"Stores the low-order 32 bits from a specified floating point register in a specified word location in memory."
	},
	"stfq":{
	   "mnemonics":[
		  "stfq"
	   ],
	   "description":"Stores in memory two double-precision values at two consecutive doubleword locations."
	},
	"stfqu":{
	   "mnemonics":[
		  "stfqu"
	   ],
	   "description":"Stores in memory two double-precision values at two consecutive doubleword locations and updates the address base."
	},
	"stfqux":{
	   "mnemonics":[
		  "stfqux"
	   ],
	   "description":"Stores in memory two double-precision values at two consecutive doubleword locations and updates the address base."
	},
	"stfqx":{
	   "mnemonics":[
		  "stfqx"
	   ],
	   "description":"Stores in memory two double-precision values at two consecutive doubleword locations."
	},
	"stfs":{
	   "mnemonics":[
		  "stfs"
	   ],
	   "description":"Stores a word of data from a floating-point register into a specified location in memory."
	},
	"stfsu":{
	   "mnemonics":[
		  "stfsu"
	   ],
	   "description":"Stores a word of data from a floating-point register into a specified location in memory and possibly places the address in a general-purpose register."
	},
	"stfsux":{
	   "mnemonics":[
		  "stfsux"
	   ],
	   "description":"Stores a word of data from a floating-point register into a specified location in memory and possibly places the address in a general-purpose register."
	},
	"stfsx":{
	   "mnemonics":[
		  "stfsx"
	   ],
	   "description":"Stores a word of data from a floating-point register into a specified location in memory."
	},
	"sth":{
	   "mnemonics":[
		  "sth"
	   ],
	   "description":"Stores a halfword of data from a general-purpose register into a specified location in memory."
	},
	"sthbrx":{
	   "mnemonics":[
		  "sthbrx"
	   ],
	   "description":"Stores a halfword of data from a general-purpose register into a specified location in memory with the two bytes reversed."
	},
	"sthu":{
	   "mnemonics":[
		  "sthu"
	   ],
	   "description":"Stores a halfword of data from a general-purpose register into a specified location in memory and possibly places the address in another general-purpose register."
	},
	"sthux":{
	   "mnemonics":[
		  "sthux"
	   ],
	   "description":"Stores a halfword of data from a general-purpose register into a specified location in memory and possibly places the address in another general-purpose register."
	},
	"sthx":{
	   "mnemonics":[
		  "sthx"
	   ],
	   "description":"Stores a halfword of data from a general-purpose register into a specified location in memory."
	},
	"stmw":{
	   "mnemonics":[
		  "stmw"
	   ],
	   "description":""
	},
	"stq":{
	   "mnemonics":[
		  "stq"
	   ],
	   "description":"Store a quad-word of data from a general purpose register into a specified memory location."
	},
	"stswi":{
	   "mnemonics":[
		  "stswi"
	   ],
	   "description":"Stores consecutive bytes from consecutive registers into a specified location in memory."
	},
	"stswx":{
	   "mnemonics":[
		  "stswx"
	   ],
	   "description":"Stores consecutive bytes from consecutive registers into a specified location in memory."
	},
	"stw":{
	   "mnemonics":[
		  "stw"
	   ],
	   "description":"Stores a word of data from a general-purpose register into a specified location in memory."
	},
	"stwbrx":{
	   "mnemonics":[
		  "stwbrx"
	   ],
	   "description":"Stores a byte-reversed word of data from a general-purpose register into a specified location in memory."
	},
	"stwcx.":{
	   "mnemonics":[
		  "stwcx."
	   ],
	   "description":"Used in conjunction with a preceding lwarx instruction to emulate a read-modify-write operation on a specified memory location."
	},
	"stwu":{
	   "mnemonics":[
		  "stwu"
	   ],
	   "description":"Stores a word of data from a general-purpose register into a specified location in memory and possibly places the address in another general-purpose register."
	},
	"stwux":{
	   "mnemonics":[
		  "stwux"
	   ],
	   "description":"Stores a word of data from a general-purpose register into a specified location in memory and possibly places the address in another general-purpose register."
	},
	"stwx":{
	   "mnemonics":[
		  "stwx"
	   ],
	   "description":"Stores a word of data from a general-purpose register into a specified location in memory."
	},
	"subf":{
	   "mnemonics":[
		  "subf",
		  "subf.",
		  "subfo",
		  "subfo."
	   ],
	   "description":"Subtracts the contents of two general-purpose registers and places the result in a third general-purpose register."
	},
	"subfc":{
	   "mnemonics":[
		  "subfc",
		  "subfc.",
		  "subfco",
		  "subfco."
	   ],
	   "description":"Subtracts the contents of a general-purpose register from the contents of another general-purpose register and places the result in a third general-purpose register."
	},
	"subfe":{
	   "mnemonics":[
		  "subfe",
		  "subfe.",
		  "subfeo",
		  "subfeo."
	   ],
	   "description":"Adds the one's complement of the contents of a general-purpose register to the sum of another general-purpose register and then adds the value of the Fixed-Point Exception Register Carry bit and stores the result in a third general-purpose register."
	},
	"subfic":{
	   "mnemonics":[
		  "subfic"
	   ],
	   "description":"Subtracts the contents of a general-purpose register from a 16-bit signed integer and places the result in another general-purpose register."
	},
	"subfme":{
	   "mnemonics":[
		  "subfme",
		  "subfme.",
		  "subfmeo",
		  "subfmeo."
	   ],
	   "description":"Adds the one's complement of a general-purpose register to -1 with carry."
	},
	"subfze":{
	   "mnemonics":[
		  "subfze",
		  "subfze.",
		  "subfzeo",
		  "subfzeo."
	   ],
	   "description":"Adds the one's complement of the contents of a general-purpose register, the Carry bit in the Fixed-Point Exception Register, and 0 and places the result in a second general-purpose register."
	},
	"svc":{
	   "mnemonics":[
		  "svc",
		  "svcl"
	   ],
	   "description":"Generates a supervisor call interrupt."
	},
	"sync":{
	   "mnemonics":[
		  "sync"
	   ],
	   "description":"sync"
	},
	"td":{
	   "mnemonics":[
		  "td"
	   ],
	   "description":"Generate a program interrupt when a specific condition is true."
	},
	"tdi":{
	   "mnemonics":[
		  "tdi"
	   ],
	   "description":"Generate a program interrupt when a specific condition is true."
	},
	"tlbie":{
	   "mnemonics":[
		  "tlbie"
	   ],
	   "description":"Makes a translation look-aside buffer entry invalid for subsequent address translations."
	},
	"tlbld":{
	   "mnemonics":[
		  "PowerPC 603 RISC Microprocessor",
		  "tlbld"
	   ],
	   "description":"Loads the data Translation Look-Aside Buffer (TLB) entry to assist a TLB reload function performed in software on the PowerPC 603 RISC Microprocessor."
	},
	"tlbli":{
	   "mnemonics":[
		  "tlbli"
	   ],
	   "description":"Loads the instruction Translation Look-Aside Buffer (TLB) entry  to assist a TLB reload function performed in software on the PowerPC 603 RISC Microprocessor."
	},
	"tlbsync":{
	   "mnemonics":[
		  "tlbsync"
	   ],
	   "description":"tlbie"
	},
	"tw":{
	   "mnemonics":[
		  "tw"
	   ],
	   "description":"Generates a program interrupt when a specified condition is true."
	},
	"twi":{
	   "mnemonics":[
		  "twi"
	   ],
	   "description":"Generates a program interrupt when a specified condition is true."
	},
	"xor":{
	   "mnemonics":[
		  "xor",
		  "xor."
	   ],
	   "description":"XORs the contents of two general-purpose registers and places the result in another general-purpose register."
	},
	"xori":{
	   "mnemonics":[
		  "xori"
	   ],
	   "description":"XORs the lower 16 bits of a general-purpose register with a 16-bit unsigned integer and places the result in another general-purpose register."
	},
	"xoris":{
	   "mnemonics":[
		  "xoris"
	   ],
	   "description":"XORs the upper 16 bits of a general-purpose register with a 16-bit unsigned integer and places the result in another general-purpose register."
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