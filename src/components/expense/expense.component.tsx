import React from "react";
import { Button } from "../button/button.component";

export const Expense = () => {
  return (
    <div>
      <div>
        <h5>Expense Source</h5>
        <input type="text" name="expenseSource" />
      </div>
      <div>
        <h5>Amount of expense</h5>
        <input type="number" name="amountOfExpense" />
      </div>
      <div>
        <h5>Date of expense</h5>
        <input type="date" name="expenseDate" />
      </div>
      <br />
      <Button name="Add expense" />
    </div>
  );
};
