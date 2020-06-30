import React from "react";
import useFeatureToggle from "./../hooks/useFeatureToggle";

const FeatureToggle = props => {
  const { flagKey, fallback: Fallback, children } = props;
  const [state] = useFeatureToggle();

  const flag = state.flags.find(o => o.flagKey === flagKey);

  return flag.status === "ON" ? children : <Fallback />;
};

export default FeatureToggle;
