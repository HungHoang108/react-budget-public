import { useState, createContext } from "react";
import { IIncome } from "../types/global-states";

export const IncomeContext = createContext<IIncome>({
  income: 0,
  setIncome: (n : number) => 0,
});

// export interface ThemeContextProviderProps {
//   childrent: React.ReactNode;
// }

export const Context = ({ children }: any) => {
  const [income, setIncome] = useState<number>();
  // const [expense, setExpense] = useState(null)
  // const [savingTarget, setSavingTarget] = useState(null)
console.log(income)
  const value = {
    income: 0,
    setIncome: (n : number) => 0,
  };
  return (
    <IncomeContext.Provider value={value}>{children}</IncomeContext.Provider>
  );
};
