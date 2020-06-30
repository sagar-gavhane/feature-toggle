import React from "react";

const Feature = props => {
  const style = {
    border: "2px solid",
    padding: "1rem"
  };
  return (
    <div style={style}>
      <h3>Feature</h3>
      <p>This is my feature</p>
      <button>SignUp</button>
    </div>
  );
};

export default Feature;
