import React, { useState } from "react";
import "./RadioGroup.css";

function RadioGroup() {
  const [selectedFruit, setSelectedFruit] = useState(""); // explicit initial state
  const fruits = ["apple", "banana", "mango", "orange"];

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  return (
    <div className="radio-container">
      <h2 className="radio-title">Select your favorite fruit</h2>

      <div className="radio-list">
        {fruits.map((fruit) => (
          <label key={fruit} className="radio-item">
            <input
              type="radio"
              name="fruit"
              value={fruit}
              checked={selectedFruit === fruit}
              onChange={handleChange}
              className="radio-input"
            />
            <span className="radio-text">{fruit}</span>
          </label>
        ))}
      </div>

      <p className="selected">
        You selected: <strong>{selectedFruit || "None"}</strong>
      </p>
    </div>
  );
}

export default RadioGroup;
