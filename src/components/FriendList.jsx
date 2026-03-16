function FriendList({ friends }) {
  return (
    <div className="card">
      <h3>Friends List</h3>

      {friends.length === 0 ? (
        <p>No friends added yet</p>
      ) : (
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>{friend.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FriendList;