import React from "react";
import { Button } from "../button/button.component";

export const Income = () => {
  return (
    <div>
      <div>
        <h5>Income Source</h5>
        <input type="text" name="incomeSource" />
      </div>
      <div>
        <h5>Amount of Income</h5>
        <input type="number" name="amountOfIncome" />
      </div>
      <div>
        <h5>Date of income</h5>
        <input type="date" name="incomeDate" />
      </div>
      <br />
      <Button name="Add income" />
    </div>
  );
};
