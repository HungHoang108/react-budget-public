import React, { useState, ChangeEvent, useEffect } from "react";
import { savingAmount } from "../../class/saving-target";

export const Saving = (props: {
  getSavingTarget: React.Dispatch<React.SetStateAction<number>>;
  totalSaving: number;
}) => {
  const [savingTarget, setSavingTarget] = useState(0);
  const [savingAmount, setSavingAmount] = useState<savingAmount[]>();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const saving = {
      savingNumber: props.totalSaving,
    };
    setSavingAmount([saving]);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSavingTarget(Number(e.target.value));
  };

  const addSavingTarget = (): void => {
    props.getSavingTarget(savingTarget);
    setStatus(savingTarget);
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
        <h4>Target: {status}</h4>
        <h4>
          Progress: {savingTarget && Math.round((props.totalSaving / savingTarget) * 100)}%
        </h4>
      </div>
      <div>
        <progress value={props.totalSaving } max={savingTarget} />
      </div>
    </div>
  );
};
