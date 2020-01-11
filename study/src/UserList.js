import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
};

const UserList = () => {
  const users = [
    {
      id: 1,
      username: "react",
      email: "react@abc.com"
    },
    {
      id: 2,
      username: "vins",
      email: "vins@abc.com"
    },
    {
      id: 3,
      username: "hans",
      email: "hans@abc.com"
    }
  ];

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;

// git add . or File name

// git commit -m " Messages "

// git push origin master
