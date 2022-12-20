import { useState, ChangeEvent } from "react";

export const Balance = (props: {
  getTransfer: (arg0: number) => void;
  totalBalance: number;
}) => {
  const [transferAmount, setTransferAmount] = useState(0);
  const [transferStatus, setTransferStatus] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTransferAmount(Number(e.target.value));
  };

  const addTransfer = (): void => {
    props.getTransfer(transferAmount);
    // setTransferStatus(!transferStatus);
  };

  return (
    <div>
      <h4>Total Balance : {props.totalBalance}</h4>
      <h4>Transfer to saving account</h4>
      <input
        type="number"
        name="transferAmount"
        value={transferAmount}
        onChange={handleChange}
      />
      <button onClick={addTransfer}>Transfer</button>
    </div>
  );
};
