import "./soon.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import $ from "jquery";
import { useLocomotiveScroll } from "react-locomotive-scroll";
// import "./initCanvasCursor";
import { TweenMax, Power1 } from "gsap";

const Soon = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    // (document.querySelector(".Soon") as HTMLElement).style.transform = "translateY(0%)";
    console.log("OPEN2");
    const handleScroll = (id: any) => {
      let elem = document.querySelector(id);
      scroll.scrollTo(elem, {
        offset: "0",
        duration: "100",
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    };
    handleScroll("#Soon");

    const canvas: any = document.querySelector(".js-canvas");
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouseX = width / 2;
    let mouseY = height / 2;

    let circle = {
      radius: 15,
      lastX: mouseX,
      lastY: mouseY,
    };

    const elems = [...(document.querySelectorAll("[data-hover]") as any)];

    function onResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function render() {
      circle.lastX = lerp(circle.lastX, mouseX, 0.25); //Linear interpolate the vector to another vector.
      circle.lastY = lerp(circle.lastY, mouseY, 0.25);

      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.arc(circle.lastX, circle.lastY, circle.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.closePath();

      requestAnimationFrame(render);
    }

    function init() {
      requestAnimationFrame(render);

      window.addEventListener("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
      });

      window.addEventListener("resize", onResize, false);

      let tween = TweenMax.to(circle, 0.25, {
        radius: circle.radius * 3,
        ease: Power1.easeInOut,
        paused: true,
      });

      elems.forEach((el: any) => {
        el.addEventListener(
          "mouseenter",
          () => {
            tween.play();
          },
          false
        );
        el.addEventListener(
          "mouseleave",
          () => {
            tween.reverse();
          },
          false
        );
      });
    }

    function lerp(a: any, b: any, n: any) {
      return (1 - n) * a + n * b;
    }

    init();

    // document.body.style.overflow = "hidden";

    // for (let i1 = 0; i1 < 140; i1++) {
    //   const br = document.createElement("div");
    //   br.classList.add("plusBR");
    //   (document.querySelector(".plusesInfBlock") as HTMLElement).appendChild(br);

    //   for (let i2 = 0; i2 < 50; i2++) {
    //     const box = document.createElement("div");
    //     box.innerHTML = "<span>+</span>";
    //     box.style.backgroundColor = "transparent";
    //     box.classList.add("plus");

    //     box.addEventListener("mouseover", function (e) {
    //       (document.querySelector(`.plus:nth-of-type(${(i2 + 1) * (i1 + 1) - 1})`) as HTMLElement).classList.add("Neighbours");
    //     });
    //     box.addEventListener("mouseout", function (e) {
    //       (document.querySelector(`.plus:nth-of-type(${(i2 + 1) * (i1 + 1) - 1})`) as HTMLElement).classList.remove("Neighbours");
    //     });

    //     // (document.querySelector(".plusesAnim") as HTMLElement).append(box);
    //     (document.querySelector(`.plusBR:nth-of-type(${i1 + 1})`) as HTMLElement).appendChild(box);
    //   }
    // }

    var c = document.createDocumentFragment();

    const element = document.querySelector(".plusesInfBlock");
    let elementpos = (element as HTMLElement).getBoundingClientRect();
    let i1 = 0;

    const box = document.createElement("div");
    box.innerHTML = "<span>+</span>";
    box.style.backgroundColor = "transparent";
    box.classList.add(`plus`);

    const br = document.createElement("div");
    br.classList.add("plusBR");

    const buildFaixa = () => {
      for (let i2 = 0; i2 < 50; i2++) {
        var div1 = br.cloneNode(true);

        // (element as any).appendChild(div1);
        c.appendChild(div1);
        for (let i2 = 0; i2 < 50; i2++) {
          i1++;
          var div2 = box.cloneNode(true);
          div1.appendChild(div2);
        }
      }
      (element as any).appendChild(c);
      elementpos = (element as HTMLElement).getBoundingClientRect();
      gsap.to(element, {
        duration: 25,
        x: elementpos.width / 10,
        y: elementpos.height / 10,
        repeat: -1,
        ease: "none",
      });
    };

    buildFaixa();

    // WATCH RESIZE WINDOWS
    document.addEventListener("resize", () => buildFaixa());

    // setInterval(() => {
    //   (element as HTMLElement).style.animation = "moveRightBottom 30s linear infinite";
    // }, 1000);

    //   const img = new Image();
    //   img.src = "https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png";

    //   const canvas: any = document.getElementById("canvasSnow2");
    //   const ctx = canvas.getContext("2d");

    //   const backgroundImage = {
    //     img: img,
    //     x: 0,
    //     speed: -1,

    //     move: function () {
    //       this.x += this.speed;
    //       this.x %= canvas.width;
    //     },

    //     draw: function () {
    //       ctx.drawImage(this.img, this.x, 0);
    //       if (this.speed < 0) {
    //         ctx.drawImage(this.img, this.x + canvas.width, 0);
    //       } else {
    //         ctx.drawImage(this.img, this.x - this.img.width, 0);
    //       }
    //     },
    //   };

    //   function updateCanvas() {
    //     backgroundImage.move();

    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     backgroundImage.draw();

    //     requestAnimationFrame(updateCanvas);
    //   }

    //   // start calling updateCanvas once the image is loaded
    //   img.onload = updateCanvas;
  }, []);

  function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const container = {
    active: {
      transform: "translateY(-100%)",
    },
    inactive: {
      transform: "translateY(0%)",
      transition: {
        delayChildren: 1.25,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    active: {
      opacity: 0,
    },
    inactive: {
      opacity: 1,
    },
  };

  return (
    <motion.div className="Soon" id="Soon" variants={container} initial="active" animate="inactive">
      <motion.div className="SoonText" variants={item}>
        <span id="S">S</span>
        <span id="O">O</span>
        <span id="O2">O</span>
        <span id="N">N</span>
      </motion.div>
      {/* <canvas id="canvasSnow2" className="canvasSnow2" width="800" height="400"></canvas> */}
      <motion.div className="plusesAnim" variants={item}>
        <div className="plusesInfBlock"></div>
      </motion.div>
      <canvas className="js-canvas" id="js-canvas"></canvas>
    </motion.div>
  );
};

export default Soon;
