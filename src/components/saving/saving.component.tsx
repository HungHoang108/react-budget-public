import React, { useState } from "react";
import { Button } from "../button/button.component";
import "./saving.styles.component.css";

export const Saving = (props: {
  getSavingTarget: (income: any) => void;
  savingAmount: number[] | undefined;
}) => {
  const [savingTarget, setSavingTarget] = useState<number | undefined>();

  console.log(props.savingAmount);

  const handleChange = (e: { target: { value: any } }) => {
    const savingAmount = e.target.value;
    setSavingTarget(savingAmount);
    console.log(savingAmount);
  };

  const addSavingTarget = () => {
    props.getSavingTarget(savingTarget);
  };
  return (
    <div>
      <div>
        <h5>Set target</h5>
        <input
          type="number"
          name="setTarget"
          onChange={handleChange}
          value={savingTarget}
        />
      </div>
      <br />
      <button onClick={addSavingTarget}>Set saving target</button>
      <div>
        <h4>Current saving: {props.savingAmount}</h4>
        <h4>Target: {savingTarget}</h4>
        <h4>Progress: </h4>
      </div>
      <div className="progress">
        <div className="color"></div>
      </div>
    </div>
  );
};
