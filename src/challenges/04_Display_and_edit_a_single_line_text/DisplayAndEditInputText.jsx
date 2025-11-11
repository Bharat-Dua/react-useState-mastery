import React, { useState } from "react";
import "./DisplayAndEditInputText.css";

function DisplayAndEditInputText() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="dei-container">
      <h1 className="dei-title">React useState Mastery 🚀</h1>
      <p className="dei-sub">Type something 👇</p>

      <div className="dei-input-row">
        <label htmlFor="dei-input" className="sr-only">
          Type text
        </label>
        <input
          id="dei-input"
          type="text"
          value={inputText}
          placeholder="Start typing..."
          onChange={(e) => setInputText(e.target.value)}
          className="dei-input"
        />

        {/* Clear button only visible when there's content */}
        {inputText && (
          <button
            type="button"
            className="dei-clear-btn"
            onClick={() => setInputText("")}
            aria-label="Clear text"
          >
            Clear
          </button>
        )}
      </div>

      <div className="dei-output">
        {inputText ? (
          <p>
            <strong>Current text:</strong>{" "}
            <span className="dei-text">{inputText}</span>
          </p>
        ) : (
          <p className="dei-muted">Nothing typed yet</p>
        )}
      </div>
    </div>
  );
}

export default DisplayAndEditInputText;
