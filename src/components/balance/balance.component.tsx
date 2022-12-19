import React from "react";
import { Button } from "../button/button.component";
import { useState } from "react";

export const Balance = (props: any) => {
  const [transferAmount, setTransferAmount] = useState<any>();
  const [transferStatus, setTransferStatus] = useState<boolean>(false);

  const handlechange = (e: { target: { value: any } }) => {
    const transferAmount = e.target.value;
    setTransferAmount(transferAmount);
    console.log(typeof transferAmount);
  };

  const handleClick = () => {
    props.getTransfer(transferAmount);
    setTransferStatus(!transferStatus);
  };

  const salary = props.salary ? props.salary : 0;
  const expense = props.expense ? props.expense : 0;
  const transferAmountToSavingAccount =
    transferAmount && !transferStatus ? transferAmount : 0;
  let balance =
    parseInt(salary) -
    parseInt(expense) -
    parseInt(transferAmountToSavingAccount);

  return (
    <div>
      <h4>Current balance: {balance}</h4>
      <h4>Transfer to saving account</h4>
      <input
        type="number"
        name="transferAmount"
        value={transferAmount}
        onChange={handlechange}
      />
      <button onClick={handleClick}>Transfer</button>
    </div>
  );
};
