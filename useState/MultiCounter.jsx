import React, { useState } from "react";

const MultiCounter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  return (
    <div>
      <div>
        <h1>Counter One</h1>
        <h1>{counterOne}</h1>
        <button onClick={() => setCounterOne((pre) => pre + 1)}>
          Increment
        </button>
      </div>
      <div>
        <h1>Counter Two</h1>
        <h1>{counterTwo}</h1>
        <button onClick={() => setCounterTwo((pre) => pre + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default MultiCounter;
