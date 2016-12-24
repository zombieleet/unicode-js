
//Latin
const { EuLatin, EuLatinDeprecated } = require("./Latin/europeanlatin.js")
const { LatinLetters } = require("./Latin/latinletters.js")
const { LatinMathSym } = require("./Latin/math.js")
const { NonEuHistLatin } = require("./Latin/noneuhistoriclatin.js")
const { LatinPunct } = require("./Latin/punctuation.js")


// Armenia

const { ArmeniaLetters, 
		ArmeniaModifierLetter, 
		ArmeniaPunct, 
		ArmeniaSymbols
	  } = require("./Armenia/armenialetters.js");


// More Language support will be added here







// Rexporting so that the user can just require from a central file

module.exports = {
	EuLatin, 
	EuLatinDeprecated,
	LatinLetters,
	LatinMathSym,
	NonEuHistLatin,
	LatinPunct,


	ArmeniaLetters, 
	ArmeniaModifierLetter, 
	ArmeniaPunct, 
	ArmeniaSymbols	



}
