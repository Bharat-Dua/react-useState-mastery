import React, { useState } from "react";

import "./ToggleButton.css";
// Goal: Build a single React component that toggles between ON and OFF when clicked, using the useState hook.

function ToggleButton() {
  const [buttonState, setButtonState] = useState(false);

  function toggleButton() {
    setButtonState((prev) => !prev);
  }

  return (
    <div>
      <h1>React useState Mastery 🚀</h1>
      <p>Toggle button : </p>
      <button onClick={toggleButton} className={buttonState ? "on" : "off"}>
        {buttonState ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ToggleButton;
