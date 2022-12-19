import "./App.css";
import { Expense } from "./components/expense/expense.component";
import { Income } from "./components/income/income.component";
import { Saving } from "./components/saving/saving.component";
import { Balance } from "./components/balance/balance.component";

import { useState, useEffect } from "react";

const App = () => {
  const [salary, setSalary] = useState();

  const getIncome = (input: any) => {
    setSalary(input);
    console.log("input is :", input);
  };
  console.log("salary is :", salary);
  return (
    <>
      <div className="App">
        <div>
          <Income getIncome={getIncome} />
        </div>
        <div>
          <Expense />
        </div>
        <div>
          <Saving />
        </div>
      </div>
      <br />
      <div>
        <Balance />
      </div>
    </>
  );
};

export default App;
