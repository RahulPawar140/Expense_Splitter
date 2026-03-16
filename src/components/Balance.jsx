function Balance({ friends, expenses, settlements }) {
  if (friends.length === 0) return null;

  const totalExpense = expenses.reduce(
    (sum, e) => sum + e.amount,
    0
  );

  const share = totalExpense / friends.length;

  let balances = {};

  // Initialize balances
  friends.forEach(f => {
    balances[f.name] = 0;
  });

  // Add expenses
  expenses.forEach(e => {
    balances[e.paidBy] += e.amount;
  });

  // Subtract fair share
  friends.forEach(f => {
    balances[f.name] -= share;
  });

  // Apply settlements
  settlements.forEach(s => {
    balances[s.from] += s.amount;
    balances[s.to] -= s.amount;
  });

  return (
    <div className="card">
      <h3>Expense Summary</h3>

      <p><strong>Total Expense:</strong> ₹{totalExpense}</p>
      <p><strong>Each Person Pays:</strong> ₹{share.toFixed(2)}</p>

      <h4>Final Balances</h4>
      <ul>
        {Object.entries(balances).map(([name, bal], i) => (
          <li
            key={i}
            className={`balance-item ${bal >= 0 ? "receive" : "owe"}`}
          >
            {bal === 0
              ? `${name} is settled`
              : bal > 0
              ? `${name} should receive ₹${bal.toFixed(2)}`
              : `${name} owes ₹${Math.abs(bal).toFixed(2)}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Balance;