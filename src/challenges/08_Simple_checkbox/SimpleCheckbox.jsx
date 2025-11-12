import React, { useState } from "react";
import "./SimpleCheckbox.css";

function SimpleCheckbox() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id="newsletter"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="newsletter">Subscribe to newsletter</label>

      <p className="status">
        {isChecked ? "✅ Subscribed" : "❌ Not subscribed"}
      </p>
    </div>
  );
}

export default SimpleCheckbox;
