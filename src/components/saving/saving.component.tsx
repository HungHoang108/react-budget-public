import React, { useState, ChangeEvent } from "react";
import "./saving.styles.component.css";
import { AllSaving } from "../../class/saving-target";

export const Saving = (props: {
  getSavingTarget: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [savingTarget, setSavingTarget] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSavingTarget(Number(e.target.value));
  };

  const addSavingTarget = (): void => {
    props.getSavingTarget(savingTarget);
  };

  return (
    <div>
      <div>
        <h5>Set target</h5>
        <input
          type="number"
          name="savingTarget"
          onChange={handleChange}
          value={savingTarget}
        />
      </div>
      <br />
      <button onClick={addSavingTarget}>Set saving target</button>
      <div>
        <h4>Current saving: {}</h4>
        <h4>Target: {savingTarget}</h4>
        <h4>Progress: </h4>
      </div>
      <div className="progress">
        <progress />
      </div>
    </div>
  );
};
