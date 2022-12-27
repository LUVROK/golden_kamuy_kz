import "./Wrapper.scss";
import { useState, useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

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
    // const Coint = useSelector((state: State) => state.count);
    // console.log(count);
  };

  return (
    <div className="Wrapper">
      <div className="background" data-scroll data-scroll-sticky data-scroll-target="#App">
        <div className="watchBtn" onClick={() => HandleScroll("#MainContent")} data-scroll data-scroll-speed="20">
          WATCH SERIES
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
