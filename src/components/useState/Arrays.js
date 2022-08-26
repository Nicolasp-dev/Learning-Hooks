import React, { useState } from "react";

const initialState = [
  { id: 1, title: "Title 1", description: "Description 1" },
  { id: 2, title: "Title 2", description: "Description 2" },
];

const Arrays = () => {
  const [products, setProducts] = useState(initialState);

  const addHandler = (data) => {
    return () => {
      data.id = Date.now();
      const newList = [data, ...products];
      return setProducts(newList);
    };
  };

  const updateHandler = (newData) => {
    return () => {
      const newList = products.map((product) =>
        product.id === newData.id ? newData : product
      );
      return setProducts(newList);
    };
  };

  const deleteHandler = (id) => {
    return () => {
      const newList = products.filter((product) => product.id !== id);
      return setProducts(newList);
    };
  };

  return (
    <>
      <h2>Arrays & JSON render</h2>
      <pre>{JSON.stringify(products, null, 2)}</pre>
      <button
        onClick={addHandler({
          title: "New Title",
          description: "New Description",
        })}
      >
        Add
      </button>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <p>
              <strong>{product.title}</strong>
            </p>
            <p>{product.description}</p>
            <p>{product.id}</p>
          </div>

          <button
            onClick={updateHandler({
              id: product.id,
              title: "Updated Title",
              description: "Updated Description",
            })}
          >
            Update
          </button>
          <button onClick={deleteHandler(product.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Arrays;
