import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Globe2,
  Smartphone,
  LayoutDashboard,
  ShoppingBag,
} from "lucide-react";

import "../styles/Projects.css";
import SEO from "../components/SEO";

export default function Projects() {
  useEffect(() => {
    const items = document.querySelectorAll(".project-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

const projects = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Digital Business Platform",
    description:
      "A modern digital platform designed to improve customer experience, performance and business growth.",
    year: "2026",
    type: "Web Platform",
    image: "/images/projects/project-01.jpg",
  },

  {
    number: "02",
    category: "MOBILE APP",
    title: "Connected Mobile Experience",
    description:
      "A scalable mobile experience designed to connect businesses with customers through a simple and intuitive interface.",
    year: "2026",
    type: "Mobile Application",
    image: "/images/projects/project-02.jpg",
  },

  {
    number: "03",
    category: "UI / UX DESIGN",
    title: "Premium Digital Experience",
    description:
      "A carefully crafted interface focused on clarity, usability, visual identity and meaningful interactions.",
    year: "2026",
    type: "Product Design",
    image: "/images/projects/project-03.jpg",
  },

  {
    number: "04",
    category: "DIGITAL SOLUTIONS",
    title: "Business Management System",
    description:
      "A custom technology solution built to simplify workflows, improve efficiency and support scalable operations.",
    year: "2026",
    type: "Business Solution",
    image: "/images/projects/project-04.jpg",
  },
];
  return (
    <>
                <SEO
  title="Our Projects | Digital Experiences by Code6 Technologies"
  description="Explore selected Code6 Technologies projects including digital platforms, mobile experiences, premium websites and custom business solutions."
/>
    <main className="projects-page">

      {/* BACKGROUND */}

      <div className="projects-background">
        <div className="projects-grid"></div>

        <div className="projects-glow projects-glow-one"></div>
        <div className="projects-glow projects-glow-two"></div>

        <div className="projects-circle"></div>
      </div>


      {/* HERO */}

      <section className="projects-hero">

        <div className="projects-hero-top">

          <div className="projects-label">
            <span>04</span>
            <strong>SELECTED WORK</strong>
          </div>

          <div className="projects-hero-note">
            DIGITAL PRODUCTS / EXPERIENCES / SOLUTIONS
          </div>

        </div>


        <div className="projects-hero-content project-reveal">

          <div>

            <p className="projects-eyebrow">
              SELECTED PROJECTS
            </p>

            <h1>
              Work that
              <br />
              <em>speaks.</em>
            </h1>

          </div>


          <div className="projects-hero-description">

            <span>01 — OUR WORK</span>

            <p>
              We create digital products and experiences
              that combine technology, design and real
              business thinking.
            </p>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="projects-intro project-reveal">

       
        <div>

          <span>02 - OUR SELECTED WORK</span>

          <h2>
            Ideas turned into
            <br />
            <em>digital reality.</em>
          </h2>

          <p>
            Every project starts with a problem worth solving.
            We work closely with businesses to transform ideas
            into useful, beautiful and scalable digital products.
          </p>

        </div>

      </section>


      {/* PROJECTS */}

      <section className="projects-list">

        <div className="projects-section-heading project-reveal">

          <div>
            <span>03 — PORTFOLIO</span>

            <h2>
              Selected
              <br />
              <em>projects.</em>
            </h2>
          </div>

          <p>
            A selection of digital experiences,
            platforms and solutions created by Code6.
          </p>

        </div>


        <div className="project-cards">

          {projects.map((project) => {

            const ProjectIcon = project.icon;

            return (
              <article
                className={`project-card project-reveal ${project.className}`}
                key={project.number}
              >

                {/* VISUAL */}
<div className="project-visual">

  <img
    src={project.image}
    alt={project.title}
    className="project-image"
  />

  <div className="project-image-overlay"></div>

  <div className="project-visual-label">
    CODE6 / {project.number}
  </div>

</div>


                {/* CONTENT */}

                <div className="project-card-content">

                  <div className="project-card-top">

                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>

                    <span className="project-year">
                      {project.year}
                    </span>

                  </div>


                  <h3>
                    {project.title}
                  </h3>


                  <p>
                    {project.description}
                  </p>


                  <div className="project-card-bottom">

                    <span className="project-type">
                      {project.type}
                    </span>

                    <button
                      className="project-view"
                      type="button"
                      aria-label={`View ${project.title}`}
                    >
                      VIEW PROJECT

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                      />
                    </button>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </section>


      {/* CAPABILITIES */}

      <section className="projects-capabilities project-reveal">

        

        <div className="projects-capabilities-content">

          <span>
            04 - WHAT WE CREATE
          </span>

          <h2>
            Digital experiences
            <br />
            <em>built to perform.</em>
          </h2>

        </div>


        <div className="projects-capability-list">

          <div>
            <span>01</span>
            <strong>Websites & Platforms</strong>
            <p>High-performance digital experiences.</p>
          </div>

          <div>
            <span>02</span>
            <strong>Mobile Applications</strong>
            <p>Connected experiences for modern users.</p>
          </div>

          <div>
            <span>03</span>
            <strong>Digital Products</strong>
            <p>Scalable products built around real needs.</p>
          </div>

          <div>
            <span>04</span>
            <strong>Custom Solutions</strong>
            <p>Technology designed for your business.</p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="projects-cta project-reveal">

        

        <div className="projects-cta-content">

          <span>
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's create
            <br />
            <em>something great.</em>
          </h2>

        </div>


        <Link
          to="/contact"
          className="projects-cta-button"
        >
          <span>START A PROJECT</span>

          <ArrowUpRight
            size={21}
            strokeWidth={1.4}
          />
        </Link>

      </section>

    </main>
    </>
  );
}