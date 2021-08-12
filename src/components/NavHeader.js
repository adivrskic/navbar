import React from "react";
import { NavContext } from "../context/navContext";
import { NavIcon } from "./NavIcon";
import "../styles/components/NavHeader.scss";

export const NavHeader = () => {
  const [state, dispatch] = React.useContext(NavContext);

  const toggleNavExtend = () => {
    dispatch({ type: "TOGGLE_NAV" });
  };

  return (
    <div className="nav-header-container" onClick={() => toggleNavExtend()}>
      {state.navOpen ? (
        <NavIcon icon="IoCloseOutline" />
      ) : (
        <NavIcon icon="IoMenuOutline" />
      )}
    </div>
  );
};
