import React, { useReducer } from "react";
import productReducer, {
  initialProductState,
} from "../../reducers/productReducer";
import types from "../../types/types";

const Product = () => {
  const [productState, dispatch] = useReducer(
    productReducer,
    initialProductState
  );

  const { products, cart, activeProduct } = productState;

  return (
    <div>
      <h2>Product</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            Title: {product.title}
            <button
              onClick={() => {
                dispatch({ type: types.productShow, payload: product });
              }}
            >
              Show
            </button>
            <button
              onClick={() => {
                dispatch({ type: types.productAddToCart, payload: product });
              }}
            >
              Add
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            Title: {product.title} - Quantity: {product.quantity}
            <button
              onClick={() => {
                dispatch({
                  type: types.productRemoveOneFromCart,
                  payload: product.id,
                });
              }}
            >
              Remove one
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: types.productRemoveFromCart,
                  payload: product.id,
                });
              }}
            >
              Remove all
            </button>
          </li>
        ))}
      </ul>

      <h2>Preview</h2>
      <p>Title {activeProduct.title}</p>
    </div>
  );
};

export default Product;
