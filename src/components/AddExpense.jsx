import { useState } from "react";

function AddExpense({ friends, expenses, setExpenses }) {
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");


  const addExpense = () => {
  if (!amount || !paidBy) return;
  if (friends.length === 0) return;

  setExpenses([...expenses, {
    amount: Number(amount),
    paidBy,
  }]);

  setAmount("");
  setPaidBy("");
};

  return (
    <div className="card">
      <h3>Add Expense</h3>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
        <option value="">Paid by</option>
        {friends.map((f, index) => (
          <option key={index} value={f.name}>
            {f.name}
          </option>
        ))}
      </select>
      <button onClick={addExpense} disabled={friends.length === 0}>Add Expense</button>
      {friends.length === 0 && (
        <p style={{ color: "red", fontSize: "14px" }}>
            Please add friends before adding expenses.
        </p>
      )}
    </div>
  );
}

export default AddExpense;