export class MathSym {   
    constructor() {
	   // throw Error(`${new.target.name} should not be called as a constructor`);
	   	throw Error("MathSym should not be called as a constructor function")

    }
    
    static times() {
	   return '\u00d7'
    }
    
    static DivisionSign() {
	   return '\u00f7'
    }
}