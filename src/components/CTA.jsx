import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import "../styles/CTA.css";

export default function CTA() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`premium-cta ${visible ? "cta-show" : ""}`}
    >
      <div className="premium-cta-container">

        {/* TOP BAR */}
        <div className="premium-cta-top">

          <div className="premium-cta-label">
            <span>07</span>
            <p>LET'S WORK TOGETHER</p>
          </div>

          <div className="premium-cta-status">
            <span className="status-dot" />
            AVAILABLE FOR SELECT PROJECTS
          </div>

        </div>


        {/* MAIN CONTENT */}
        <div className="premium-cta-main">

          <div className="premium-cta-left">

            <span className="premium-cta-kicker">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's build
              
              something
              <br />
              <em>remarkable.</em>
            </h2>

          </div>


          <div className="premium-cta-right">

            <div className="premium-cta-line">
              <span />
            </div>

            <p>
              Great digital experiences begin
              with a great conversation.
              Tell us what you're building,
              and let's make it happen.
            </p>

            <a
              href="mailto:moorthiwebdesigner@gmail.com"
              className="premium-cta-button"
            >
              <span>START A PROJECT</span>

              <div className="premium-cta-button-icon">
                <FiArrowUpRight />
              </div>
            </a>

          </div>

        </div>


        {/* DECORATIVE ELEMENT */}
        <div className="premium-cta-orbit">
          <span className="orbit-one" />
          <span className="orbit-two" />
          <span className="orbit-dot" />
        </div>


        {/* BOTTOM */}
        <div className="premium-cta-bottom">

          <div>
            CODE6 TECHNOLOGIES
          </div>

          <div>
            STRATEGY · DESIGN · DEVELOPMENT
          </div>

          <div>
            INDIA · 2026
          </div>

          <FiArrowDownRight className="cta-bottom-arrow" />

        </div>

      </div>
    </section>
  );
}