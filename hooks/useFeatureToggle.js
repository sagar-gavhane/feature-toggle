import React, { useReducer } from "react";
import flags from "./../config/flags.config";

const useFeatureToggle = () => {
  const initialState = { flags };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FEATURE_TOGGLE":
        const { flagKey } = action.payload;

        const flags = state.flags.map(flag => {
          if (flag.flagKey === flagKey) {
            flag.status = flag.status === "ON" ? "OFF" : "ON";
          }
          return flag;
        });

        return {
          ...state,
          flags
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};

export default useFeatureToggle;
