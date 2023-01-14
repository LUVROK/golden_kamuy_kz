import React, { useState } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { OPEN, CLOSE } from "../../actions";
import $ from "jquery";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const mapStateToProps = (state: any) => {
  return { openProfile: state.openProfile };
};

const mapDispatchToProps = {
  OPEN,
  CLOSE,
};

const Nav = (props: any) => {
  const [click, setClick] = useState<Boolean>(false);
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id: any) => {
    let elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: "0",
      duration: "500",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <nav className="header" data-scroll data-scroll-sticky data-scroll-target="#page">
      <div className="navbar-logo">
        <span className="navbar-logo__span navbar-logo__span_hidden">GOLDEN KAMUY</span>
      </div>
      <div className="navbar-links">
        <div className="navbar-links__link">
          <span
            onClick={() => {
              handleScroll("#Wrapper");
              props.OPEN();
            }}
          >
            my portfolio
          </span>
        </div>
        <div className="navbar-links__link navbar__mobile-hidden">
          <span
            onClick={() => {
              props.CLOSE();
            }}
          >
            roadmap
          </span>
        </div>
        <div className="navbar-links__link navbar__mobile-hidden">
          <span>watch anime</span>
        </div>
        <div className="navbar-links__link navbar__mobile-hidden">
          <span>contacts</span>
        </div>
      </div>
    </nav>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
