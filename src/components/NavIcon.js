import React from "react";
// TODO: Let's ~not~ import all the icons
import * as ReactIcons from "react-icons/io5";
import "../styles/components/NavIcon.scss";

export const NavIcon = ({ icon }) => {
  const ioIcon = ReactIcons[icon];

  return React.createElement(ioIcon);
};
