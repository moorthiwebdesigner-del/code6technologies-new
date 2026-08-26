import { useEffect, useState } from "react";
import "../styles/Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      number: "01",
      quote:
        "Code6 transformed our digital presence with a clean, modern website that truly represents our brand.",
      name: "Arun Kumar",
      role: "Founder & CEO",
      company: "Apex Solutions",
    },
    {
      number: "02",
      quote:
        "From strategy to development, the entire process was professional, smooth and focused on our business goals.",
      name: "Priya Raj",
      role: "Managing Director",
      company: "Nova Industries",
    },
    {
      number: "03",
      quote:
        "The final product exceeded our expectations. The design feels premium and the website performs beautifully.",
      name: "Vignesh S",
      role: "Founder",
      company: "Urban Ventures",
    },
  ];

  const [active, setActive] = useState(0);

  const nextTestimonial = () => {
    setActive((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section className="testimonials-section">

      <div className="testimonials-inner">

        {/* HEADER */}

        <div className="testimonials-header">

          <div className="testimonials-label">
            <span className="section-number">06</span>
            <strong>TESTIMONIALS</strong>
          </div>
<div className="testimonials-heading">
          <p>
            Trusted by businesses
        
            that value great work.
          </p>

<h2>Testimonials</h2>
</div>
        </div>


        {/* MAIN */}

        <div className="testimonial-main">

          {/* LEFT */}

          <div className="testimonial-mark">
            “
          </div>


          {/* CONTENT */}

          <div className="testimonial-content">

            <div
              key={testimonial.number}
              className="testimonial-animate"
            >

              <span className="testimonial-number">
                {testimonial.number}
              </span>

              <blockquote>
                {testimonial.quote}
              </blockquote>

              <div className="testimonial-client">

                <div className="client-line" />

                <div>
                  <h3>
                    {testimonial.name}
                  </h3>

                  <p>
                    {testimonial.role}
                    <span> · </span>
                    {testimonial.company}
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* NAVIGATION */}

          <div className="testimonial-navigation">

            <div className="testimonial-count">

              <strong>
                {String(active + 1).padStart(2, "0")}
              </strong>

              <span>/</span>

              <span>
                {String(testimonials.length).padStart(2, "0")}
              </span>

            </div>


            <div className="testimonial-progress">

              <span
                style={{
                  width: `${
                    ((active + 1) /
                      testimonials.length) *
                    100
                  }%`,
                }}
              />

            </div>


            <div className="testimonial-buttons">

              <button
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >
                ←
              </button>

              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                →
              </button>

            </div>

          </div>

        </div>


        {/* FOOTER */}

        <div className="testimonials-footer">

          <span>
            CLIENT VOICE · TRUST · EXPERIENCE
          </span>

          <span>
            CODE6 TECHNOLOGIES
          </span>

        </div>

      </div>

    </section>
  );
}