import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Technologies.css";
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Server,
  Layers3,
  Palette,
  Braces,
  Globe,
  Zap,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import SEO from "../components/SEO";

export default function Technologies() {
  useEffect(() => {
    const items = document.querySelectorAll(".technology-reveal");

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

const technologies = [
  {
    number: "01",
    category: "FRONTEND",
    icon: Code2,
    title: "Modern Interfaces",
    text: "Fast, responsive and scalable interfaces built for exceptional digital experiences.",
    stack: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "JavaScript", icon: Braces },
      { name: "HTML / CSS", icon: Palette },
    ],
  },

  {
    number: "02",
    category: "BACKEND",
    icon: Server,
    title: "Powerful Systems",
    text: "Reliable backend architecture designed to handle real business complexity.",
    stack: [
      { name: "Node.js", icon: Server },
      { name: "PHP", icon: Code2 },
      { name: "REST API", icon: Zap },
      { name: "MySQL", icon: Database },
    ],
  },

  {
    number: "03",
    category: "MOBILE",
    icon: Smartphone,
    title: "Connected Experiences",
    text: "Cross-platform mobile applications that connect brands with their customers.",
    stack: [
      { name: "React Native", icon: Smartphone },
      { name: "Flutter", icon: Layers3 },
      { name: "Android", icon: Smartphone },
      { name: "iOS", icon: Smartphone },
    ],
  },

  {
    number: "04",
    category: "CLOUD",
    icon: Cloud,
    title: "Scalable Infrastructure",
    text: "Flexible cloud infrastructure built for performance, security and growth.",
    stack: [
      { name: "AWS", icon: Cloud },
      { name: "Vercel", icon: Globe },
      { name: "Cloud", icon: Cloud },
      { name: "DevOps", icon: Cpu },
    ],
  },
];

  return (
    <>
         <SEO
  title="Technologies We Use | Code6 Technologies"
  description="Discover the modern technologies and development tools Code6 Technologies uses to build scalable websites, applications and digital solutions."
/>
    <main className="technologies-page">

      {/* BACKGROUND */}

      <div className="technologies-background">

        <div className="technologies-grid"></div>

        <div className="technology-glow technology-glow-one"></div>

        <div className="technology-glow technology-glow-two"></div>

        <div className="technology-orbit">
          <span></span>
        </div>

      </div>


      {/* HERO */}

      <section className="technologies-hero">

        <div className="technologies-hero-top">

          <div className="technologies-label">
            <span>05</span>
            <strong>TECHNOLOGIES</strong>
          </div>

          <div className="technologies-status">
            <span></span>
            BUILT WITH MODERN TECHNOLOGY
          </div>

        </div>


        <div className="technologies-hero-content technology-reveal">

          <div className="technologies-hero-copy">

            <p>
              TECHNOLOGY THAT MOVES BUSINESS FORWARD
            </p>

            <h1>
              Built for
              <br />
              <em>what's next.</em>
            </h1>

          </div>


          <div className="technologies-hero-side">

            <span>
              01 — TECHNOLOGY
            </span>

            <p>
              We choose the right technology for the
              problem — creating digital products that
              are fast, scalable and built to last.
            </p>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="technology-intro technology-reveal">


        <div className="technology-intro-content">

          <span>
            02 - OUR APPROACH
          </span>

          <h2>
            The right tools.
            <br />
            <em>The right outcome.</em>
          </h2>

          <p>
            Technology is only valuable when it solves a
            real problem. We combine proven platforms,
            modern frameworks and thoughtful architecture
            to create solutions that deliver measurable value.
          </p>

        </div>

      </section>


      {/* TECHNOLOGY STACK */}

      <section className="technology-stack">

        <div className="technology-stack-heading technology-reveal">

          <span>
            03 — OUR STACK
          </span>

          <h2>
            Technology
            <br />
            <em>we use.</em>
          </h2>

        </div>


        <div className="technology-list">

         {technologies.map((technology) => {
  const MainIcon = technology.icon;

  return (
    <article
      className="technology-card technology-reveal"
      key={technology.number}
    >

      <div className="technology-card-number">
        {technology.number}
      </div>

      <div className="technology-main-icon">
        <MainIcon size={28} strokeWidth={1.4} />
      </div>

      <div className="technology-card-main">

        <span className="technology-category">
          {technology.category}
        </span>

        <h3>
          {technology.title}
        </h3>

        <p>
          {technology.text}
        </p>

      </div>

      <div className="technology-stack-items">

        {technology.stack.map((item) => {
          const Icon = item.icon;

          return (
            <span key={item.name}>
              <Icon
                size={13}
                strokeWidth={1.7}
              />

              {item.name}
            </span>
          );
        })}

      </div>

      <div className="technology-arrow">
        <ArrowUpRight size={20} strokeWidth={1.5} />
      </div>

    </article>
  );
})}
        </div>

      </section>


      {/* PROCESS */}

      <section className="technology-process">

        <div className="technology-process-heading technology-reveal">

          <span>
            04 — HOW WE BUILD
          </span>

          <h2>
            Technology
            <br />
            <em>with purpose.</em>
          </h2>

        </div>


        <div className="technology-process-list">

          <div className="technology-process-item technology-reveal">

            <span>01</span>

            <div>
              <h3>Understand</h3>

              <p>
                We start with your business goals,
                users and the problem that needs solving.
              </p>
            </div>

          </div>


          <div className="technology-process-item technology-reveal">

            <span>02</span>

            <div>
              <h3>Architect</h3>

              <p>
                We define the right technical foundation
                for performance, flexibility and scale.
              </p>
            </div>

          </div>


          <div className="technology-process-item technology-reveal">

            <span>03</span>

            <div>
              <h3>Build</h3>

              <p>
                Our team turns ideas into reliable,
                polished and production-ready products.
              </p>
            </div>

          </div>


          <div className="technology-process-item technology-reveal">

            <span>04</span>

            <div>
              <h3>Scale</h3>

              <p>
                We continuously improve the product as
                your users, data and business grow.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="technology-cta technology-reveal">

       

        <div className="technology-cta-content">

          <span>
            HAVE A DIGITAL IDEA?
          </span>

          <h2>
            Let's build
            <br />
            <em>it together.</em>
          </h2>

        </div>


        <Link
          to="/contact"
          className="technology-cta-button"
        >
          <span>
            START A PROJECT
          </span>

          <strong>
            ↗
          </strong>
        </Link>

      </section>

    </main>
    </>
  );
}