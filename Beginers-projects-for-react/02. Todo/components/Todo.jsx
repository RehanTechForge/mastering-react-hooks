import React, { useState } from "react";
import "./styles.css";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    setTodos((todos) => {
      return todos.concat({
        text: inputValue,
        id: Math.floor(Math.random() * 10),
      });
    });
    setInputValue("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <div className="form-container">
        <input
          type="text"
          name=""
          id=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Todo"
        />
        <button onClick={addTodo}>Submit</button>
      </div>
      <ul>
        {todos.length <= 0 && <h1>No Todo Found</h1>}
        {todos.map(({ id, text }) => (
          <li>
            {text} <span onClick={() => removeTodo(id)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
