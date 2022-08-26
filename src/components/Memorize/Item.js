import React, { useEffect, memo } from "react";

const Item = memo(({ user, addDeleteHandler }) => {
  useEffect(() => {
    console.log(`Item Render ${user.name}`);
  });

  return (
    <>
      <li>{user.name}</li>
      <button onClick={() => addDeleteHandler(user.id)}>Delete</button>
    </>
  );
});

export default Item;
