import { Link } from "react-router-dom";
import "../styles/HomeServices.css";

export default function HomeServices() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "High-performance digital experiences built to grow your business.",
    },

    {
      number: "02",
      title: "UI / UX Design",
      description:
        "Thoughtful digital experiences designed for clarity, usability and conversion.",
    },

    {
      number: "03",
      title: "Mobile App Development",
      description:
        "Scalable mobile experiences built to connect brands with customers.",
    },

    {
      number: "04",
      title: "Digital Solutions",
      description:
        "Custom technology solutions built to simplify processes and accelerate growth.",
    },
  ];

  return (
    <section className="services-section">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="services-header">

        <div className="services-title">

          <span className="section-number">
            02
          </span>

          <span className="section-label">
            WHAT WE DO
          </span>

        </div>
<div className="services-heading">
        <p>
          We create digital solutions built around real business needs.
        </p>

        <h2>
              Services
              <span> We Offer.</span>
            </h2>

            </div>

      </div>


      {/* =========================================
          SERVICES
      ========================================= */}

      <div className="services-list">

        {services.map((service) => (

          <Link
            key={service.number}
            to="/services"
            className="service-item"
          >

            <div className="service-number">
              {service.number}
            </div>


            <div className="service-info">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>


            <div className="service-arrow">
              ↗
            </div>

          </Link>

        ))}

      </div>


      {/* =========================================
          BOTTOM
      ========================================= */}

      <div className="services-footer">

        <span>
          STRATEGY · DESIGN · DEVELOPMENT
        </span>

        <span>
          02 / 07
        </span>

      </div>

    </section>
  );
}