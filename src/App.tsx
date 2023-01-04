import "locomotive-scroll/dist/locomotive-scroll.css";

import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import MainContent from "./components/MainContent/MainContent";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import { useRef, useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import background_img from "./images/background.jpg";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Snowflake } from "./utils";
import "./fonts/fonts.css";
import { Gmail, Facebook, Google, Github, nulla, user } from "./actions";
import { connect } from "react-redux";
import $ from "jquery";
import Nav from "./components/nav/nav";

const mapStateToProps = (state: any) => {
  return { counter: state.counter, User: state.User };
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

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
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
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

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

    // document.body.addEventListener("scroll", function () {
    //   console.log(snowflakes);
    //   for (let i = 0; i < snowflakes.length; i++) {
    //     snowflakes[i].speed = snowflakes[i].speed * 5;
    //     // snowflakes[i].draw(ctx);
    //   }
    // });

    // $("html").mousemove(function (e) {
    //   let xpos = e.pageX;
    //   let ypos = e.pageY;

    //   $("body").addClass("go");

    //   var position = {
    //     left: xpos,
    //     top: ypos,
    //   };

    //   $(".pulse").css(position);
    // });
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
      <div className="App" id="App" data-scroll-container ref={containerRef}>
        {/* <div className="pulse"></div> */}
        <canvas ref={canvasRef} className="canvasSnow" data-scroll data-scroll-sticky data-scroll-target="#App" />
        {Loaded ? null : <Loader />}
        <Nav />
        <ScrollTriggerProxy />
        <Wrapper />
        <MainContent />
        {/* <img src={background_img} alt="" className="background_img" /> */}
      </div>
    </LocomotiveScrollProvider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
