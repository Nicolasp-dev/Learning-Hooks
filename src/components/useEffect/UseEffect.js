import React, { useState } from "react";
import FetchData from "./FetchData";
import LifeCycle from "./LifeCycle";
import WindowWidth from "./WindowWidth";

const UseEffect = () => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <div>UseEffect</div>
      <FetchData />
      {show && <WindowWidth />}
      <button onClick={showHandler}>Show/Hide</button>
      <LifeCycle />
    </>
  );
};

export default UseEffect;
