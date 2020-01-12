import React from "react";

const User = ({ user, onRemove }) => {
  const { username, email, id, active } = user;

  return (
    <div>
      <b
        style={{
          color: active ? "steelblue" : "black",
          cursor: "pointer"
        }}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove }) => {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default UserList;
