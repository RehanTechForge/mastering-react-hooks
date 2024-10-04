import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const addNewTodo = [...todos, value];
    setTodos(addNewTodo);
    setValue("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="todo">Add Item</label>
        <input
          type="text"
          id="todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add</button>
      </form>
      <h1>Display Todo</h1>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo, index) => (
            <li>
              {index + 1}:{todo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
