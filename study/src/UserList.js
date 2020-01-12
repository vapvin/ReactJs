import React from "react";

const User = ({ user, onRemove, onToggle }) => {
  const { username, email, id, active } = user;

  return (
    <div>
      <b
        style={{
          color: active ? "steelblue" : "black",
          cursor: "pointer"
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default UserList;
