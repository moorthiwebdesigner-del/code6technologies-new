import { Link } from "react-router-dom";
import "../styles/HomeIntro.css";

export default function HomeIntro() {
  return (
    <section className="home-intro">

      {/* TOP LABEL */}
      <div className="intro-top">

        <span className="section-number">
          01
        </span>

        <span className="section-label">
          WHO WE ARE
        </span>

      </div>


      {/* MAIN CONTENT */}
      <div className="intro-content">

        <h2>
          We turn ideas into
          <span> digital experiences </span>
          that make a difference.
        </h2>


        <div className="intro-right">

          <p>
            <strong>Code6 Technologies</strong> is a digital technology company focused
            on building meaningful products, intelligent solutions and
            high-performance digital experiences for modern businesses.
          </p>


          <Link
            to="/about"
            className="text-link"
          >
            <span>
              More About Code6
            </span>

            <strong>
              ↗
            </strong>
          </Link>

        </div>

      </div>


      {/* DIVIDER */}
      <div className="intro-line" />


      {/* BOTTOM KEYWORDS */}
      <div className="intro-bottom">

        <span>STRATEGY</span>
        <span>DESIGN</span>
        <span>TECHNOLOGY</span>
        <span>INNOVATION</span>

      </div>

    </section>
  );
}