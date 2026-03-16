import { useState } from "react";

function AddFriend({ friends, setFriends }) {
  const [name, setName] = useState("");

  const addFriend = () => {
    if (name.trim() === "") return;

    setFriends([...friends, { name }]);
    setName("");
  };

  return (
    <div className="card">
      <h3>Add Friend</h3>

      <input
        type="text"
        placeholder="Friend name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addFriend}>Add</button>
    </div>
  );
}

export default AddFriend;