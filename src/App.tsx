import "./App.css";
import { Expense } from "./components/expense/expense.component";
import { Income } from "./components/income/income.component";
import { Saving } from "./components/saving/saving.component";
import { Balance } from "./components/balance/balance.component";
import { useState, FC } from "react";

import { AllSaving } from "./class/saving-target";
import { ExpenseClass } from "./class/expense";
import { IncomeClass } from "./class/income";
import { TransferAmount } from "./class/transfer";

const App: FC = () => {
  const [salary, setSalary] = useState<IncomeClass[]>([]);
  const [expense, setExpense] = useState<ExpenseClass[]>([]);
  const [savingTarget, setSavingTarget] = useState<number>(0);
  const [transferToSaving, setTransfertoSaving] = useState<TransferAmount[]>(
    []
  );

  const getIncome = (input: IncomeClass[]) => {
    setSalary(input);
  };

  const getExpense = (input: ExpenseClass[]) => {
    setExpense(input);
  };

  const getSavingTarget = (input: number) => {
    setSavingTarget(input);
  };

  const getTransfer = (input: TransferAmount[]) => {
    setTransfertoSaving(input);
  };

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
          <Saving
            getSavingTarget={getSavingTarget}
            // savingAmount={transferToSaving}
          />
        </div>
      </div>
      <br />
      <div>
        <Balance salary={salary} expense={expense} getTransfer={getTransfer} />
      </div>
    </>
  );
};

export default App;
