import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(false);

  const whiteTheme = {
    height: "100vh",
    width: "100%",
    backgroundColor: "white",
    color: "Black",
  };
  const blackTheme = {
    height: "100vh",
    width: "100%",
    backgroundColor: "black",
    color: "white",
  };

  return (
    <div style={theme ? blackTheme : whiteTheme}>
      <h1>Theme Switcher</h1>
      <button onClick={() => setTheme(!theme)}>Change Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
