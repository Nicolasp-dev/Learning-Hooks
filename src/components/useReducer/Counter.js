import { useReducer } from "react";

const types = {
  increment: "Increment",
  decrement: "Decrement",
  reset: "Reset",
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case types.increment:
      return state + 1;
    case types.decrement:
      return state - 1;
    case types.reset:
      return (state = 0);
    default:
      return state;
  }
};

const Counter = () => {
  const [counter, dispatchCounter] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatchCounter({ type: types.increment })}>
        Increment
      </button>
      <button onClick={() => dispatchCounter({ type: types.decrement })}>
        Decrement
      </button>
      <button onClick={() => dispatchCounter({ type: types.reset })}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
