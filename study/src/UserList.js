import React, { useEffect } from "react";

const User = React.memo(({ user, onRemove, onToggle }) => {
  const { username, email, id, active } = user;
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트 삭제");
    };
  }, []);

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
});

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

export default React.memo(UserList);
