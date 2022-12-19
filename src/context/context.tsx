import { useState, createContext } from "react";
import { IIncome } from "../types/global-states";

export const IncomeContext = createContext<IIncome>({
  income: 0,
  setIncome: (n : number) => n,
});

export const Context = ({ children }: any) => {
  const [income, setIncome] = useState();

console.log(income)
  const value = {
    income: 0,
    setIncome: (n : number) => n,
  };
  return (
    <IncomeContext.Provider value={value}>{children}</IncomeContext.Provider>
  );
};
