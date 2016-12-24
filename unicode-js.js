
//Latin
const { EuLatin, EuLatinDeprecated } = require("./Latin/europeanlatin.js")
const { LatinLetters } = require("./Latin/latinletters.js")
const { MathSym } = require("./Latin/math.js")
const { NonEuHistLatin } = require("./Latin/noneuhistoriclatin.js")
const { Punct } = require("./Latin/punctuation.js")


// Armenia

const { ArmeniaLetters, 
		ModifierLetter, 
		Punct, 
		Symbols
	  } = require("./Armenia/armenialetter.js");


// More Language support will be added here







// Rexporting so that the user can just require from a central file

module.exports = {
	EuLatin, 
	EuLatinDeprecated,
	LatinLetters,
	MathSym,
	NonEuHistLatin,
	Punct,
	ArmeniaLetters, 
	ModifierLetter, 
	Punct, 
	Symbols	
}
