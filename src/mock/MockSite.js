import React from "react";
import { NavContext } from "../context/navContext";
import "./MockSite.scss";

export const MockSite = () => {
  const [state] = React.useContext(NavContext);

  return (
    <section className={`mock ${state.navOpen ? "open" : "closed"}`}>
      <header>
        <div className="mock-small"></div>
      </header>
      <main>
        <div className="mock-full"></div>
        <div className="mock-full"></div>
      </main>
      <article>
        <div className="mock-half"></div>
      </article>
      <footer>
        <div className="mock-full"></div>
      </footer>
    </section>
  );
};
