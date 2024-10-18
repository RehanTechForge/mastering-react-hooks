import { useContext } from "react";
import { MyContext } from "../context/MyContext";
const Counter = () => {
  const { count, decrement, increment } = useContext(MyContext);
  return (
    <div>
      <p>Count Is : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count <= 0 ? true : false}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
