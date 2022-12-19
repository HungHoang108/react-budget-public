import "./App.css";
import { Expense } from "./components/expense/expense.component";
import { Income } from "./components/income/income.component";
import { Saving } from "./components/saving/saving.component";
import { Balance } from "./components/balance/balance.component";

import { useContext, useEffect } from "react";
// import { IncomeContext } from "./context/context";

const App = () => {
;
  return (
    <>
      <div className="App">
        <div>
          <Income />
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
