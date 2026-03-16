import { useState } from "react";

function SettleUp({ friends, settlements, setSettlements }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const settle = () => {
    if (!from || !to || !amount || from === to) return;

    setSettlements([
      ...settlements,
      {
        from,
        to,
        amount: Number(amount),
      },
    ]);

    setFrom("");
    setTo("");
    setAmount("");
  };

  return (
    <div className="card">
      <h3>Settle Up</h3>

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="">From</option>
        {friends.map((f, i) => (
          <option key={i} value={f.name}>{f.name}</option>
        ))}
      </select>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="">To</option>
        {friends.map((f, i) => (
          <option key={i} value={f.name}>{f.name}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={settle}>Settle</button>
    </div>
  );
}

export default SettleUp;