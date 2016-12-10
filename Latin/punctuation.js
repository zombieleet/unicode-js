export class Punct {
    construtor() {
	throw Error(`${new.target.name} should not be called as a constructor`)
    }

    static InvertedExclamationMark() {
	return '\u00a1'
    }

    static CentSign() {
	return '\u00a2'
    }

    static PoundSign() {
	return '\u00a3'
    }

    static CurrencySign() {
	return '\u00a4'
    }

    static YenSign() {
	return '\u00a5'
    }

    static BrokenBar() {
	return '\u00a6'
    }

    static SectionSign() {
	return '\u00a7'
    }

    static DiaeresisUmlaut() {
	return '\u00a8'
    }

    static CopyrightSign() {
	return '\u00a9'
    }

    static FeminineOrdinalIndicator() {
	return '\u00aa'
    }

    static LeftPointDoubleAngleQuotationMark() {
	return '\u00ab'
    }

    static NotSign() {
	return '\u00ac'
    }

    static SoftHyphen() {
	return '\u00ad'
    }

    static RegisteredSign() {
	return '\u00ae'
    }

    static Macron() {
	return '\u00af'
    }

    static DegreeSymbol() {
	return '\u00b0'
    }

    static PlusMinusSign() {
	return '\u00b1'
    }

    static SuperScriptTwo() {
	return '\u00b2'
    }

    static SuperScriptThree() {
	return '\u00b3'
    }

    static AcuteAccent() {
	return '\u00b4'
    }

    static MicroSign() {
	return '\u00b5'
    }

    static PilcrowSign() {
	return '\u00b6'
    }

    static MiddleDot() {
	return '\u00b7'
    }

    static Cedilla() {
	return '\u00b8'
    }

    static SuperScriptOne() {
	return '\u00b9'
    }

    static MasculineOrdinalIndicator() {
	return '\u00ba'
    }

    static RightPointDoubleAngleQuotation() {
	return '\u00bb'
    }

    static VulgarFractionOneQuarter() {
	return '\u00bc'
    }

    static VulgarFractionOneHalf() {
	return '\u00bd'
    }

    static VulgarFractionThreeQuarters() {
	return '\u00be'
    }

    static InvertedQuestionMark() {
	return '\u00bf'
    }
    
}

console.log(Punct.InvertedQuestionMark())

console.log(Punct.VulgarFractionThreeQuarters())

console.log(Punct.AcuteAccent())

console.log(Punct.SoftHyphen())
