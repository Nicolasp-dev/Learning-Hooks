import React, { useState } from "react";

const Conditional = () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => setToggle(!toggle);

  return (
    <>
      {toggle ? <h2>Conditional Rendering</h2> : <h3>Conditional Rendering</h3>}

      <button onClick={toggleHandler}>Toggle</button>
    </>
  );
};

export default Conditional;
