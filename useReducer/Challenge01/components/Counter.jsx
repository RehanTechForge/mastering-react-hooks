import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../counterReducer";
import "./Counter.css";

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="counter-container">
      <div className="counter-box">
        <h1 className="counter-heading">Count Value Is: {count.count}</h1>
        <input
          type="text"
          placeholder="Enter Value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="counter-input"
        />
        <div className="counter-buttons">
          <button onClick={() => dispatch({ type: "increment" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "decrement" })}>
            Decrement
          </button>
          <button
            onClick={() =>
              dispatch({ type: "increaseByAmount", payload: +inputValue })
            }
          >
            IncrementByAmount
          </button>
          <button
            onClick={() =>
              dispatch({ type: "decreaseByAmount", payload: +inputValue })
            }
          >
            DecrementByAmount
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
