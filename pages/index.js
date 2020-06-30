import React, { useState } from "react";
import FeatureToggle from "./../components/FeatureToggle";
import Feature from "./../modules/Feature";
import useFeatureToggle from "./../hooks/useFeatureToggle";
import UserDetails from "../modules/UserDetails";

export default function App() {
  const [state, dispatch] = useFeatureToggle();

  const toggleFeature = flagKey => {
    dispatch({
      type: "FEATURE_TOGGLE",
      payload: { flagKey }
    });
  };

  return (
    <div className="App">
      <h1>Admin</h1>
      <button onClick={() => toggleFeature("SIGN_UP_BUTTON")}>
        Toggle Signup
      </button>
      <button onClick={() => toggleFeature("USER_DETAILS")}>
        Toggle UserDetails
      </button>
      <hr />
      <h1>Client</h1>
      <FeatureToggle flagKey="SIGN_UP_BUTTON" fallback={() => <p>fallback</p>}>
        <Feature />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, non
          itaque cumque
        </p>
      </FeatureToggle>
      <FeatureToggle flagKey="USER_DETAILS" fallback={() => null}>
        <UserDetails />
      </FeatureToggle>
    </div>
  );
}
