import React, { useState } from "react";
import "./CounterWithConfigurableSteps.css";

function CounterWithConfigurableSteps() {
  const [count, setCount] = useState(0);
  const [userInputValue, setUserInputValue] = useState(1);

  function CounterButton({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
  }

  function handleCounter(type) {
    const step = userInputValue || 1;
    if (type === "increment") {
      setCount((prev) => prev + step);
    } else if (type === "decrement") {
      setCount((prev) => (prev > 0 ? prev - step : 0)); // prevents negative
    } else if (type === "reset") {
      setCount(0);
      setUserInputValue(1);
    }
  }
  return (
    <div className="p-8 text-center">
      <h1>React useState Mastery 🚀</h1>
      <p>Current count: {count}</p>
      <input
        type="number"
        value={userInputValue}
        onChange={(e) => setUserInputValue(+e.target.value)}
        className="step-input"
      />
      <div className="counter-value">{count}</div>
      <CounterButton label="−" onClick={() => handleCounter("decrement")} />
      <CounterButton label="Reset" onClick={() => handleCounter("reset")} />
      <CounterButton label="+" onClick={() => handleCounter("increment")} />
    </div>
  );
}

export default CounterWithConfigurableSteps;
