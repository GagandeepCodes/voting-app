import React from "react";
import "../styles/CandidateDetails.css";

function CandidateDetails({ candidate, onBackClick }) {
  return (
    <div className="candidate-details">
      <h2>{candidate.name}</h2>
      <img src={candidate.photo} alt={`${candidate.name}`} />
      {/* Add more candidate details as needed */}
      <button onClick={onBackClick}>Back to Candidates</button>
    </div>
  );
}

export default CandidateDetails;
