import React, { useState } from "react";
import "./styles.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const clear = () => {
    setInputValue("");
  };

  const calculate = () => {
    try {
      const result = eval(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      setInputValue("Error");
    }
  };

  return (
    <form className="calculator" name="calc">
      <input type="text" className="value" value={inputValue} readOnly />
      <span className="clear" onClick={clear}>
        C
      </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}>
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span className="equal" onClick={calculate}>
        =
      </span>
    </form>
  );
};

export default Calculator;
