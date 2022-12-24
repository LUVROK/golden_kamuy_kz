import "locomotive-scroll/dist/locomotive-scroll.css";

import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import MainContent from "./components/MainContent/MainContent";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  const containerRef = useRef(null);

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
        <ScrollTriggerProxy />
        <Wrapper />
        <MainContent />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
