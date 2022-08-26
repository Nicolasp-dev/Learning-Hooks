import React, { useState, useRef } from "react";

const CopyApp = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState(false);
  const inputRef = useRef();

  const copyHandler = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand("copy");
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 1000);
  };

  return (
    <div>
      <h1>CopyApp</h1>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={copyHandler}>Copy</button>
      {message && <p>Copied !</p>}
    </div>
  );
};

export default CopyApp;
