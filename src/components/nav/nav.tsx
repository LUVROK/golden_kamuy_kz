import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="navbar" data-scroll data-scroll-sticky data-scroll-target="#App">
      <div className="right_navbar">GOLDEN KAMUY</div>
      <div className="left_navbar">
        <div className="my_portfolio-navbar">
          <span>my portfolio</span>
        </div>
        <div className="roadmap-navbar">
          <span>roadmap</span>
        </div>
        <div className="watch_anime">
          <span>watch anime</span>
        </div>
        <div className="contacts">
          <span>contacts</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
