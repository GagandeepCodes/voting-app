import React from "react";
import ElectionDetails from "./ElectionDetails";
import "../styles/ElectionCard.css";

function ElectionCard({ election }) {
  return (
    <div className={`election-card ${election.status}`}>
      <ElectionDetails election={election} />
    </div>
  );
}

export default ElectionCard;
