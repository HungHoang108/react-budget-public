import { useState, ChangeEvent } from "react";
import { TotalTransfer } from "../../class/transfer";

export const Balance = (props: {
  getTransfer: React.Dispatch<React.SetStateAction<TotalTransfer[]>>;
  totalBalance: number;
}) => {
  const [transferAmount, setTransferAmount] = useState(0);
  const [totalTransfer, setTotalTransfer] = useState<TotalTransfer[]>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTransferAmount(Number(e.target.value));
  };

  const addTransfer = (): void => {
    const newTransfer = {
      totalTransferAmount: transferAmount,
    };
    props.getTransfer((prev) => [...prev, newTransfer]);
    console.log("----", transferAmount);
  };

  return (
    <div>
      <h4>
        Total Balance : {props.totalBalance >= 0 ? props.totalBalance : 0}
      </h4>
      {props.totalBalance < 0 ? <p><i style={{color: "red"}}>Balance must be bigger than 0</i></p> : null}
      <h4>Transfer to saving account</h4>
      <input type="number" name="transferAmount" onChange={handleChange} />
      <button onClick={addTransfer}>Transfer</button>
    </div>
  );
};
