import React, { useState, useRef } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

const App = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    setInputs({
      username: "",
      email: ""
    });
    console.log(nextId.current);
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
};

export default App;
