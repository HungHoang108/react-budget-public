import React from "react";
import { Button } from "../button/button.component";

export const Balance = (props: any) => {
  const salary: number = props.salary ? props.salary : 0;
  const expense: number = props.expense ? props.expense : 0;
  const savingTarget: number = props.savingTarget ? props.savingTarget : 0;
  console.log(typeof salary);
  let balance = salary + expense + savingTarget;
  return (
    <div>
      <h4>Current balance: {}</h4>
      <h4>Transfer to saving account</h4>
      <input type="number" name="transferAmount" />
      <Button name="Transfer" />
    </div>
  );
};
