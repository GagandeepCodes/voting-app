import React, { useState } from "react";
import "../styles/UserDetailsForm.css";

function UserDetailsForm({ candidate, onVoteSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hasVoted, setHasVoted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the user has already voted
    if (hasVoted) {
      alert("You have already voted for this election.");
      return;
    }

    // Simulate submitting the vote
    // In a real application, you would send this data to a server
    // Here, we're updating the candidate's votes locally
    // You should handle this more securely in a production app
    candidate.votes += 1;
    setHasVoted(true);

    // Trigger the onVoteSuccess callback to show a "Thank you" message
    onVoteSuccess();
  };

  return (
    <form className="user-details-form" onSubmit={handleSubmit}>
      <h3>Provide Your Details</h3>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit" disabled={hasVoted}>
        {hasVoted ? "Voted" : "Vote"}
      </button>
    </form>
  );
}

export default UserDetailsForm;
