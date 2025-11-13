import React, { useState } from "react";
import "./DropdownSelect.css";

function DropdownSelect() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="dropdown-container">
      <h2 className="dropdown-title">Select your favorite fruit</h2>

      <select
        className="dropdown"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">-- Select a fruit --</option>
        <option value="apple">Apple</option>
        <option value="mango">Mango</option>
        <option value="orange">Orange</option>
        <option value="banana">Banana</option>
      </select>

      <p className="selected-value">
        You selected: <strong>{selectedOption || "None"}</strong>
      </p>
    </div>
  );
}

export default DropdownSelect;
