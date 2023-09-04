import React from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "flex-end", 
  paddingRight: "250px", 
  marginTop: "20px",
};

function PostButton() {
  return (
    <div style={containerStyle}>
      <button>Post</button>
    </div>
  );
}

export default PostButton;

