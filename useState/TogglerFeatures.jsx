import React, { useState } from "react";

const TogglerFeatures = () => {
  const [value, setValue] = useState(false);
  return (
    <div>
      <p>Feature is {value ? "On" : "Off"}</p>
      <button onClick={() => setValue((preVal) => !preVal)}>Toggle</button>
    </div>
  );
};

export default TogglerFeatures;
