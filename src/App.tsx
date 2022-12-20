import "./App.css";
import { Expense } from "./components/expense/expense.component";
import { Income } from "./components/income/income.component";
import { Saving } from "./components/saving/saving.component";
import { Balance } from "./components/balance/balance.component";
import { useState, useEffect } from "react";

import { ExpenseClass } from "./class/expense";
import { IncomeClass } from "./class/income";

const App = () => {
  const [salary, setSalary] = useState<IncomeClass[]>([]);
  const [expense, setExpense] = useState<ExpenseClass[]>([]);
  const [savingTarget, setSavingTarget] = useState(0);
  const [transferToSaving, setTransfertoSaving] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const income = salary.reduce((a, b) => a + b.incomeAmount, 0);
    const allExpense = expense.reduce((a, b) => a + b.expenseAmount, 0);
    setBalance(income - allExpense - transferToSaving);
  });

  return (
    <>
      <div className="App">
        <div>
          <Income getIncome={setSalary} />
        </div>
        <div>
          <Expense getExpense={setExpense} />
        </div>
        <div>
          <Saving getSavingTarget={setSavingTarget} />
        </div>
      </div>
      <br />

      <Balance getTransfer={setTransfertoSaving} totalBalance={balance} />
    </>
  );
};

export default App;
