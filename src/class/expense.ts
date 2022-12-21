export class ExpenseClass {
  expenseSource: string;
  expenseAmount: number;
  date: string;
  constructor(expenseSource: string, expenseAmount: number, date: string) {
    this.expenseSource = expenseSource;
    this.expenseAmount = expenseAmount;
    this.date = date;
  }
}
