import "./Wrapper.scss";
import { useState, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Man from "../../images/man.png";
import backgroundBlur from "../../images/backgroundBlur.png";
import Block_About from "./block_About/block_About";

const Wrapper = () => {
  const [click, setClick] = useState<Boolean>(false);
  const { scroll } = useLocomotiveScroll();

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
        var rect = (document.getElementById("background__button") as HTMLElement).getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.675 && rect.top > window.innerHeight * 0.45) {
          (document.querySelector(".background__button") as any).style.opacity = 0.5;
        } else if (rect.top <= window.innerHeight * 0.45 && rect.top > window.innerHeight * 0.325) {
          (document.querySelector(".background__button") as any).style.opacity = 0.25;
        } else if (rect.top <= window.innerHeight * 0.325) {
          (document.querySelector(".background__button") as any).style.opacity = 0;
        } else {
          (document.querySelector(".background__button") as any).style.opacity = 1;
        }
      });
    });

    var target = document.getElementById("background__button");
    observer.observe(target as any, { attributes: true, attributeFilter: ["style"] });
  }, []);

  return (
    <div className="Wrapper" id="Wrapper">
      <Block_About />
      <div className="background" data-scroll data-scroll-sticky data-scroll-target="#page">
        <div className="background__button" id="background__button" style={{ opacity: 1 }} onClick={() => HandleScroll("#MainContent")} data-scroll data-scroll-position="top" data-scroll-speed="20">
          WATCH SERIES
        </div>
      </div>
      <div className="ManImg" data-scroll data-scroll-sticky data-scroll-target="#page">
        <img src={Man} alt="" className="Man_Cool_He_is_right" data-scroll data-scroll-speed="-7" data-scroll-position="left" data-scroll-direction="horizontal" />
      </div>
      <div className="background-blur" data-scroll data-scroll-sticky data-scroll-target="#page">
        <img src={backgroundBlur} alt="" className="background-blur__img" />
      </div>
    </div>
  );
};

export default Wrapper;
