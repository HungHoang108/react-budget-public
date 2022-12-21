import "./App.scss";
import { Expense } from "./components/expense/expense.component";
import { Income } from "./components/income/income.component";
import { Saving } from "./components/saving/saving.component";
import { Balance } from "./components/balance/balance.component";
import { useState, useEffect } from "react";

import { ExpenseClass } from "./class/expense";
import { IncomeClass } from "./class/income";
import { TotalTransfer } from "./class/transfer";
import "./"

const App = () => {
  const [salary, setSalary] = useState<IncomeClass[]>([]);
  const [expense, setExpense] = useState<ExpenseClass[]>([]);
  const [savingTarget, setSavingTarget] = useState(0);
  const [transferToSaving, setTransfertoSaving] = useState<TotalTransfer[]>([]);
  const [balance, setBalance] = useState(0);
  


  const income = salary.reduce((a, b) => a + b.incomeAmount, 0);
  const allExpense = expense.reduce((a, b) => a + b.expenseAmount, 0);
  const allSaving = transferToSaving.reduce(
    (a, b) => a + b.totalTransferAmount,
    0
  );
  useEffect(() => {
    setBalance(income - allExpense - allSaving);
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
          <Saving getSavingTarget={setSavingTarget} totalSaving={allSaving} />
        </div>
      </div>
      <br />

      <Balance getTransfer={setTransfertoSaving} totalBalance={balance} />
    </>
  );
};

export default App;
