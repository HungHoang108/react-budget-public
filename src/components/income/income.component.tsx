import React from "react";
import { Button } from "../button/button.component";
import { useState } from "react";

export const Income = (props: { getIncome: (income: any) => void }) => {
  const [income, setIncome] = useState<number>();
  const handleChange = (e: { target: { value: any } }) => {
    const incomeAmount = e.target.value;
    console.log("-----", typeof incomeAmount);

    setIncome(incomeAmount);
  };

  const addIncome = () => {
    props.getIncome(income);
  };
  return (
    <div>
      <div>
        <h5>Income Source</h5>
        <input type="text" name="incomeSource" />
      </div>
      <div>
        <h5>Amount of Income</h5>
        <input
          type="number"
          name="amountOfIncome"
          onChange={handleChange}
          value={income}
        />
      </div>
      <div>
        <h5>Date of income</h5>
        <input type="date" name="incomeDate" />
      </div>
      <br />
      <button onClick={addIncome}>Add income</button>
      {/* <Button name="Add income" /> */}
    </div>
  );
};
