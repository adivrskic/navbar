import React from "react";
import navData from "../data/navData.json";
import { NavIcon } from "./NavIcon";
import { getNavIcons } from "../utils/helpers";
import "../styles/components/NavItems.scss";

export const NavItems = () => {
  const navIcons = getNavIcons();

  return (
    <nav className="nav-items">
      <ul>
        {navData.map((item, index) => (
          <li key={item.key} className="nav-item">
            <NavIcon icon={navIcons[index]} />
            <span className="nav-item__text">{item.name}</span>
            <span className="nav-item__hover">{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
