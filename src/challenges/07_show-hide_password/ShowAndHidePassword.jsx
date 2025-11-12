import React, { useState } from "react";
import "./ShowAndHidePassword.css";

function ShowAndHidePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleUserInput = (e) => setInputValue(e.target.value);
  const handleToggleClick = () => {
    if (inputValue.trim() === "") {
      // only alert on user action
      window.alert("Please enter a password first.");
      return;
    }
    setShowPassword((prev) => !prev);
  };

  //   const isDisabled = inputValue.trim() === "";

  return (
    <div className="password-container">
      <h1 className="password-title">React useState Mastery 🚀</h1>
      <p className="password-sub">Show / Hide Password Field 👇</p>

      <div className="password-field">
        {/* if (!inputValue) {alert("")} */}
        <input
          type={showPassword ? "text" : "password"}
          className="password-input"
          placeholder="Enter your password"
          value={inputValue}
          onChange={handleUserInput}
        />

        <button
          type="button"
          onClick={handleToggleClick}
          className="toggle-btn"
          //   disabled={isDisabled}
          aria-label={showPassword ? "Hide password" : "Show password"}
          //   title={isDisabled ? "Enter a password to show/hide" : ""}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default ShowAndHidePassword;
