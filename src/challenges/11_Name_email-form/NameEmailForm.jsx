import React, { useState } from "react";
import "./NameEmailForm.css";

function NameEmailForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); // stop the browser from reloading the page
    // simple validation example
    if (!userName.trim() || !userEmail.trim()) {
      window.alert("Please fill in name and email.");
      return;
    }
    // here you could send data to a server...
    setSubmitted(true);
    window.alert(`Form submitted: ${userName}, ${userEmail}`);
    // optionally reset fields:
    setUserName("");
    setUserEmail("");
  }

  return (
    <div className="form-container">
      <h2>React useState Mastery — Name & Email Form</h2>

      <form className="user-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Username</label>
        <input
          id="name"
          name="userName"
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="userEmail"
          type="email"
          placeholder="Enter your email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>

      <div className="live-preview">
        <h3>Live preview</h3>
        <p>
          <strong>Name:</strong> {userName || <span className="muted">—</span>}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {userEmail || <span className="muted">—</span>}
        </p>
        {submitted && <p className="success">Form submitted successfully ✅</p>}
      </div>
    </div>
  );
}

export default NameEmailForm;
