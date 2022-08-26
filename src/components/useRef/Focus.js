import React, { useState, useRef } from "react";

const Focus = () => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const focusHandler = () => {
    inputRef.current.value = "Goodbye World";
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={focusHandler}>Focus</button>
    </div>
  );
};

export default Focus;
