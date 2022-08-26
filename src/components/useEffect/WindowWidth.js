import React, { useState, useEffect } from "react";

const WindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowSizeHandler = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", windowSizeHandler);

    return () => window.removeEventListener("resize", windowSizeHandler);
  }, [windowWidth]);

  return (
    <>
      <h1>Window Width: {windowWidth}</h1>
    </>
  );
};

export default WindowWidth;
