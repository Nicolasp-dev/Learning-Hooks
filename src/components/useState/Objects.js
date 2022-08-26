import React, { useState } from "react";

const initialState = {
  title: "Initial Title",
  description: "Initial Description",
};

const Objects = () => {
  const [products, setProducts] = useState(initialState);

  const clickHandler = (key, value) => {
    setProducts({
      ...products,
      [key]: value,
    });
  };

  return (
    <>
      <h2>Objects Example & JSON render</h2>
      <p>{products.title}</p>
      <p>{products.description}</p>
      <pre>{JSON.stringify(products, null, 2)}</pre>
      <button onClick={() => clickHandler("title", "New Title")}>
        Update Products
      </button>
    </>
  );
};

export default Objects;
