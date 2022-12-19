import React from "react";
import { Button } from "../button/button.component";

export const Balance = (props: any) => {
  const salary = props.salary ? props.salary : 0;
  const expense = props.expense ? props.expense : 0;
  const savingTarget = props.savingTarget ? props.savingTarget : 0;
  console.log(typeof parseInt(salary));
  let balance = parseInt(salary) - parseInt(expense) - parseInt(savingTarget);
  return (
    <div>
      <h4>Current balance: {balance}</h4>
      <h4>Transfer to saving account</h4>
      <input type="number" name="transferAmount" />
      <Button name="Transfer" />
    </div>
  );
};
