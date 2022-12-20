import React, { useState, ChangeEvent } from "react";
import { ExpenseClass } from "../../class/expense";

export const Expense = (props: { getExpense: React.Dispatch<React.SetStateAction<ExpenseClass[]>> }) => {
  const [expenseSource, setExpenseSource] = useState<string>("");
  const [expenseAmount, setExpenseAmount] = useState<number>(0);
  // const [date, setDate] = useState<Date>()


  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "expenseSource") {
      setExpenseSource(e.target.value);
    } else if (e.target.name === "expenseAmount") {
      setExpenseAmount(Number(e.target.value));
    }
  };

  const addExpense = (): void => {
    const newExpense = {
      expenseSource: expenseSource,
      expenseAmount: expenseAmount,
    };;
    props.getExpense([newExpense]);
  };

  return (
    <div>
      <div>
        <h5>Expense Source</h5>
        <input
          type="text"
          name="expenseSource"
          onChange={handleChange}
          value={expenseSource}
        />
      </div>
      <div>
        <h5>Amount of expense</h5>
        <input
          type="number"
          name="expenseAmount"
          value={expenseAmount}
          onChange={handleChange}
        />
      </div>
      <div>
        <h5>Date of expense</h5>
        <input type="date" name="expenseDate" />
      </div>
      <br />
      <button onClick={addExpense}>Add expense</button>
    </div>
  );
};
