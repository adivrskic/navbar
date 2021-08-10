import React from "react";
import "./NavHeader.scss";

export const NavHeader = () => {
  const toggleNavExtend = () => {
    console.log("haha");
  };

  return (
    <div className="nav-header-container" onClick={() => toggleNavExtend()}>
      <div className="nav-header"></div>
    </div>
  );
};
