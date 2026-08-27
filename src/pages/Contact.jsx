import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import SEO from "../components/SEO";

export default function Contact() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".contact-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
             <SEO
  title="Contact Code6 Technologies | Start Your Digital Project"
  description="Have a digital project in mind? Contact Code6 Technologies to discuss your ideas and build a powerful digital solution."
/>
    <main className="contact-page">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="contact-background">

        <div className="contact-grid"></div>

        <div className="contact-glow contact-glow-one"></div>

        <div className="contact-glow contact-glow-two"></div>

        <div className="contact-orbit">
          <span></span>
        </div>

      </div>


      {/* =================================================
          HERO
      ================================================= */}

      <section className="contact-hero">

        <div className="contact-hero-top">

          <div className="contact-section-label">

            <span>08</span>

            <strong>
              CONTACT US
            </strong>

          </div>

          <div className="contact-status">

            <span></span>

            AVAILABLE FOR NEW PROJECTS

          </div>

        </div>


        <div className="contact-hero-content contact-reveal">

          <div className="contact-hero-copy">

            <p>
              HAVE AN IDEA IN MIND?
            </p>

            <h1>
              Let's build
              <br />
              <em>what's next.</em>
            </h1>

          </div>


          <div className="contact-hero-side">

            <span>
              01 — START
            </span>

            <p>
              From ambitious ideas to meaningful digital
              experiences, let's create something that
              moves your business forward.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          CONTACT AREA
      ================================================= */}

      <section className="contact-area">

        {/* LEFT INFORMATION */}

        <div className="contact-information contact-reveal">

          <div className="contact-info-heading">

            <span>
              LET'S TALK
            </span>

            <h2>
              Have a project?
              <br />
              <em>Let's make it real.</em>
            </h2>

          </div>


          <p className="contact-info-description">
            Tell us what you're building, what you're
            solving, or where you want to go. We'll help
            you find the right digital direction.
          </p>


          <div className="contact-details">

            <a
              href="mailto:hello@code6technologies.com"
              className="contact-detail"
            >

              <div>
                <span>EMAIL</span>
                <strong>
                  moorthiwebdesigner@gmail.com
                </strong>
              </div>

              <span className="contact-detail-arrow">
                ↗
              </span>

            </a>


            <a
              href="tel:+919000000000"
              className="contact-detail"
            >

              <div>
                <span>PHONE</span>
                <strong>
                  +91 96293 01506
                </strong>
              </div>

              <span className="contact-detail-arrow">
                ↗
              </span>

            </a>


            <div className="contact-detail">

              <div>
                <span>LOCATION</span>
                <strong>
                  Chennai, Tamilnadu, INDIA
                </strong>
              </div>

              <span className="contact-detail-number">
                03
              </span>

            </div>

          </div>

        </div>


        {/* =================================================
            FORM CARD
        ================================================= */}

        <div className="contact-card contact-reveal">

          <div className="contact-card-top">

            <div>

              <span>
                PROJECT INQUIRY
              </span>

              <strong>
                01 / 01
              </strong>

            </div>

            <span className="contact-card-mark">
              C6
            </span>

          </div>


          <form className="contact-form">

            <div className="contact-row">

              <div className="contact-field">

                <label>
                  YOUR NAME
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                />

              </div>


              <div className="contact-field">

                <label>
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                />

              </div>

            </div>


            <div className="contact-field">

              <label>
                COMPANY / ORGANIZATION
              </label>

              <input
                type="text"
                name="company"
                placeholder="Your company"
              />

            </div>


            <div className="contact-field">

              <label>
                WHAT CAN WE HELP WITH?
              </label>

              <select name="service">

                <option value="">
                  Select a service
                </option>

                <option value="web">
                  Web Development
                </option>

                <option value="mobile">
                  Mobile App Development
                </option>

                <option value="uiux">
                  UI / UX Design
                </option>

                <option value="digital">
                  Digital Solutions
                </option>

                <option value="other">
                  Something Else
                </option>

              </select>

            </div>


            <div className="contact-field">

              <label>
                TELL US ABOUT YOUR PROJECT
              </label>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your idea, goals and timeline..."
              />

            </div>


            <button
              type="submit"
              className="contact-submit"
            >

              <span>
                SEND PROJECT INQUIRY
              </span>

              <strong>
                ↗
              </strong>

            </button>

          </form>

        </div>

      </section>


      {/* =================================================
          BOTTOM CTA
      ================================================= */}

      <section className="contact-cta contact-reveal">

        

        <div className="contact-cta-content">

          <span>
            HAVE SOMETHING BIG IN MIND?
          </span>

          <h2>
            Let's create
            <br />
            <em>something great.</em>
          </h2>

        </div>

        <Link
          to="/projects"
          className="contact-cta-button"
        >

          <span>
            EXPLORE OUR WORK
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