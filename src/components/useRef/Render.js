import React, { useState, useRef, useEffect } from "react";

const Render = () => {
  const [text, setText] = useState("");
  const inputRef = useRef(1);

  useEffect(() => {
    inputRef.current++;
  });

  return (
    <div>
      <h1>Render: {inputRef.current} </h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Counter </p>
    </div>
  );
};

export default Render;
