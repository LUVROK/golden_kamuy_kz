import "./MainContent.scss";
import Auth from "../Auth/Auth";
import VideoContent from "../VideoContent/VideoContent";
import { connect } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";

const mapStateToProps = (state: any) => {
  return { counter: state.counter, User: state.User };
};

const MainContent = (props: any) => {
  const logout = () => {
    // window.open("http://localhost:5000/auth/logout", "_self");
  };

  const item = {
    active: {
      opacity: 0,
    },
    inactive: {
      opacity: 1,
    },
  };

  const container = {
    active: {
      opacity: 0,
    },
    inactive: {
      opacity: 1,
      transition: {
        delayChildren: 1.25,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.div className="MainContent" id="MainContent" variants={container} initial="active" animate="inactive">
      {props.counter
        ? // <div className="logout" onClick={logout}>
          //   LOG OUT
          // </div>
          null
        : null}
      {/* <div className="mixBlendBack"></div> */}
      <div className="cicada" data-scroll data-scroll-speed="15"></div>
      <div className="gold1block">
        <div className="gold1"></div>
      </div>
      <div className="gold2block">
        <div className="gold2"></div>
      </div>
      <motion.div className="content" variants={item}>
        {!props.counter ? <Auth /> : <VideoContent />}
      </motion.div>
    </motion.div>
  );
};

export default connect(mapStateToProps)(MainContent);
