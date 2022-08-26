import React, { useEffect, memo } from "react";
import Item from "./Item";

const List = memo(({ users, addDeleteHandler }) => {
  useEffect(() => {
    console.log("List Render");
  });

  return (
    <div>
      <ul>
        {users.map((user) => (
          <Item key={user.id} user={user} addDeleteHandler={addDeleteHandler} />
        ))}
      </ul>
    </div>
  );
});

export default List;
