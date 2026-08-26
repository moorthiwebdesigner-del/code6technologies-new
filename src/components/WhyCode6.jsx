import { useEffect, useRef, useState } from "react";
import {
  FiTarget,
  FiPenTool,
  FiCode,
  FiHeadphones,
} from "react-icons/fi";
import "../styles/WhyCode6.css";

export default function WhyCode6() {
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
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      number: "01",
      title: "Strategy",
      text: "Clear thinking before development. Every project starts with a strong digital direction.",
      icon: <FiTarget />,
    },
    {
      number: "02",
      title: "Premium Design",
      text: "Modern interfaces designed to create a memorable and meaningful brand experience.",
      icon: <FiPenTool />,
    },
    {
      number: "03",
      title: "Smart Development",
      text: "Fast, scalable and clean technology built around your business requirements.",
      icon: <FiCode />,
    },
    {
      number: "04",
      title: "Long-term Support",
      text: "We stay with your product beyond launch and help it grow with confidence.",
      icon: <FiHeadphones />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`why-code6 ${visible ? "why-visible" : ""}`}
    >
      <div className="why-code6-inner">

        <div className="why-code6-header">

          <div className="why-code6-label">
            <span>05</span>
            <strong>WHY CODE6</strong>
          </div>

          <div className="why-code6-intro">
            <p>More than technology.</p>

            <h2>
              We build
              
              <span> digital value.</span>
            </h2>
          </div>

        </div>

        <div className="why-code6-statement">

          <div className="why-statement-line" />

          <p>
            We don't just build websites.
           
            We build digital experiences
            <br />
            that move businesses forward.
          </p>

        </div>

        <div className="why-code6-grid">

          {reasons.map((reason, index) => (
            <article
              className="why-card"
              key={reason.number}
              style={{
                "--delay": `${index * 120}ms`,
              }}
            >

              <div className="why-card-top">

                <span className="why-card-number">
                  {reason.number}
                </span>

                <div className="why-card-icon">
                  {reason.icon}
                </div>

              </div>

              <div className="why-card-content">

                <h3>{reason.title}</h3>

                <p>{reason.text}</p>

              </div>

              <div className="why-card-bottom">

                <span>
                  CODE6 TECHNOLOGIES
                </span>

                <span className="why-card-arrow">
                  ↗
                </span>

              </div>

            </article>
          ))}

        </div>

        <div className="why-code6-footer">

          <span>
            STRATEGY · DESIGN · DEVELOPMENT · SUPPORT
          </span>

          <span>
            05 / 07
          </span>

        </div>

      </div>
    </section>
  );
}