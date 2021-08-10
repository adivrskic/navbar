import React from "react";
import { reducer, initialState } from "./navReducer";

export const NavContext = React.createContext({
  state: initialState,
  dispatch: () => null,
});

export const NavProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <NavContext.Provider value={[state, dispatch]}>
      {children}
    </NavContext.Provider>
  );
};
