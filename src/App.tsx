import "locomotive-scroll/dist/locomotive-scroll.css";

import "./App.scss";
import Wrapper from "./components/Wrapper/Wrapper";
import MainContent from "./components/MainContent/MainContent";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Snowflake } from "./utils";
import "./fonts/fonts.css";
import { Gmail, Facebook, Google, Github, nulla, user } from "./actions";
import { connect } from "react-redux";
import Nav from "./components/nav/nav";
import Soon from "./components/SOON/soon";
import { motion } from "framer-motion";

const mapStateToProps = (state: any) => {
  return { counter: state.counter, User: state.User, openProfile: state.openProfile };
};

const mapDispatchToProps = {
  Gmail,
  Facebook,
  Google,
  Github,
  nulla,
  user,
};

function App(props: any) {
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [user, setUser] = useState(null);
  const [activeSoon, setActiveSoon] = useState(false);

  useEffect(() => {
    const getUser = () => {
      fetch("https://goldenkamuy.kz/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject.user);
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    // getUser();
  }, []);

  useEffect(() => {
    if (props.openProfile) {
      props.openProfile === "OPEN" ? animationOpenProfileStart() : animationCloseProfileStart();
    }
  }, [props.openProfile]);

  function animationOpenProfileStart() {
    setTimeout(() => {
      (document.querySelector(".MainContent") as HTMLElement).style.pointerEvents = "none";
      (document.querySelector(".Wrapper") as HTMLElement).style.pointerEvents = "none";
      (document.querySelector(".header") as HTMLElement).style.pointerEvents = "none";

      (document.querySelector(".MainContent") as HTMLElement).style.opacity = "0";
      (document.querySelector(".Wrapper") as HTMLElement).style.opacity = "0";
      (document.querySelector(".header") as HTMLElement).style.opacity = "0";

      setTimeout(() => {
        setActiveSoon(!activeSoon);
      }, 1000);
    }, 500);
  }

  function animationCloseProfileStart() {
    console.log(props.openProfile);
    setActiveSoon(!activeSoon);
  }

  useEffect(() => {
    if (user) {
      props.user(user);
    } else {
      props.nulla();
    }
  }, [user]);

  useEffect(() => {
    switch (props.User.provider) {
      case "google":
        props.Google();
        break;
      case "github":
        props.Github();
        break;
      case "facebook":
        props.Facebook();
        break;
      default:
        break;
    }
  }, [props.User]);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const snowflakes: Snowflake[] = [];
    for (let i = 0; i < 750; i++) {
      snowflakes.push(new Snowflake());
    }
    for (let i = 0; i < snowflakes.length; i++) {
      snowflakes[i].init();
    }
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].update();
        snowflakes[i].draw(ctx);
      }
    };
    animate();
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        InertiaPlugin: 0.55,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div
        className="page"
        id="page"
        data-scroll-container
        ref={containerRef}
        style={{
          backgroundColor: "#20193f",
        }}
      >
        {/* <div className="pulse"></div> */}
        <canvas ref={canvasRef} className="snow-canvas" data-scroll data-scroll-sticky data-scroll-target="#page" style={{ opacity: "1" }} />
        <ScrollTriggerProxy />
        <div className="cursor-custom" data-scroll data-scroll-sticky data-scroll-target="#page">
          <canvas className="cursor-custom__canvas" id="cursor-custom__canvas"></canvas>
        </div>
        {/* {Loaded ? null : <Loader />} */}
        {activeSoon ? (
          <Soon />
        ) : (
          <>
            <Nav />
            <Wrapper />
            <MainContent />
          </>
        )}
        {/* <img src={background_img} alt="" className="background_img" /> */}
      </div>
    </LocomotiveScrollProvider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
