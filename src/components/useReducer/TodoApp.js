import React, { useReducer, useState } from "react";

const types = {
  add: "Add",
  update: "Update",
  delete: "Delete",
};

const initialTodos = [
  { id: 1, title: "First Todo" },
  { id: 2, title: "Second Todo" },
];

const todosReducer = (state, action) => {
  switch (action.type) {
    case types.add:
      return [...state, action.payload];

    case types.update: {
      const updateData = action.payload;
      return state.map((todo) =>
        todo.id === updateData.id ? updateData : todo
      );
    }

    case types.delete:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatchTodos] = useReducer(todosReducer, initialTodos);
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), title: text };

    dispatchTodos({ type: types.add, payload: newUser });
    setText("");
  };

  return (
    <div>
      <h1>TodoApp</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <li>{todo.title}</li>
          <button
            onClick={() =>
              dispatchTodos({ type: types.delete, payload: todo.id })
            }
          >
            Delete
          </button>
          <button
            onClick={() =>
              dispatchTodos({
                type: types.update,
                payload: { ...todo, title: text },
              })
            }
          >
            Update
          </button>
        </ul>
      ))}
    </div>
  );
};

export default TodoApp;
