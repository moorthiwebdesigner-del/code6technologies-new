import { Link } from "react-router-dom";
import "../styles/Services.css";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      text: "High-performance websites and web applications built for modern businesses.",
      tags: "REACT · JAVASCRIPT · NODE.JS",
    },
    {
      number: "02",
      title: "Mobile App Development",
      text: "Scalable mobile experiences that connect brands with their customers.",
      tags: "MOBILE · PRODUCT · EXPERIENCE",
    },
    {
      number: "03",
      title: "UI / UX Design",
      text: "Thoughtful interfaces and experiences focused on clarity, usability and conversion.",
      tags: "RESEARCH · UX · UI DESIGN",
    },
    {
      number: "04",
      title: "Digital Solutions",
      text: "Custom technology solutions that simplify processes and accelerate growth.",
      tags: "STRATEGY · AUTOMATION · TECHNOLOGY",
    },
  ];

  return (
    <main className="services-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="services-page-hero">

        <div className="services-page-top">

          <div className="services-page-label">
            <span>02</span>
            <strong>WHAT WE DO</strong>
          </div>

          <span className="services-page-meta">
            CODE6 TECHNOLOGIES · 2026
          </span>

        </div>


        <div className="services-page-hero-content">

          <div>

            <p className="services-kicker">
              Strategy · Design · Technology
            </p>

            <h1>
              Services
              <br />
              <span>we build.</span>
            </h1>

          </div>


          <div className="services-page-description">

            <p>
              From strategy to execution, we create digital
              solutions designed around real business needs.
            </p>

            <Link
              to="/contact"
              className="services-contact-link"
            >
              Start a Project
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          SERVICES LIST
      ========================================= */}

      <section className="services-page-list">

        <div className="services-page-section-label">
          <span>03</span>
          <strong>OUR CAPABILITIES</strong>
        </div>


        {services.map((service, index) => (

          <Link
            to="/contact"
            className="services-page-item"
            key={service.number}
          >

            <div className="services-item-number">
              {service.number}
            </div>


            <div className="services-item-content">

              <h2>
                {service.title}
              </h2>

              <p>
                {service.text}
              </p>

              <span className="services-item-tags">
                {service.tags}
              </span>

            </div>


            <div className="services-item-arrow">
              ↗
            </div>

          </Link>

        ))}

      </section>


      {/* =========================================
          PROCESS
      ========================================= */}

      <section className="services-process">

        <div className="services-page-section-label">
          <span>04</span>
          <strong>OUR PROCESS</strong>
        </div>


        <div className="services-process-heading">

          <p>
            A simple process.
            <br />
            A better outcome.
          </p>

          <h2>
            From idea
            <br />
            <span>to impact.</span>
          </h2>

        </div>


        <div className="services-process-grid">

          <article>
            <span>01</span>

            <h3>Discover</h3>

            <p>
              We understand your business, audience and
              the problem we need to solve.
            </p>
          </article>


          <article>
            <span>02</span>

            <h3>Design</h3>

            <p>
              We turn ideas into clear experiences,
              interfaces and digital direction.
            </p>
          </article>


          <article>
            <span>03</span>

            <h3>Develop</h3>

            <p>
              We build fast, scalable and reliable
              technology around your requirements.
            </p>
          </article>


          <article>
            <span>04</span>

            <h3>Deliver</h3>

            <p>
              We launch, improve and support your product
              as your business continues to grow.
            </p>
          </article>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="services-page-cta">

        <span>
          HAVE A DIGITAL CHALLENGE?
        </span>

        <h2>
          Let's create
          <br />
          <em>something meaningful.</em>
        </h2>

        <Link
          to="/contact"
          className="services-cta-button"
        >
          <span>START A PROJECT</span>
          <strong>↗</strong>
        </Link>

      </section>

    </main>
  );
}