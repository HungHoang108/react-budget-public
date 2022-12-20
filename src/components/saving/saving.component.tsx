import React, { useState, ChangeEvent, useEffect } from "react";
import "./saving.styles.component.css";
import { savingAmount } from "../../class/saving-target";

export const Saving = (props: {
  getSavingTarget: React.Dispatch<React.SetStateAction<number>>;
  totalSaving: number;
}) => {
  const [savingTarget, setSavingTarget] = useState(0);
  const [savingAmount, setSavingAmount] = useState<savingAmount[]>();

  useEffect(() => {
    const saving = {
      savingNumber: props.totalSaving,
    };
    setSavingAmount([saving]);
  }, []);
  const test = savingAmount?.reduce((a, b) => a + b.savingNumber, 0);
  const total = () => {
    savingAmount?.reduce((a, b) => a + b.savingNumber, 0);
  };
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
        <h4>Current saving: {props.totalSaving}</h4>
        <h4>Target: {savingTarget}</h4>
        <h4>Progress: {Math.round(props.totalSaving/savingTarget*100)}%</h4>
      </div>
      <div className="progress">
        <progress value={props.totalSaving} max={savingTarget}/>
      </div>
    </div>
  );
};
