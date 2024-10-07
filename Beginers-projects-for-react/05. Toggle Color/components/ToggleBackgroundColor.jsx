import React, { useState } from "react";
import "./styles.css";

const ToggleBackgroundColor = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const backgroundColor = isDarkTheme ? "#1b1b1b" : "white";
  const textColor = isDarkTheme ? "#ffa31a" : "#1b1b1b";
  const buttonText = isDarkTheme ? "Light Theme" : "Dark Theme";

  return (
    <section
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          border: `2px solid ${textColor}`,
          color: textColor,
        }}
      >
        {buttonText}
      </button>
      <section className="content">
        <h1>
          Welcome To A <br /> Real World..
        </h1>
      </section>
    </section>
  );
};

export default ToggleBackgroundColor;
