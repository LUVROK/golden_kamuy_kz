import "./Wrapper.scss";
import { useState, useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

class Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.radius = Math.random() * 2 + 1;
    this.speed = Math.random() * 1 + 0.5;
  }

  // Initialize snowflake position and size
  init() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
  }

  // Update snowflake position
  update() {
    this.y += this.speed;
    if (this.y > window.innerHeight) {
      this.init();
    }
  }

  // Draw snowflake on canvas
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}

const Wrapper = () => {
  const [click, setClick] = useState<Boolean>(false);
  const { scroll } = useLocomotiveScroll();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Get canvas context
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create array of snowflakes
    const snowflakes: Snowflake[] = [];
    for (let i = 0; i < 500; i++) {
      snowflakes.push(new Snowflake());
    }

    // Initialize snowflakes
    for (let i = 0; i < snowflakes.length; i++) {
      snowflakes[i].init();
    }

    // Animation loop
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

  const handleScroll = (id: any) => {
    let elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: "0",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="Wrapper">
      <div className="background" data-scroll data-scroll-sticky data-scroll-target="#App">
        <div className="watchBtn" onClick={() => handleScroll("#MainContent")} data-scroll data-scroll-speed="20">
          WATCH SERIES
        </div>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default Wrapper;
