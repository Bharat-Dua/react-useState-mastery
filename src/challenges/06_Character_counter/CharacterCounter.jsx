import React, { useState } from "react";
import "./CharacterCounter.css";

function CharacterCounter() {
  const MAX_CHARS = 50;
  const [userInput, setUserInput] = useState("");

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  const remaining = MAX_CHARS - userInput.length;
  const isAtLimit = remaining <= 0;
  const isNearLimit = remaining <= 10 && remaining > 0; // for visual cue

  return (
    <div className="counter-container">
      <h1 className="counter-title">React useState Mastery 🚀</h1>
      <p className="counter-sub">
        Type something below (max {MAX_CHARS} chars):
      </p>

      <textarea
        className="counter-textarea"
        value={userInput}
        onChange={handleUserInput}
        placeholder="Enter your text..."
        maxLength={MAX_CHARS}
        rows={4}
      />

      <div className="counter-info">
        <span
          className={`remaining-count ${
            isAtLimit ? "limit" : isNearLimit ? "warning" : ""
          }`}
        >
          Remaining: {remaining >= 0 ? remaining : 0} / {MAX_CHARS}
        </span>
      </div>

      <div className="typed-output" aria-live="polite">
        {userInput ? <p>You typed: {userInput}</p> : <p>Nothing typed yet</p>}
        {isAtLimit && (
          <p className="limit-text">You've reached the max char limit.</p>
        )}
      </div>
    </div>
  );
}

export default CharacterCounter;
