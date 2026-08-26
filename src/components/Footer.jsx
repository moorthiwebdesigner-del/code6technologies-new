import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="premium-footer">

      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          <div className="footer-brand">

            <Link to="/" className="footer-logo">
  <img
    src={logo}
    alt="Code6 Technologies"
  />
</Link>

            <p>
              Digital experiences
              <br />
              built with purpose.
            </p>

          </div>


          {/* NAVIGATION */}
          <div className="footer-navigation">

            <div className="footer-column">

              <span className="footer-heading">
                COMPANY
              </span>

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>

            </div>


            <div className="footer-column">

              <span className="footer-heading">
                WORK
              </span>

              <Link to="/work">Projects</Link>
              <Link to="/technologies">Technologies</Link>
              <Link to="/testimonials">
                Testimonials
              </Link>

            </div>


            <div className="footer-column">

              <span className="footer-heading">
                CONNECT
              </span>

              <Link to="/contact">Contact</Link>

              <a href="#">
                Instagram
                <FiArrowUpRight />
              </a>

              <a href="https://www.linkedin.com/in/moorthi-arumugam-1aa3a229/">
                LinkedIn
                <FiArrowUpRight />
              </a>

            </div>

          </div>

        </div>


      


        {/* CONTACT ROW */}
        <div className="footer-contact">

          <div>

            <span className="footer-contact-label">
              START A CONVERSATION
            </span>

            <a
              href="mailto:moorthiwebdesigner@gmail.com"
              className="footer-email"
            >
              moorthiwebdesigner@gmail.com
              <FiArrowUpRight />
            </a>

          </div>


          <button
            className="footer-top-button"
            onClick={scrollTop}
          >
            BACK TO TOP

            <span>
              <FiArrowUpRight />
            </span>
          </button>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <span>
            © 2026 CODE6 TECHNOLOGIES
          </span>

          <span>
            STRATEGY · DESIGN · DEVELOPMENT
          </span>

          <span>
            INDIA
          </span>

        </div>

      </div>

    </footer>
  );
}