import React from "react";
import { NavContext } from "../context/navContext";
import data from "../data/profile.json";
import "../styles/components/NavFooter.scss";

export const NavFooter = () => {
  const [state] = React.useContext(NavContext);

  return (
    <div className="nav-footer">
      <div className={`nav-footer__icon ${state.navOpen && "open"}`}></div>
      <span className="nav-footer__text">{data.userName}</span>
    </div>
  );
};
