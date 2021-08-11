import React from "react";
import data from "../data/profile.json";
import "../styles/components/NavFooter.scss";

export const NavFooter = () => {
  return <div className="nav-footer">{data.userName}</div>;
};
