import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Careers.css";
import SEO from "../components/SEO";

export default function Careers() {
  useEffect(() => {
    const items = document.querySelectorAll(".career-reveal");

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

  const roles = [
    {
      number: "01",
      title: "Frontend Developer",
      type: "FULL-TIME",
      location: "REMOTE / INDIA",
    },
    {
      number: "02",
      title: "UI / UX Designer",
      type: "FULL-TIME",
      location: "REMOTE / INDIA",
    },
    {
      number: "03",
      title: "Backend Developer",
      type: "FULL-TIME",
      location: "REMOTE / INDIA",
    },
    {
      number: "04",
      title: "Digital Marketing Specialist",
      type: "FULL-TIME",
      location: "REMOTE / INDIA",
    },
  ];

  return (
    <>
              <SEO
  title="Careers at Code6 Technologies | Join Our Team"
  description="Explore career opportunities at Code6 Technologies and join a creative team building meaningful digital experiences with design and technology."
/>
    <main className="careers-page">

      {/* BACKGROUND */}

      <div className="careers-background">

        <div className="careers-grid"></div>

        <div className="careers-glow careers-glow-one"></div>

        <div className="careers-glow careers-glow-two"></div>

        <div className="career-orbit">
          <span></span>
        </div>

      </div>


      {/* HERO */}

      <section className="careers-hero">

        <div className="careers-hero-top">

          <div className="careers-label">

            <span>06</span>

            <strong>
              CAREERS
            </strong>

          </div>

          <div className="careers-status">

            <span></span>

            WE'RE ALWAYS LOOKING FOR GREAT PEOPLE

          </div>

        </div>


        <div className="careers-hero-content career-reveal">

          <div>

            <p>
              BUILD YOUR FUTURE WITH US
            </p>

            <h1>
              Work on
              <br />
              <em>what matters.</em>
            </h1>

          </div>


          <div className="careers-hero-side">

            <span>
              01 — PEOPLE
            </span>

            <p>
              We believe great digital products are built
              by curious people who care about the work,
              the details and the impact they create.
            </p>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="careers-intro career-reveal">

       

        <div className="careers-intro-content">

          <span>
            02 - LIFE AT CODE6
          </span>

          <h2>
            Good people.
            <br />
            <em>Great work.</em>
          </h2>

          <p>
            At Code6 Technologies, we bring together designers,
            developers, strategists and problem solvers to build
            digital experiences that make a difference.
          </p>

        </div>

      </section>


      {/* VALUES */}

      <section className="career-values">

        <div className="career-values-heading career-reveal">

          <span>
            03 — OUR VALUES
          </span>

          <h2>
            How we
            <br />
            <em>work.</em>
          </h2>

        </div>


        <div className="career-values-list">

          <div className="career-value career-reveal">

            <span>01</span>

            <div>
              <h3>
                Think Different
              </h3>

              <p>
                We question the obvious and look for smarter
                ways to solve meaningful problems.
              </p>
            </div>

          </div>


          <div className="career-value career-reveal">

            <span>02</span>

            <div>
              <h3>
                Own Your Work
              </h3>

              <p>
                We take responsibility, care about the details
                and push every project forward.
              </p>
            </div>

          </div>


          <div className="career-value career-reveal">

            <span>03</span>

            <div>
              <h3>
                Keep Learning
              </h3>

              <p>
                Technology changes fast. We stay curious,
                experiment and keep improving.
              </p>
            </div>

          </div>


          <div className="career-value career-reveal">

            <span>04</span>

            <div>
              <h3>
                Build Together
              </h3>

              <p>
                Great outcomes come from collaboration,
                trust and different perspectives.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* OPEN POSITIONS */}

      <section className="career-openings">

        <div className="career-openings-top career-reveal">

          <div>

            <span>
              04 — OPPORTUNITIES
            </span>

            <h2>
              Open
              <br />
              <em>positions.</em>
            </h2>

          </div>

          <p>
            Find a role where your skills, ideas and
            ambition can make an impact.
          </p>

        </div>


        <div className="career-roles">

          {roles.map((role) => (

            <div
              className="career-role career-reveal"
              key={role.number}
            >

              <span className="career-role-number">
                {role.number}
              </span>


              <div className="career-role-main">

                <h3>
                  {role.title}
                </h3>

                <div className="career-role-meta">

                  <span>
                    {role.type}
                  </span>

                  <span>
                    {role.location}
                  </span>

                </div>

              </div>


              <span className="career-role-arrow">
                ↗
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* GENERAL APPLICATION */}

      <section className="career-apply career-reveal">

     

        <div className="career-apply-content">

          <span>
            05 - DON'T SEE YOUR ROLE?
          </span>

          <h2>
            Tell us
            <br />
            <em>what you can do.</em>
          </h2>

          <p>
            We're always interested in meeting talented people.
            Send us your profile and tell us how you could
            contribute to Code6.
          </p>

        </div>


        <a
          href="mailto:careers@code6technologies.com"
          className="career-apply-button"
        >

          <span>
            SEND YOUR PROFILE
          </span>

          <strong>
            ↗
          </strong>

        </a>

      </section>


      {/* BOTTOM CTA */}

      <section className="career-bottom career-reveal">

        <div>

          <span>
            READY TO BUILD THE FUTURE?
          </span>

          <h2>
            Your next chapter
            <br />
            <em>could start here.</em>
          </h2>

        </div>

        <Link
          to="/contact"
          className="career-bottom-button"
        >
          GET IN TOUCH
          <span>↗</span>
        </Link>

      </section>

    </main>
    </>
  );
}