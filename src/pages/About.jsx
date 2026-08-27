import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Layers3,
  UsersRound,
  Target,
  Sparkles,
} from "lucide-react";

import "../styles/About.css";
import SEO from "../components/SEO";

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");

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

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Think Different",
      text: "We challenge ordinary ideas and look for smarter ways to solve complex digital problems.",
    },
    {
      number: "02",
      icon: Target,
      title: "Purpose First",
      text: "Every design decision and every line of code starts with a clear business objective.",
    },
    {
      number: "03",
      icon: Layers3,
      title: "Built to Scale",
      text: "We create digital products that are ready to grow with your business.",
    },
    {
      number: "04",
      icon: UsersRound,
      title: "Built Together",
      text: "We work closely with our clients to turn ideas into meaningful digital experiences.",
    },
  ];

  const stats = [
    ["01", "DIGITAL", "EXPERIENCES"],
    ["02", "MODERN", "TECHNOLOGY"],
    ["03", "CREATIVE", "THINKING"],
    ["04", "LONG TERM", "PARTNERSHIPS"],
  ];

  return (
    <>
            <SEO
  title="About Code6 Technologies | Technology with Purpose"
  description="Learn about Code6 Technologies, our approach to design and technology, and how we create meaningful digital experiences for modern businesses."
/>
    <main className="about-page">

      {/* BACKGROUND */}

      <div className="about-background">
        <div className="about-grid"></div>

        <div className="about-orb about-orb-one"></div>
        <div className="about-orb about-orb-two"></div>

        <div className="about-circle"></div>
      </div>


      {/* HERO */}

      <section className="about-hero">

        <div className="about-hero-top">

          <div className="about-label">
            <span>02</span>
            <strong>ABOUT CODE6</strong>
          </div>

          <div className="about-meta">
            DIGITAL / DESIGN / TECHNOLOGY
          </div>

        </div>


        <div className="about-hero-content about-reveal">

          <div>

            <p className="about-eyebrow">
              WHO WE ARE
            </p>

            <h1>
              We build
              <br />
              <em>what matters.</em>
            </h1>

          </div>


          <div className="about-hero-description">

            <span>01 — OUR STORY</span>

            <p>
              CODE6 Technologies is a digital technology
              studio focused on creating modern websites,
              applications and digital solutions for ambitious
              businesses.
            </p>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="about-intro about-reveal">

       

        <div className="about-intro-content">

          <span> 02 - ABOUT CODE6 TECHNOLOGIES</span>

          <h2>
            Technology should
            <br />
            feel <em>simple.</em>
          </h2>

          <div className="about-intro-grid">

            <p>
              We believe great digital products sit at the
              intersection of technology, design and business.
              Our goal is to remove unnecessary complexity and
              create experiences people actually enjoy using.
            </p>

            <p>
              From the first idea to the final launch, we
              combine strategy, creative thinking and modern
              technology to build digital products that make
              a real difference.
            </p>

          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="about-stats about-reveal">

        {stats.map(([number, first, second]) => (
          <div
            className="about-stat"
            key={number}
          >

            <span>{number}</span>

            <strong>
              {first}
              <br />
              {second}
            </strong>

          </div>
        ))}

      </section>


      {/* VALUES */}

      <section className="about-values">

        <div className="about-section-heading about-reveal">

          <div>

            <span>03 — OUR VALUES</span>

            <h2>
              What drives
              <br />
              <em>us.</em>
            </h2>

          </div>

          <p>
            The principles behind every project,
            partnership and product we create.
          </p>

        </div>


        <div className="about-value-grid">

          {values.map((value) => {

            const ValueIcon = value.icon;

            return (
              <article
                className="about-value-card about-reveal"
                key={value.number}
              >

                <div className="about-value-top">

                  <span>
                    {value.number}
                  </span>

                  <ValueIcon
                    size={25}
                    strokeWidth={1.25}
                  />

                </div>


                <div className="about-value-content">

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.text}
                  </p>

                </div>


                <div className="about-value-line"></div>

              </article>
            );
          })}

        </div>

      </section>


      {/* TECHNOLOGY */}

      <section className="about-technology about-reveal">

        

        <div className="about-tech-content">

          <span>04 - HOW WE WORK</span>

          <h2>
            Design with
            <br />
            <em>technology.</em>
          </h2>

          <p>
            We don't separate creativity from technology.
            Our designers and developers work together from
            the beginning to create digital products that are
            beautiful, functional and technically strong.
          </p>

          <div className="about-tech-tags">

            <span>STRATEGY</span>
            <span>UI / UX</span>
            <span>DEVELOPMENT</span>
            <span>TECHNOLOGY</span>

          </div>

        </div>


        <div className="about-tech-icon">

          <div className="about-tech-icon-inner">
            <Code2
              size={42}
              strokeWidth={1}
            />
          </div>

          <Sparkles
            size={18}
            strokeWidth={1.2}
          />

        </div>

      </section>


      {/* CTA */}

      <section className="about-cta about-reveal">

       

        <div className="about-cta-content">

          <span>LET'S CREATE</span>

          <h2>
            Have an idea?
            <br />
            <em>Let's build it.</em>
          </h2>

        </div>


        <Link
          to="/contact"
          className="about-cta-button"
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