import React, { useState } from "react";
import "./MirrorAnInputImage.css";

function MirrorAnInputLive() {
  const [userInputText, setUserInputText] = useState("");

  function handleUserInput(e) {
    setUserInputText(e.target.value);
  }

  function clearInput() {
    setUserInputText("");
  }

  return (
    <div className="mirror-container">
      <h1 className="mirror-title">React useState Mastery 🚀</h1>
      <p className="mirror-sub">Type something below 👇</p>

      <div className="input-row">
        <label htmlFor="mirrorInput" className="visually-hidden">
          Type here
        </label>
        <input
          id="mirrorInput"
          className="mirror-input"
          type="text"
          placeholder="Start typing..."
          value={userInputText}
          onChange={handleUserInput}
        />
        <button
          type="button"
          className="clear-button"
          onClick={clearInput}
          aria-label="Clear input"
        >
          Clear
        </button>
      </div>

      <p className="mirror-output" aria-live="polite">
        {userInputText ? `You typed: ${userInputText}` : "Nothing typed yet"}
      </p>
    </div>
  );
}

export default MirrorAnInputLive;
