import { useState, ChangeEvent } from "react";
import { IncomeClass } from "../../class/income";

export const Income = (props: {
  getIncome: React.Dispatch<React.SetStateAction<IncomeClass[]>>;
}) => {
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "incomeSource") {
      setIncomeSource(e.target.value);
    }
    if (e.target.name === "incomeAmount") {
      const newIncome = Number(e.target.value);
      setIncomeAmount(newIncome);
      console.log(newIncome);
    }
  };

  const addIncome = (): void => {
    const newIncome = {
      incomeSource: incomeSource,
      incomeAmount: incomeAmount,
    };
    props.getIncome((prev) => [...prev, newIncome]);
    console.log(newIncome);
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
