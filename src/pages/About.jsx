import { Link } from "react-router-dom";
import "../styles/About.css";

export default function About() {
  return (
    <main className="about-page">

      {/* ================================
          ABOUT HERO
      ================================= */}

      <section className="about-hero">

        <div className="about-hero-top">
          <div className="about-label">
            <span>01</span>
            <strong>WHO WE ARE</strong>
          </div>

          <span className="about-meta">
            CODE6 TECHNOLOGIES · 2026
          </span>
        </div>

        <div className="about-hero-content">

          <div className="about-hero-heading">

            <p>
              Technology with purpose.
            </p>

            <h1>
              We turn ideas into
              <br />
              <span>digital experiences.</span>
            </h1>

          </div>

          <div className="about-hero-text">

            <p>
              Code6 Technologies is a digital technology company focused
              on building meaningful products, intelligent solutions and
              high-performance digital experiences for modern businesses.
            </p>

            <Link to="/contact" className="about-link">
              Start a Conversation
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* ================================
          INTRO
      ================================= */}

      <section className="about-intro">

        <div className="about-section-label">
          <span>02</span>
          <strong>OUR APPROACH</strong>
        </div>

        <div className="about-intro-content">

          <h2>
            We believe great
            <span> technology</span>
            should make things
            <span> simpler.</span>
          </h2>

          <div className="about-intro-copy">

            <p>
              From the first idea to the final product, we combine strategy,
              design and technology to create digital solutions that are
              useful, scalable and built to last.
            </p>

            <p>
              Our approach is simple — understand the problem, create the
              right experience and build technology that delivers measurable
              value.
            </p>

          </div>

        </div>

      </section>


      {/* ================================
          STATS
      ================================= */}

      <section className="about-stats">

        <div className="about-stat">
          <strong>150<span>+</span></strong>
          <p>Happy Clients</p>
        </div>

        <div className="about-stat">
          <strong>250<span>+</span></strong>
          <p>Projects Delivered</p>
        </div>

        <div className="about-stat">
          <strong>15<span>+</span></strong>
          <p>Years of Excellence</p>
        </div>

        <div className="about-stat">
          <strong>10<span>+</span></strong>
          <p>Countries Served</p>
        </div>

      </section>


      {/* ================================
          VALUES
      ================================= */}

      <section className="about-values">

        <div className="about-section-label">
          <span>03</span>
          <strong>WHAT DRIVES US</strong>
        </div>

        <div className="about-values-heading">

          <p>
            Our principles shape
            <br />
            everything we build.
          </p>

          <h2>
            Built on
            <span> purpose.</span>
          </h2>

        </div>


        <div className="about-values-grid">

          <article>
            <span>01</span>

            <h3>Think Clearly</h3>

            <p>
              We start by understanding the real challenge before
              choosing the technology.
            </p>

            <b>↗</b>
          </article>


          <article>
            <span>02</span>

            <h3>Design Better</h3>

            <p>
              Every interaction should feel intentional, simple
              and meaningful.
            </p>

            <b>↗</b>
          </article>


          <article>
            <span>03</span>

            <h3>Build Smart</h3>

            <p>
              Clean architecture and modern technology create
              products ready to scale.
            </p>

            <b>↗</b>
          </article>


          <article>
            <span>04</span>

            <h3>Grow Together</h3>

            <p>
              We build long-term relationships, not just one-time
              digital projects.
            </p>

            <b>↗</b>
          </article>

        </div>

      </section>


      {/* ================================
          MISSION
      ================================= */}

      <section className="about-mission">

       

        <div className="about-mission-content">
<span>04 </span>
          <span>OUR MISSION</span>

          <h2>
            Make technology
            <br />
            <em>work for people.</em>
          </h2>

          <p>
            We create digital experiences that connect people,
            simplify business and turn ambitious ideas into
            meaningful outcomes.
          </p>

        </div>

      </section>


      {/* ================================
          CTA
      ================================= */}

      <section className="about-cta">

        <span>
          HAVE AN IDEA?
        </span>

        <h2>
          Let's build
          <br />
          <em>something remarkable.</em>
        </h2>

        <Link
          to="/contact"
          className="about-cta-button"
        >
          <span>START A PROJECT</span>
          <strong>↗</strong>
        </Link>

      </section>

    </main>
  );
}