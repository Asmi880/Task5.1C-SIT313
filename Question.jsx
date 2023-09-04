import React from "react";
import Title from "./Title";
import Problem from "./Problem";

function Question() {
  const containerStyle = {
    display: "block",
    flexDirection: "rows",
    alignItems: "left", 
    

  };

  return (
    <div style={containerStyle}>
      <Title
        heading="Title: "
        placeholder="Start your question with how, what, why, etc"
      />
      <Problem
        heading="Describe your problem: "
        rows="15"
      />
      <Title
        heading="Tags: "
        placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
      />
    </div>
  );
}

export default Question;
