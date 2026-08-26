import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/SelectedWork.css";

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      number: "01",
      category: "WEB DEVELOPMENT",
      title: "Digital Business",
      title2: "Platform",
      description:
        "A modern digital platform designed to create a strong and scalable business presence.",
      services: "STRATEGY · DESIGN · DEVELOPMENT",
      year: "2026",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=85",
      slug: "/projects/digital-business-platform",
    },

    {
      number: "02",
      category: "UI / UX DESIGN",
      title: "Modern Brand",
      title2: "Experience",
      description:
        "A premium digital experience focused on brand identity, usability and visual impact.",
      services: "RESEARCH · UX · INTERFACE DESIGN",
      year: "2026",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1800&q=85",
      slug: "/projects/modern-brand-experience",
    },

    {
      number: "03",
      category: "MOBILE APPLICATION",
      title: "Smart Mobile",
      title2: "Solution",
      description:
        "A clean and intuitive mobile product built around performance and user experience.",
      services: "PRODUCT · DEVELOPMENT · TECHNOLOGY",
      year: "2026",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1800&q=85",
      slug: "/projects/smart-mobile-solution",
    },
  ];

  /* =====================================================
     ACTIVE PROJECT DETECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(
        ".projects-page-item"
      );

      if (!sections.length) return;

      const trigger = window.innerHeight * 0.45;

      let current = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= trigger) {
          current = index;
        }
      });

      setActiveProject(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="selected-work">

      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <section className="projects-page-header">

        <div className="projects-page-label">
          <span className="section-number">03</span>

          <strong>
            OUR WORK
          </strong>
        </div>

        <div className="projects-page-heading">

          <p>
            Selected work. Real digital experiences.
          </p>

          <h1>
            Projects
            <span>.</span>
          </h1>

        </div>

      </section>


      {/* =================================================
          PROJECT NAVIGATION
      ================================================= */}

      <div className="projects-page-navigation">

        <span className="projects-page-current">
          {String(activeProject + 1).padStart(2, "0")}
        </span>

        <div className="projects-page-line">

          <span
            style={{
              height: `${
                ((activeProject + 1) /
                  projects.length) *
                100
              }%`,
            }}
          />

        </div>

        <span className="projects-page-total">
          {String(projects.length).padStart(2, "0")}
        </span>

      </div>


      {/* =================================================
          PROJECT LIST
      ================================================= */}

      <section className="projects-page-list">

        {projects.map((project, index) => (

          <article
            className={`projects-page-item ${
              activeProject === index
                ? "project-page-active"
                : ""
            }`}
            key={project.number}
          >

            <div className="projects-page-card">

              {/* ==============================
                  IMAGE
              ============================== */}

              <div className="projects-page-image">

                <img
                  src={project.image}
                  alt={`${project.title} ${project.title2}`}
                />

                <div className="projects-page-overlay" />

                {/* NUMBER */}

                <span className="projects-page-number">
                  {project.number}
                </span>


                {/* ==========================
                    CONTENT
                ========================== */}

                <div className="projects-page-content">

                  <span className="projects-page-category">
                    {project.category}
                  </span>

                  <h2>
                    {project.title}
                    <br />
                    {project.title2}
                  </h2>

                  <p>
                    {project.description}
                  </p>

                  <Link
                    to={project.slug}
                    className="projects-page-button"
                    aria-label={`View ${project.title} ${project.title2}`}
                  >

                    <span>
                      VIEW PROJECT
                    </span>

                    <strong>
                      ↗
                    </strong>

                  </Link>

                </div>

              </div>


              {/* ==============================
                  BOTTOM DETAILS
              ============================== */}

              <div className="projects-page-bottom">

                <span>
                  {project.services}
                </span>

                <span>
                  {project.year}
                </span>

              </div>

            </div>

          </article>

        ))}

      </section>



    </section>
  );
}