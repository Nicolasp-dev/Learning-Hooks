import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decreaseHandler = () => {
    setCount(count - 1);
  };
  const increaseHandler = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <h2>Counter = {count} </h2>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={increaseHandler}>Increase</button>
    </>
  );
};

export default Counter;
