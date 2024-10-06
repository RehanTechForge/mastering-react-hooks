import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../todoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputVal, setInputVal] = useState("");

  const filterTodos = (todos, filter) => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "incomplete":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = filterTodos(state.todos, state.filter);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todo List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Enter new todo..."
          style={styles.input}
        />
        <button
          onClick={() => {
            dispatch({ type: "add_todo", payload: inputVal });
            setInputVal("");
          }}
          style={styles.addButton}
        >
          Add
        </button>
      </div>
      <div style={styles.filterContainer}>
        <button
          onClick={() => dispatch({ type: "set_filter", payload: "all" })}
          style={{
            ...styles.filterButton,
            backgroundColor: state.filter === "all" ? "#444" : "#ccc",
          }}
        >
          All
        </button>
        <button
          onClick={() => dispatch({ type: "set_filter", payload: "completed" })}
          style={{
            ...styles.filterButton,
            backgroundColor: state.filter === "completed" ? "#444" : "#ccc",
          }}
        >
          Completed
        </button>
        <button
          onClick={() =>
            dispatch({ type: "set_filter", payload: "incomplete" })
          }
          style={{
            ...styles.filterButton,
            backgroundColor: state.filter === "incomplete" ? "#444" : "#ccc",
          }}
        >
          Incomplete
        </button>
      </div>
      <ul style={styles.todoList}>
        {filteredTodos.map((todo) => (
          <li key={todo.id} style={styles.todoItem}>
            <span
              style={{
                ...styles.todoText,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#888" : "#000",
              }}
            >
              {todo.text}
            </span>
            <div>
              <button
                onClick={() =>
                  dispatch({ type: "toggle_todo", payload: todo.id })
                }
                style={styles.actionButton}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "delete_todo", payload: todo.id })
                }
                style={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: "1",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addButton: {
    marginLeft: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  filterButton: {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    margin: "0 5px",
  },
  todoList: {
    listStyleType: "none",
    padding: "0",
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginBottom: "10px",
    backgroundColor: "#fff",
  },
  todoText: {
    fontSize: "16px",
  },
  actionButton: {
    padding: "5px 10px",
    fontSize: "14px",
    marginRight: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    fontSize: "14px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Todo;
