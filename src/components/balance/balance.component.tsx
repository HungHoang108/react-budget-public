import React from "react";
import { Button } from "../button/button.component";

export const Balance = () => {
  return (
    <div>
      <h4>Current balance: </h4>
      <h4>Transfer to saving account</h4>
      <input type="number" name="transferAmount" />
      <Button name="Transfer" />
    </div>
  );
};
