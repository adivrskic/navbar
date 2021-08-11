import React from "react";
import { NavContext } from "../context/navContext";
import "../styles/components/NavHeader.scss";

export const NavHeader = () => {
  const [state, dispatch] = React.useContext(NavContext);

  const toggleNavExtend = () => {
    dispatch({ type: "TOGGLE_NAV" });
  };

  return (
    <div className="nav-header-container" onClick={() => toggleNavExtend()}>
      <div className={`nav-header ${state.navOpen ? "open" : "closed"}`}></div>
    </div>
  );
};
