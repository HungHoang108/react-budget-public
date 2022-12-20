import React from "react";
import { useState, FC, ChangeEvent } from "react";

import { TransferAmount } from "../../class/transfer";
import { IncomeClass } from "../../class/income";
import { ExpenseClass } from "../../class/expense";

export const Balance = (props: { getTransfer: (arg0: TransferAmount[]) => void; salary: IncomeClass[]; expense: ExpenseClass[]; }) => {
  const [transferAmount, setTransferAmount] = useState<number>(0);
  const [allTransfer, setAllTransfer] = useState<TransferAmount[]>([]);
  const [transferStatus, setTransferStatus] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTransferAmount(Number(e.target.value));
  };

  const addTransfer = (): void => {
    const newTransfer = {
      transferAmount: transferAmount,
    };
    setAllTransfer([...allTransfer, newTransfer]);
    props.getTransfer(allTransfer);
    setTransferStatus(!transferStatus);
  };

  let salary = props.salary?.reduce((x, y)=> x + y.incomeAmount, 0)
  console.log("salary ", salary)
  const expense = props.expense?.reduce((x, y)=> x + y.expenseAmount, 0)
  const transferAmountToSavingAccount =
    transferAmount && !transferStatus ? transferAmount : 0;
  let balance = salary - expense;

  return (
    <div>
      <h4>Current balance: {balance}</h4>
      <h4>Transfer to saving account</h4>
      <input
        type="number"
        name="transferAmount"
        value={transferAmount}
        onChange={handleChange}
      />
      <button onClick={addTransfer}>Transfer</button>
    </div>
  );
};
