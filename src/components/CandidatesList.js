import React, { useState } from "react";
import "../styles/CandidatesList.css";
import UserDetailsForm from "./UserDetailsForm";
import SuccessMessage from "./SuccessMessage";
import CandidateDetails from "./CandidateDetails";
import candidates from "../data/candidates";

function CandidatesList({ election, onBackClick }) {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showCandidateDetails, setShowCandidateDetails] = useState(false);

  const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
    setShowDetailsForm(true);
  };

  const handleVoteSuccess = () => {
    setShowDetailsForm(false);
    setShowSuccessMessage(true);
  };

  const handleViewDetailsClick = (candidate) => {
    setSelectedCandidate(candidate);
    setShowCandidateDetails(true);

    // Add a CSS class to the election div to make it full-screen
    const electionDiv = document.querySelector(".election-details");
    if (electionDiv) {
      electionDiv.classList.add("full-screen");
    }
  };

  return (
    <div className="candidates-list">
      <h2>Candidates for {election.title}</h2>
      {showDetailsForm ? (
        <UserDetailsForm
          candidate={selectedCandidate}
          onVoteSuccess={handleVoteSuccess}
        />
      ) : showSuccessMessage ? (
        <SuccessMessage />
      ) : showCandidateDetails ? (
        <CandidateDetails
          candidate={selectedCandidate}
          onBackClick={() => {
            setShowCandidateDetails(false);
            
            // Remove the full-screen CSS class when going back to candidates
            const electionDiv = document.querySelector(".election-details");
            if (electionDiv) {
              electionDiv.classList.remove("full-screen");
            }
          }}
        />
      ) : (
        <>
          <ul>
            {candidates
              .filter((candidate) => candidate.electionId === election.id)
              .map((candidate) => (
                <li key={candidate.id}>
                  {candidate.name} - {candidate.votes} votes
                  <button onClick={() => handleCandidateClick(candidate)}>
                    {candidate.votes === 0 ? "Vote" : "Voted"}
                  </button>
                  <button onClick={() => handleViewDetailsClick(candidate)}>
                    View Details
                  </button>
                </li>
              ))}
          </ul>
          <button onClick={onBackClick}>Back to Election</button>
        </>
      )}
    </div>
  );
}

export default CandidatesList;
