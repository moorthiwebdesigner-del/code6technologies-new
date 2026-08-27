import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import hero from "../assets/hero.webp";
import "../styles/Hero.css";


/* =========================================================
   COUNTER
========================================================= */

function Counter({ end, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(easedProgress * end)
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [started, end]);

  return (
    <strong ref={ref}>
      {count}
      {suffix}
    </strong>
  );
}


/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="hero-content">

          <div className="hero-eyebrow">
            <span></span>

            DIGITAL SOLUTIONS THAT DRIVE GROWTH
          </div>


          <h1>
            SOLVING COMPLEX
            <br />

            PROBLEMS WITH
            <br />

            <em>SMART</em> TECHNOLOGY.
          </h1>


          <p className="hero-description">
            We build digital products, platforms and
            experiences that help businesses innovate,
            scale and lead.
          </p>


          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="hero-actions">

            <Link
              to="/services"
              className="primary-button"
            >
              <span>
                Explore Our Services
              </span>

              <strong>
                ↗
              </strong>
            </Link>


            <Link
              to="/projects"
              className="secondary-button"
            >
              <span className="play-icon">
                ▶
              </span>

              <span>
                View Our Work
              </span>
            </Link>

          </div>

        </div>


        {/* =================================================
            HERO VISUAL
        ================================================= */}

     <div className="hero-visual">

  {/* BACKGROUND GLOW */}
  <div className="visual-circle"></div>


  {/* MAIN IMAGE CARD */}
  <div className="visual-card">

    <img
  src={hero}
  alt="Code6 Technologies digital technology"
  className="hero-visual-image"
  width="800"
  height="800"
  fetchPriority="high"
  decoding="async"
/>

    <div className="visual-image-overlay"></div>


    {/* TOP */}
    <div className="card-top">

      <span>
        CODE6
      </span>

      <span>
        2026
      </span>

    </div>


    {/* DECORATIVE LINES */}
    <div className="visual-lines">

      <span></span>
      <span></span>
      <span></span>

    </div>


    {/* BIG NUMBER */}
    <div className="visual-number">
      06
    </div>


    {/* BOTTOM */}
    <div className="card-bottom">

      <span>
        TECHNOLOGY
      </span>

      <span>
        INNOVATION
      </span>

    </div>

  </div>


  {/* FLOATING LABEL 01 */}
  <div className="floating-label label-one">

    <span>
      01
    </span>

    Digital Strategy

  </div>


  {/* FLOATING LABEL 02 */}
  <div className="floating-label label-two">

    <span>
      02
    </span>

    Smart Solutions

  </div>


  {/* SMALL FLOATING BADGE */}
  <div className="hero-orbit-badge">

    <span></span>

    DIGITAL
    <br />
    EXPERIENCE

  </div>

</div>

      </div>


      {/* =================================================
          HERO STATS
      ================================================= */}

      <div className="hero-stats">

        {/* STAT 01 */}

        <div className="stat">

          <Counter end={150} />

          <span>
            Happy Clients
          </span>

        </div>


        {/* STAT 02 */}

        <div className="stat">

          <Counter end={250} />

          <span>
            Projects Delivered
          </span>

        </div>


        {/* STAT 03 */}

        <div className="stat">

          <Counter end={15} />

          <span>
            Years of Excellence
          </span>

        </div>


        {/* STAT 04 */}

        <div className="stat">

          <Counter end={10} />

          <span>
            Countries Served
          </span>

        </div>

      </div>

    </section>
  );
}