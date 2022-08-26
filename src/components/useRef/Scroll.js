import React, { useState, useEffect, useRef } from "react";

const Scroll = () => {
  const [background, setBackground] = useState("pink");
  const divRef = useRef();

  useEffect(() => {
    const scrollHandler = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();

      const toggleBg = y <= 0 ? "orange" : "pink";
      setBackground(toggleBg);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div>
      <h1>Scroll</h1>
      <div ref={divRef} style={{ height: "150vh", background }}>
        <h2>Scroll to change background color</h2>
      </div>
    </div>
  );
};

export default Scroll;
