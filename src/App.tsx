import "./App.css";
import { Expense } from "./components/expense/expense.component";
import { Income } from "./components/income/income.component";
import { Saving } from "./components/saving/saving.component";
import { Balance } from "./components/balance/balance.component";

import { useState } from "react";

const App = () => {
  const [salary, setSalary] = useState<number>();
  const [expense, setExpense] = useState<number | undefined>();
  const [savingTarget, setSavingTarget] = useState<number | undefined>();


  const getIncome = (input: number) => {
    setSalary(input);
  };

  const getExpense = (input: number) => {
    setExpense(input);
  };

  const getSavingTarget = (input: number) => {
    setSavingTarget(input);
  };

  console.log("salary", typeof salary);
  console.log("expense", expense);
  console.log("saving target", savingTarget);

  return (
    <>
      <div className="App">
        <div>
          <Income getIncome={getIncome} />
        </div>
        <div>
          <Expense getExpense={getExpense} />
        </div>
        <div>
          <Saving getSavingTarget={getSavingTarget} />
        </div>
      </div>
      <br />
      <div>
        <Balance salary={salary} expense={expense} savingTarget={savingTarget}/>
      </div>
    </>
  );
};

export default App;
