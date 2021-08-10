import React from "react";
import { NavHeader } from "./NavHeader";
import { NavItems } from "./NavItems";
import { NavFooter } from "./NavFooter";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <section className="nav">
      <NavHeader />
      <NavItems />
      <NavFooter />
    </section>
  );
};
