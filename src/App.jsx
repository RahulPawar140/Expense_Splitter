import { useState, useEffect } from "react";

import AddFriend from "./components/AddFriend";
import FriendList from "./components/FriendList";
import AddExpense from "./components/AddExpense";
import SettleUp from "./components/SettleUp";
import Balance from "./components/Balance";

function App() {
  const [friends, setFriends] = useState(() => {
    const data = localStorage.getItem("friends");
    return data ? JSON.parse(data) : [];
  });

  const [expenses, setExpenses] = useState(() => {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
  });

  const [settlements, setSettlements] = useState(() => {
    const data = localStorage.getItem("settlements");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friends));
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("settlements", JSON.stringify(settlements));
  }, [friends, expenses, settlements]);

  // ✅ CLEAR DATA FUNCTION
  const clearData = () => {
    if (window.confirm("Are you sure you want to clear all data?")) {
      setFriends([]);
      setExpenses([]);
      setSettlements([]);
      localStorage.clear();
    }
  };

  return (
    <div className="app">
      <h1>💸 Expense Splitter for Friends</h1>

      <AddFriend friends={friends} setFriends={setFriends} />
      <FriendList friends={friends} />
      <AddExpense
        friends={friends}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <SettleUp
        friends={friends}
        settlements={settlements}
        setSettlements={setSettlements}
      />
      <Balance
        friends={friends}
        expenses={expenses}
        settlements={settlements}
      />
      {/* Clear Data Button */}
      <button
        onClick={clearData}
        style={{
          backgroundColor: "#dc3545",
          color: "white",
          padding: "10px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Clear All Data
      </button>
    </div>
  );
}

export default App;