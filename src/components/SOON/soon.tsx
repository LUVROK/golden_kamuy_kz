import "./soon.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import $ from "jquery";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { TweenMax, Power1 } from "gsap";

const Soon = () => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    // (document.querySelector(".Soon") as HTMLElement).style.transform = "translateY(0%)";
    const handleScroll = (id: any) => {
      let elem = document.querySelector(id);
      scroll.scrollTo(elem, {
        offset: "0",
        duration: "100",
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    };
    handleScroll("#soon");

    const canvas: any = document.querySelector(".cursor-custom__canvas");
    const canvasBlock: any = document.querySelector(".cursor-custom");
    canvasBlock.style.zIndex = 9999;
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
      circle.lastX = lerp(circle.lastX, mouseX, 0.25);
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

    var c = document.createDocumentFragment();

    const element = document.querySelector(".pluses__block");
    let elementpos = (element as HTMLElement).getBoundingClientRect();
    let i1 = 0;

    const box = document.createElement("div");
    box.innerHTML = "<span>+</span>";
    box.style.backgroundColor = "transparent";
    box.classList.add(`plus`);

    const br = document.createElement("div");
    br.classList.add("plus_next");

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
    document.addEventListener("resize", () => buildFaixa());
  }, []);

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
    <motion.div className="soon" id="soon" variants={container} initial="active" animate="inactive" style={{ cursor: "none" }} onClick={() => console.log(1)}>
      <motion.div className="soon__text" variants={item}>
        <span id="soon__text_S">S</span>
        <span id="soon__text_O">O</span>
        <span id="soon__text_O_2">O</span>
        <span id="soon__text_N">N</span>
      </motion.div>
      <motion.div className="pluses" variants={item}>
        <div className="pluses__block"></div>
      </motion.div>
    </motion.div>
  );
};

export default Soon;
