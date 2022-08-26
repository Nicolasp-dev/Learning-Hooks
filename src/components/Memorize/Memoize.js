import React, { useEffect, useState, useMemo, useCallback } from "react";
import List from "./List";

const initialUsers = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Maria" },
];

const Memoize = () => {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const printUsers = useCallback(() => {
    console.log("Print Users " + users);
  }, [users]);

  useEffect(() => {
    console.log("App Render");
  });

  useEffect(() => {
    printUsers();
  }, [users, printUsers]);

  const addUserHandler = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };

  const searchHandler = () => {
    setSearch(text);
  };

  const addDeleteHandler = useCallback(
    (id) => {
      const newList = users.filter((user) => user.id !== id);
      setUsers(newList);
    },
    [users]
  );

  const filteredUser = useMemo(
    () =>
      users.filter((user) => {
        console.log("Filter Fn for " + user.name);
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, users]
  );

  return (
    <div>
      <h1>Memoizing</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addUserHandler}>Add User</button>
      <button onClick={searchHandler}>Search</button>
      <List users={filteredUser} addDeleteHandler={addDeleteHandler} />
    </div>
  );
};

export default Memoize;
