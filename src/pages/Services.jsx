import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Palette,
  Layers3,
  Search,
  Rocket,
  Settings2,
  Check,
} from "lucide-react";

import "../styles/Services.css";
import SEO from "../components/SEO";

export default function Services() {

  useEffect(() => {
  const cards = document.querySelectorAll(".service-card");

  const handleMove = (event, card) => {
    const rect = card.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    const visual = card.querySelector(".service-visual");

    if (!visual) return;

    visual.style.setProperty(
      "--mouse-x",
      `${x * 18}px`
    );

    visual.style.setProperty(
      "--mouse-y",
      `${y * 18}px`
    );
  };

  const handleLeave = (card) => {
    const visual = card.querySelector(".service-visual");

    if (!visual) return;

    visual.style.setProperty("--mouse-x", "0px");
    visual.style.setProperty("--mouse-y", "0px");
  };

  cards.forEach((card) => {
    const move = (event) => handleMove(event, card);
    const leave = () => handleLeave(card);

    card.addEventListener("mousemove", move);
    card.addEventListener("mouseleave", leave);

    card._parallaxMove = move;
    card._parallaxLeave = leave;
  });

  return () => {
    cards.forEach((card) => {
      card.removeEventListener(
        "mousemove",
        card._parallaxMove
      );

      card.removeEventListener(
        "mouseleave",
        card._parallaxLeave
      );
    });
  };
}, []);
  useEffect(() => {
    const items = document.querySelectorAll(".service-reveal");

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

const services = [
  {
    number: "01",
    title: "Web Development",
    category: "DIGITAL EXPERIENCES",
    description:
      "High-performance websites and web applications built for modern businesses.",
    icon: Code2,
    visual: "WEB",
    features: [
      "Corporate Websites",
      "Web Applications",
      "E-Commerce",
      "CMS Development",
    ],
  },

  {
    number: "02",
    title: "Mobile App Development",
    category: "MOBILE EXPERIENCES",
    description:
      "Scalable mobile experiences that connect brands with their customers.",
    icon: Smartphone,
    visual: "APP",
    features: [
      "iOS Applications",
      "Android Applications",
      "Cross Platform Apps",
      "API Integration",
    ],
  },

  {
    number: "03",
    title: "UI / UX Design",
    category: "DESIGN & EXPERIENCE",
    description:
      "Thoughtful interfaces and experiences focused on clarity, usability and conversion.",
    icon: Palette,
    visual: "DESIGN",
    features: [
      "Product Design",
      "UI Design",
      "UX Research",
      "Design Systems",
    ],
  },

  {
    number: "04",
    title: "Digital Solutions",
    category: "BUSINESS TECHNOLOGY",
    description:
      "Custom technology solutions that simplify processes and accelerate growth.",
    icon: Layers3,
    visual: "SYSTEM",
    features: [
      "Custom Software",
      "Business Automation",
      "API Solutions",
      "System Integration",
    ],
  },
];

  const process = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      text: "We understand your business, audience and objectives.",
    },
    {
      number: "02",
      icon: Palette,
      title: "Design",
      text: "We turn ideas into clear, intuitive and meaningful experiences.",
    },
    {
      number: "03",
      icon: Code2,
      title: "Build",
      text: "We develop scalable digital products using modern technology.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch",
      text: "We test, optimise and launch your product with confidence.",
    },
  ];

  return (
    <>
                 <SEO
  title="Digital Services | Web, UI/UX & Mobile | Code6 Technologies"
  description="Explore Code6 Technologies services including web development, UI/UX design, mobile app development and custom digital solutions."
/>
    <main className="services-page">

      {/* BACKGROUND */}

      <div className="services-background">
        <div className="services-grid"></div>

        <div className="services-orb services-orb-one"></div>
        <div className="services-orb services-orb-two"></div>

        <div className="services-ring"></div>
      </div>


      {/* HERO */}

      <section className="services-hero">

        <div className="services-hero-top">

          <div className="services-label">
            <span>03</span>
            <strong>WHAT WE DO</strong>
          </div>

          <div className="services-note">
            STRATEGY / DESIGN / TECHNOLOGY
          </div>

        </div>


        <div className="services-hero-content service-reveal">

          <div>

            <p className="services-eyebrow">
              OUR SERVICES
            </p>

            <h1>
              Built for
              <br />
              <em>what's next.</em>
            </h1>

          </div>


          <div className="services-hero-description">

            <span>01 — OUR APPROACH</span>

            <p>
              From strategy to execution, we create digital
              solutions designed around real business needs.
            </p>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="services-intro service-reveal">

        

        <div>

          <span>02 - HOW WE HELP</span>

          <h2>
            Digital solutions
            <br />
            with <em>purpose.</em>
          </h2>

          <p>
            We combine strategy, design and technology to
            create digital experiences that are useful,
            beautiful and built to perform.
          </p>

        </div>

      </section>


      {/* SERVICES */}

      <section className="services-list">

        <div className="services-section-heading service-reveal">

          <div>

            <span>03 — CAPABILITIES</span>

            <h2>
              What we
              <br />
              <em>do.</em>
            </h2>

          </div>

          <p>
            Flexible digital services designed to help
            ambitious businesses move forward.
          </p>

        </div>


        <div className="service-cards">

          {services.map((service) => {

            const ServiceIcon = service.icon;

            return (
              <article
                className="service-card service-reveal"
                key={service.number}
              >

                <div className="service-card-top">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-category">
                    {service.category}
                  </span>

                </div>


                <div className="service-icon">

                  <ServiceIcon
                    size={30}
                    strokeWidth={1.35}
                  />

                </div>


                <div className="service-card-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </div>


                <div className="service-features">

                  {service.features.map((feature) => (

                    <div key={feature}>

                      <Check
                        size={13}
                        strokeWidth={1.5}
                      />

                      <span>
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>


                <Link
                  to="/contact"
                  className="service-link"
                >
                  <span>DISCUSS THIS SERVICE</span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                  />

                </Link>

              </article>
            );
          })}

        </div>

      </section>


      {/* PROCESS */}

      <section className="services-process">

        <div className="services-process-heading service-reveal">

          

          <div>

            <span>04 - OUR PROCESS</span>

            <h2>
              From idea
              <br />
              to <em>impact.</em>
            </h2>

          </div>

        </div>


        <div className="services-process-list">

          {process.map((item) => {

            const ProcessIcon = item.icon;

            return (
              <div
                className="process-item service-reveal"
                key={item.number}
              >

                <div className="process-number">
                  {item.number}
                </div>

                <div className="process-icon">

                  <ProcessIcon
                    size={23}
                    strokeWidth={1.3}
                  />

                </div>

                <div className="process-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

                <ArrowUpRight
                  className="process-arrow"
                  size={19}
                  strokeWidth={1.3}
                />

              </div>
            );
          })}

        </div>

      </section>


      {/* CTA */}

      <section className="services-cta service-reveal">

        

        <div className="services-cta-content">

          <span>
            READY TO BUILD?
          </span>

          <h2>
            Let's turn your
            <br />
            <em>idea into reality.</em>
          </h2>

        </div>


        <Link
          to="/contact"
          className="services-cta-button"
        >
          <span>START A PROJECT</span>

          <ArrowUpRight
            size={20}
            strokeWidth={1.4}
          />

        </Link>

      </section>

    </main>
    </>
  );
}