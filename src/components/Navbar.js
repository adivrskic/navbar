import React from "react";
import { NavHeader } from "./NavHeader";
import { NavItems } from "./NavItems";
import { NavFooter } from "./NavFooter";
import { NavContext } from "../context/navContext";
import "../styles/components/Navbar.scss";

export const Navbar = () => {
  const [state] = React.useContext(NavContext);

  return (
    <section className={`nav ${state.navOpen && "open"}`}>
      <NavHeader />
      <NavItems />
      <NavFooter />
    </section>
  );
};
