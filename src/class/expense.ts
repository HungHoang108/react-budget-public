export class ExpenseClass {
    expenseSource: string
    expenseAmount: number
    // date: Date
    constructor( expenseSource: string, expenseAmount: number) {
        this.expenseSource = expenseSource
        this.expenseAmount = expenseAmount
        // this.date = date
    }
}