import React, { useState } from "react";
import { Button } from "../button/button.component";

export const Expense = (props: { getExpense: (income: any) => void }) => {
  const [expense, setExpense] = useState<number>();
  const handleChange = (e: { target: { value: any } }) => {
    const expenseAmount = e.target.value;
    setExpense(expenseAmount);
  };

  const addExpense = () => {
    props.getExpense(expense);
  };

  return (
    <div>
      <div>
        <h5>Expense Source</h5>
        <input type="text" name="expenseSource" />
      </div>
      <div>
        <h5>Amount of expense</h5>
        <input type="number" name="amountOfExpense" value={expense} onChange={handleChange}/>
      </div>
      <div>
        <h5>Date of expense</h5>
        <input type="date" name="expenseDate" />
      </div>
      <br />
      <button onClick={addExpense}>Add expense test</button>
      <Button name="Add expense" />
    </div>
  );
};
