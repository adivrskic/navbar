import React from "react";
import data from "../data/profile.json";
import "./NavFooter.scss";

export const NavFooter = () => {
  return <div className="nav-footer">{data.userName}</div>;
};
