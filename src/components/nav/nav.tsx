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
  const MY_PROFILE = () => {};
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
    <nav className="navbar" data-scroll data-scroll-sticky data-scroll-target="#App">
      <div className="right_navbar">
        <span>GOLDEN KAMUY</span>
      </div>
      <div className="left_navbar">
        <div className="my_portfolio-navbar">
          <span
            onClick={() => {
              props.OPEN();
              handleScroll("#Wrapper");
            }}
          >
            my portfolio
          </span>
        </div>
        <div className="roadmap-navbar">
          <span
            onClick={() => {
              props.CLOSE();
            }}
          >
            roadmap
          </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
