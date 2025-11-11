import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function handleCounter(type) {
    if (type === "increment") {
      setCount((prev) => prev + 5);
    } else if (type === "decrement") {
      setCount((prev) => (prev > 0 ? prev - 1 : 0)); // prevents negative
    } else {
      setCount(0);
    }
  }
  return (
    <div>
      <h1>React useState Mastery 🚀</h1>
      <p>Counter app</p>
      <div className="counter-value">{count}</div>
      <CounterButton label="−" onClick={() => handleCounter("decrement")} />
      <CounterButton label="Reset" onClick={() => handleCounter("reset")} />
      <CounterButton label="+" onClick={() => handleCounter("increment")} />
    </div>
  );
}

export default Counter;

function CounterButton({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
