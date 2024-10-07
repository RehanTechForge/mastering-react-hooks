import React, { useState } from "react";
import "./style.css";

function Counter() {
  const [count, setCount] = useState("");

  const increment = () => {
    setCount((preValue) => +preValue + 1);
  };

  const decrement = () => {
    setCount((preValue) => preValue - 1);
  };

  return (
    <>
      <div className="container">
        <h1 className="number">Your Count Is :{count}</h1>
      </div>

      <section className="btns-container">
        <button onClick={increment} className="increment">
          +
        </button>
        <button onClick={decrement} className="decrement">
          -
        </button>
      </section>
    </>
  );
}

export default Counter;
