import "./Wrapper.scss";
import { useState, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import Man from "../../images/man.png";
import backgroundBlur from "../../images/backgroundBlur.png";
import Block_About from "./block_About/block_About";

type State = {
  message: string;
};

const Wrapper = () => {
  const [click, setClick] = useState<Boolean>(false);
  const { scroll } = useLocomotiveScroll();

  const countSelector = createSelector(
    (state: State) => state.message,
    (message) => message
  );
  const count = useSelector(countSelector);

  const HandleScroll = async (id: any) => {
    let elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: "0",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  useEffect(() => {
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutationRecord) {
        var rect = (document.getElementById("watchBtn") as HTMLElement).getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.675 && rect.top > window.innerHeight * 0.45) {
          (document.querySelector(".watchBtn") as any).style.opacity = 0.5;
        } else if (rect.top <= window.innerHeight * 0.45 && rect.top > window.innerHeight * 0.325) {
          (document.querySelector(".watchBtn") as any).style.opacity = 0.25;
        } else if (rect.top <= window.innerHeight * 0.325) {
          (document.querySelector(".watchBtn") as any).style.opacity = 0;
        } else {
          (document.querySelector(".watchBtn") as any).style.opacity = 1;
        }
      });
    });

    var target = document.getElementById("watchBtn");
    observer.observe(target as any, { attributes: true, attributeFilter: ["style"] });
  }, []);

  return (
    <div className="Wrapper" id="Wrapper">
      <Block_About />
      <div className="background" data-scroll data-scroll-sticky data-scroll-target="#App">
        <div className="watchBtn" id="watchBtn" style={{ opacity: 1 }} onClick={() => HandleScroll("#MainContent")} data-scroll data-scroll-position="top" data-scroll-speed="20">
          WATCH SERIES
        </div>
      </div>
      <div className="Manimg" data-scroll data-scroll-sticky data-scroll-target="#App">
        <img src={Man} alt="" className="Man_Cool_He_is_right" data-scroll data-scroll-speed="-7" data-scroll-position="left" data-scroll-direction="horizontal" />
      </div>
      <div className="backgroundBlur" data-scroll data-scroll-sticky data-scroll-target="#App">
        <img src={backgroundBlur} alt="" className="backgroundBlur_Cool_He_is_right" />
      </div>
    </div>
  );
};

export default Wrapper;
