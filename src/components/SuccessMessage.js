import React from "react";
import "../styles/SuccessMessage.css";

function SuccessMessage() {
  return (
    <div className="success-message">
      <h3>Thank You for Voting!</h3>
      <p>Your vote has been successfully submitted.</p>
    </div>
  );
}

export default SuccessMessage;
