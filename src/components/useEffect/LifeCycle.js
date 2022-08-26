import React, { useEffect, useState } from "react";

console.log("Pre-Render");

const LifeCycle = () => {
  const [title, setTitle] = useState(false);

  useEffect(() => {
    console.log("useEffect - No dependency");

    return () => console.log("Cleanup useEffect - No dependency");
  });

  useEffect(() => {
    console.log("useEffect - Empty dependency");

    return () => console.log("Cleanup useEffect - Empty dependency");
  }, []);

  useEffect(() => {
    console.log("useEffect - Dependency");

    return () => console.log("Cleanup useEffect - Dependency");
  }, [title]);

  return (
    <>
      {console.log("Render")}
      <h1>LifeCycle</h1>
      {title && <h2>With React Function Components</h2>}
      <button onClick={() => setTitle(!title)}>Toggle title</button>
    </>
  );
};

export default LifeCycle;
