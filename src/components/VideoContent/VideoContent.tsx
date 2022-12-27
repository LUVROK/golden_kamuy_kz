import React, { useState, useEffect, useRef, RefObject } from "react";
import { golden_kamuy } from "../../utils";
import { _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, s_1, s_2, s_3, s_4 } from "../../actions";
import { connect } from "react-redux";
import "./VideoContent.scss";
// import VideoJS from "./video";

const mapStateToProps = (state: any) => {
  return { actionVideo: state.actionVideo, season: state.season };
};

const mapDispatchToProps = {
  _1,
  _2,
  _3,
  _4,
  _5,
  _6,
  _7,
  _8,
  _9,
  _10,
  _11,
  _12,
  s_1,
  s_2,
  s_3,
  s_4,
};

const s1_keys = {
  active: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  inactive: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
};

const className: string = "my-class";

const VideoContent = (props: any) => {
  const [activeVideo, setActiveVideo] = useState<string>("_1");
  const [activeSeason, setActiveSeason] = useState<string>("s_1");
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // you can handle player events here
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  const massPropsFuncs = {
    _1: () => props._1(),
    _2: () => props._2(),
    _3: () => props._3(),
    _4: () => props._4(),
    _5: () => props._5(),
    _6: () => props._6(),
    _7: () => props._7(),
    _8: () => props._8(),
    _9: () => props._9(),
    _10: () => props._10(),
    _11: () => props._11(),
    _12: () => props._12(),
  };

  const massPropsFuncsSeason = {
    s_1: () => props.s_1(),
    s_2: () => props.s_2(),
    s_3: () => props.s_3(),
    s_4: () => props.s_4(),
  };

  const changeActiveVideo = (value: string, i: number) => {
    Object.values(massPropsFuncs)[i]();
    setActiveVideo(value);
  };

  const changeActiveSeason = (value: string, i: number) => {
    Object.values(massPropsFuncsSeason)[i]();
    setActiveSeason(value);
  };

  let videoSourse = [
    {
      src: String(golden_kamuy[activeSeason][activeVideo]),
      type: "video/mp4",
      label: "480",
    },
    {
      src: String(golden_kamuy[activeSeason][activeVideo]),
      type: "video/mp4",
      label: "720",
    },
  ];

  return (
    <div className="VideoContent">
      <div className="seasonChoose">
        {Object.keys(golden_kamuy).map((key, i) => (
          <div
            key={key}
            className={"s1_keys s1_keys_season"}
            style={activeSeason === key ? s1_keys.active : s1_keys.inactive}
            onClick={() => {
              changeActiveSeason(key, i);
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
      {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} sources={videoSourse} /> */}
      <video width="750" height="500" id="movie" src={String(golden_kamuy[activeSeason][activeVideo])} controls loop />
      <div className="seriesChoose">
        {Object.keys(golden_kamuy[activeSeason]).map((key, i) => (
          <div
            key={key}
            className={"s1_keys"}
            style={activeVideo === key ? s1_keys.active : s1_keys.inactive}
            onClick={() => {
              changeActiveVideo(key, i);
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoContent);
