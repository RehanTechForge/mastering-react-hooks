import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Effect that increments the timer when active
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  // Start the timer
  const startTimer = () => {
    setIsActive(true);
  };

  // Pause the timer
  const pauseTimer = () => {
    setIsActive(false);
  };

  // Reset the timer
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Timer: {seconds}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
