class Calculation {
    constructor() {
        this.calculationLine = '';
    }

    setterCalculationLine(value) {
        this.calculationLine = value;
    }

    setLastSymbolCalculationLine(symbol) {
        this.calculationLine += symbol;
    }

    getterCalculationLine() {
        return this.calculationLine;
    }

    getLastSymbol() {
        if (this.calculationLine.length > 0) {
            return this.calculationLine.slice(-1);
        } else {
            return null;
        }
    }

    deleteLastSymbol() {
        this.calculationLine = this.calculationLine.slice(0, -1);
    }
}


const calc = new Calculation();
calc.setterCalculationLine('мяукалка');
calc.setLastSymbolCalculationLine('мяу');
console.log(calc.getterCalculationLine());
console.log(calc.getLastSymbol());
calc.deleteLastSymbol();
console.log(calc.getterCalculationLine());