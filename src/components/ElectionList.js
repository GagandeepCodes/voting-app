import React from "react";
import ElectionCard from "./ElectionCard";
import elections from "../data/data";

function ElectionList() {
  return (
    <div className="election-list">
      {elections.map((election) => (
        <ElectionCard key={election.id} election={election} />
      ))}
    </div>
  );
}

export default ElectionList;
