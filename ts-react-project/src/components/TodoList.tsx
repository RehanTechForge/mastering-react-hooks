import { FormEvent, useState } from "react";
type TodoType = {
  id: number;
  text: string;
  isCompleted: boolean;
};
const TodoList = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [inputVal, setInputVal] = useState<string>("");

  const deleteTodo = (id: number) => {
    const filterTodo = todo.filter((todo) => todo.id !== id);
    setTodo(filterTodo);
  };

  const completedTodo = (id: number) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
    // setTodo([...todo, todoFound]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodoObj = {
      id: todo.length + 1,
      text: inputVal,
      isCompleted: false,
    };

    setTodo((prevTodo) => [...prevTodo, newTodoObj]);
    setInputVal("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-box">Enter Todo:</label>
        <input
          type="text"
          id="input-box"
          name="input-box"
          placeholder="Todo here..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {todo.map((todo) => (
          <p
            style={
              todo.isCompleted
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {todo.text}{" "}
            <button onClick={() => completedTodo(todo.id)}>
              {todo.isCompleted ? "Not Complete" : "Complete"}
            </button>{" "}
            <button onClick={() => deleteTodo(todo.id)}>delete</button>{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
