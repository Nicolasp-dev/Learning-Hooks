import React, { useState } from "react";
import Card from "./Card";

const Loading = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {toggle && <Card />}
      <button onClick={toggleHandler}>show/hidden</button>
    </div>
  );
};

export default Loading;
