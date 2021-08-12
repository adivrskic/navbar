import React from "react";
import { NavContext } from "../context/navContext";
import "./MockSite.scss";

export const MockSite = () => {
  const [state] = React.useContext(NavContext);

  return (
    <section className={`mock ${state.navOpen ? "open" : "closed"}`}>
      <div className="mock-grid">
        <header></header>
        <main></main>
        <article></article>
        <footer></footer>
      </div>
    </section>
  );
};
