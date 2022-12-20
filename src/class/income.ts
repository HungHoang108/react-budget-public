export class IncomeClass {
    incomeSource: string
    incomeAmount: number
    // date: Date
    constructor( incomeSource: string, incomeAmount: number) {
        this.incomeSource = incomeSource
        this.incomeAmount = incomeAmount
        // this.date = date
    }
}