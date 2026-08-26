import { useState } from "react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaAws,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiWoocommerce,
} from "react-icons/si";

import "../styles/HomeTechnologies.css";


export default function Technologies() {

  const [activeFilter, setActiveFilter] =
    useState("ALL");


  const filters = [
    "ALL",
    "FRONTEND",
    "BACKEND",
    "DATABASE",
    "CMS",
    "E-COMMERCE",
    "TOOLS",
  ];


  const technologies = [

    {
      name: "React.js",
      category: "FRONTEND",
      icon: <FaReact />,
      className: "react",
    },

    {
      name: "JavaScript",
      category: "FRONTEND",
      icon: <FaJs />,
      className: "javascript",
    },

    {
      name: "HTML5",
      category: "FRONTEND",
      icon: <FaHtml5 />,
      className: "html",
    },

    {
      name: "CSS3",
      category: "FRONTEND",
      icon: <FaCss3Alt />,
      className: "css",
    },

    {
      name: "Node.js",
      category: "BACKEND",
      icon: <FaNodeJs />,
      className: "node",
    },

    {
      name: "PHP",
      category: "BACKEND",
      icon: <FaPhp />,
      className: "php",
    },

    {
      name: "MySQL",
      category: "DATABASE",
      icon: <SiMysql />,
      className: "mysql",
    },

    {
      name: "MongoDB",
      category: "DATABASE",
      icon: <SiMongodb />,
      className: "mongodb",
    },

    {
      name: "Firebase",
      category: "DATABASE",
      icon: <SiFirebase />,
      className: "firebase",
    },

    {
      name: "WordPress",
      category: "CMS",
      icon: <FaWordpress />,
      className: "wordpress",
    },

    {
      name: "WooCommerce",
      category: "E-COMMERCE",
      icon: <SiWoocommerce />,
      className: "woocommerce",
    },

    {
      name: "Shopify",
      category: "E-COMMERCE",
      icon: <FaShopify />,
      className: "shopify",
    },

    {
      name: "Git",
      category: "TOOLS",
      icon: <FaGitAlt />,
      className: "git",
    },

    {
      name: "GitHub",
      category: "TOOLS",
      icon: <FaGithub />,
      className: "github",
    },

    {
      name: "Figma",
      category: "TOOLS",
      icon: <FaFigma />,
      className: "figma",
    },

    {
      name: "AWS",
      category: "TOOLS",
      icon: <FaAws />,
      className: "aws",
    },

  ];


  const filteredTechnologies =
    activeFilter === "ALL"
      ? technologies
      : technologies.filter(
          (tech) =>
            tech.category === activeFilter
        );


  return (


      <section className="technologies-section">


        {/* =========================
            HEADER
        ========================= */}

        <div className="technologies-header">

          <div className="technologies-label">

            <span className="tech-number section-number">
              04
            </span>

            <span className="tech-label-text">
              TECHNOLOGIES
            </span>

          </div>


          <div className="technologies-heading">

            <p>
              Modern tools. Powerful results.
            </p>

            <h2>
              Technologies
              <span> We Use.</span>
            </h2>

          </div>

        </div>


        {/* =========================
            FILTER
        ========================= */}

        <div className="technology-filters">

          {filters.map((filter) => (

            <button
              key={filter}
              type="button"
              className={
                activeFilter === filter
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>

          ))}

        </div>


        {/* =========================
            GRID
        ========================= */}

        <div className="technology-grid">

          {filteredTechnologies.map(
            (tech, index) => (

              <article
                className={`technology-card ${tech.className}`}
                key={tech.name}
              >

                <div className="technology-card-top">

                  <span className="technology-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="technology-category">
                    {tech.category}
                  </span>

                </div>


                <div className="technology-icon">
                  {tech.icon}
                </div>


                <div className="technology-card-bottom">

                  <h2>
                    {tech.name}
                  </h2>

                  <span className="technology-arrow">
                    ↗
                  </span>

                </div>

              </article>

            )
          )}

        </div>


        {/* =========================
            FOOTER
        ========================= */}

        <div className="technology-footer">

          <span>
            MODERN STACK · CLEAN CODE · SCALABLE PRODUCTS
          </span>

          <span>
            {String(filteredTechnologies.length).padStart(2, "0")} / 16
          </span>

        </div>

      </section>

  );
}