import React from "react";
import { Button } from "../button/button.component";
import "./saving.styles.component.css"

export const Saving = () => {
  return (
    <div>
      <div>
        <h5>Set target</h5>
        <input type="number" name="setTarget" />
      </div>
      <br />
      <Button name="Reset" />
      <div>
        <h4>Current saving: </h4>
        <h4>Target: </h4>
        <h4>Progress: </h4>
      </div>
      <div className="progress">
        <div className="color"></div>
      </div>
    </div>
  );
};
