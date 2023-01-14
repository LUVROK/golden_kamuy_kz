import "./block_About.scss";
import { useState } from "react";
import parse from "html-react-parser";

import meme1 from "../../../images/meme.png";
import meme2 from "../../../images/meme2.png";
import meme3 from "../../../images/meme3.png";
import MegaBird from "../../../images/MegaBird.png";
import flowersGold1 from "../../../images/flowersGold1.png";

const Block_About = () => {
  const [activeBlock, setActiveBlock] = useState(0);

  const dataOutput = [
    {
      aboutImageLeft: "Welcome to my website!",
      aboutTextLeft_bottom: "<span>I created this site to demonstrate my ability to develop web applications using Rest and Node.js. This site is included in my portfolio. </br></br>All of the code for this site is available on my GitHub. If you'd like to see it, just send me a message through email or Telegram and I'd be happy to provide a link.</br></br>I hope you enjoy exploring my portfolio and learning more about my abilities as a web developer.</span>",
      MegaBird: MegaBird,
      flowersGold1: flowersGold1,
    },
    {
      aboutImageLeft: "Embrace Your Inner Geek and Watch Anime",
      aboutTextLeft_bottom: "<span>To start watching, just click the 'WATCH TV series' button on the bottom of the page, or use the navigation bar at the top to find the button.</br></br>As for why I recommend this particular anime, it's simple: it has had a significant impact on me and has served as a source of inspiration. While it may not be my top favorite, I still believe it is worth checking out.</br></br>So don't wait any longer - click the button and start exploring the world of anime!</span>",
      MegaBird: MegaBird,
      flowersGold1: meme1,
    },
    {
      aboutImageLeft: "Who created the visual elements of the website?",
      aboutTextLeft_bottom: "<span>The design was drawn by me and is available on github, in the folder of all my designs, the design project is called the same as the site itself, it is drawn in the figma.</br></br>The pictures used on the website were sourced from the Internet from free access sources. Some of them were generated using the Midjourney neural network. The text was written with the assistance of the GPT-3 chatbot.</span>",
      MegaBird: MegaBird,
      flowersGold1: meme2,
    },
    {
      aboutImageLeft: "My contact information",
      aboutTextLeft_bottom: "<span>To contact me, you can send me an email at pawelwork@yahoo.com or message me on Telegram @Luvrok</span>",
      MegaBird: MegaBird,
      flowersGold1: meme3,
    },
  ];

  return (
    <div className="Block_About" data-scroll data-scroll-sticky data-scroll-target="#page">
      <div
        className="Block_Aboutsticky"
        data-scroll
        data-scroll-speed="14"
        data-scroll-position="left"
        data-scroll-direction="horizontal"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {dataOutput.map((data, i) => {
          return (
            // <div className="Block" key={i} style={i === activeBlock ? { transform: "translateX(0%)" } : { transform: "translateX(-100%)" }}>
            <div
              className="Block"
              key={i}
              style={
                i === activeBlock
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    }
              }
            >
              <div className="aboutImageLeft">
                <img
                  src={data.MegaBird}
                  alt=""
                  style={{
                    filter: `blur(${2 * i}px)`,
                  }}
                />
              </div>
              <div className="aboutBlockRight" style={{ width: `${document.querySelector(".aboutImageLeft")?.clientWidth}px` }} onClick={() => setActiveBlock((prev) => (prev + 1 === 4 ? 0 : prev + 1))}>
                <div className="aboutTextBlock">
                  <h2>{data.aboutImageLeft}</h2>
                  <p>{parse(data.aboutTextLeft_bottom)}</p>
                </div>
                <img src={data.flowersGold1} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Block_About;
