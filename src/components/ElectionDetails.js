import React, { useState } from "react";
import "../styles/ElectionDetails.css";
import CandidatesList from "./CandidatesList";
import UserDetailsForm from "./UserDetailsForm";
import SuccessMessage from "./SuccessMessage";

function ElectionDetails({ election }) {
  const [showCandidates, setShowCandidates] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCandidatesClick = () => {
    setShowCandidates(true);
  };

  const handleBackToElectionClick = () => {
    setShowCandidates(false);
    setShowForm(false);
  };

  const handleVoteClick = () => {
    setShowForm(true);
  };

  const handleVoteSuccess = () => {
    setShowForm(false);
    setShowSuccess(true);
  };

  return (
    <div className={`election-details ${election.status}`}>
      <h2>{election.title}</h2>
      <p>{election.description}</p>
      <p>Status: {election.status}</p>
      {showCandidates ? (
        <CandidatesList
          election={election}
          onBackClick={handleBackToElectionClick}
        />
      ) : showForm ? (
        <UserDetailsForm onVoteSuccess={handleVoteSuccess} />
      ) : showSuccess ? (
        <SuccessMessage />
      ) : (
        <button onClick={handleCandidatesClick}>View Candidates</button>
      )}
    </div>
  );
}

export default ElectionDetails;
