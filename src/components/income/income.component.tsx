import React from "react";
import { useState, FC, ChangeEvent } from "react";
import { IncomeClass } from "../../class/income";

export const Income = (props: { getIncome: (income: any) => void }) => {
  const [incomeSource, setIncomeSource] = useState<string>("");
  const [incomeAmount, setIncomeAmount] = useState<number>(0);
  // const [date, setDate] = useState<Date>()
  const [income, setIncome] = useState<IncomeClass[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "incomeSource") {
      setIncomeSource(e.target.value);
    }

    if (e.target.name === "incomeAmount") {
      setIncomeAmount(Number(e.target.value));
    }
  };

  const addIncome = (): void => {
    const newIncome = {
      incomeSource: incomeSource,
      incomeAmount: incomeAmount,
    };
    setIncome([...income, newIncome]);
    props.getIncome(income);
  };
  return (
    <div>
      <div>
        <h5>Income Source</h5>
        <input
          type="text"
          name="incomeSource"
          onChange={handleChange}
          value={incomeSource}
        />
      </div>
      <div>
        <h5>Amount of Income</h5>
        <input
          type="number"
          name="incomeAmount"
          onChange={handleChange}
          value={incomeAmount}
        />
      </div>
      <div>
        <h5>Date of income</h5>
        <input type="date" name="date" />
      </div>
      <br />
      <button onClick={addIncome}>Add income</button>
    </div>
  );
};
