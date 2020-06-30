import React from "react";
import FeatureToggle from "../components/FeatureToggle";

const User = props => {
  return (
    <FeatureToggle flagKey={"USER"} fallback={() => null}>
      <p>user details</p>
    </FeatureToggle>
  );
};

export default User;

// components
// route
