import React from "react";
import { NavContext } from "../context/navContext";
import { NavIcon } from "./NavIcon";
import data from "../data/profile.json";
import "../styles/components/NavFooter.scss";

export const NavFooter = () => {
  const [state] = React.useContext(NavContext);

  return (
    <div className="nav-footer">
      <NavIcon icon="IoFingerPrintOutline" />
      <span className={`nav-footer__text ${state.navOpen && "open"}`}>
        {data.userName}
      </span>
    </div>
  );
};
