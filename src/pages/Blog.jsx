import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";

import "../styles/Blog.css";
import SEO from "../components/SEO";

const posts = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Building Digital Experiences That Actually Matter",
    excerpt:
      "How modern businesses can use thoughtful design and technology to create better digital experiences.",
    date: "AUG 24, 2026",
    read: "6 MIN READ",
    image: "/images/blog/blog-01.jpg",
    featured: true,
  },
  {
    number: "02",
    category: "UI / UX",
    title: "Why Simplicity Wins in Digital Product Design",
    excerpt:
      "A closer look at creating interfaces that feel simple, intuitive and purposeful.",
    date: "AUG 18, 2026",
    read: "5 MIN READ",
    image: "/images/blog/blog-02.jpg",
  },
  {
    number: "03",
    category: "TECHNOLOGY",
    title: "Technology Trends Shaping Modern Businesses",
    excerpt:
      "The technologies helping businesses move faster, work smarter and build better products.",
    date: "AUG 12, 2026",
    read: "7 MIN READ",
    image: "/images/blog/blog-03.jpg",
  },
  {
    number: "04",
    category: "BUSINESS",
    title: "From Idea to Digital Product",
    excerpt:
      "What it takes to transform an early idea into a scalable digital product.",
    date: "AUG 05, 2026",
    read: "5 MIN READ",
    image: "/images/blog/blog-04.jpg",
  },
  {
    number: "05",
    category: "MOBILE",
    title: "Designing Mobile Experiences for Real People",
    excerpt:
      "The fundamentals behind mobile products that people understand and enjoy using.",
    date: "JUL 29, 2026",
    read: "6 MIN READ",
    image: "/images/blog/blog-05.jpg",
  },
  {
    number: "06",
    category: "DIGITAL",
    title: "The Future of Digital Transformation",
    excerpt:
      "Why businesses need more than technology to successfully transform their digital presence.",
    date: "JUL 21, 2026",
    read: "8 MIN READ",
    image: "/images/blog/blog-06.jpg",
  },
];

export default function Blog() {
  useEffect(() => {
    const elements = document.querySelectorAll(".blog-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
              <SEO
  title="Code6 Technologies Blog | Technology, Design & Digital Insights"
  description="Read Code6 Technologies insights on web development, UI/UX design, mobile technology, digital transformation and modern business."
/>
    <main className="blog-page">

      {/* BACKGROUND */}

      <div className="blog-background">
        <div className="blog-grid"></div>

        <div className="blog-orb blog-orb-one"></div>
        <div className="blog-orb blog-orb-two"></div>

        <div className="blog-ring"><span></span></div>
      </div>


      {/* HERO */}

      <section className="blog-hero">

        <div className="blog-top-line">

          <div className="blog-label">
            <span>07</span>
            <strong>CODE6 JOURNAL</strong>
          </div>

          <div className="blog-meta">
            IDEAS / INSIGHTS / TECHNOLOGY
          </div>

        </div>


        <div className="blog-hero-content blog-reveal">

          <div>

            <p className="blog-eyebrow">
              INSIGHTS & STORIES
            </p>

            <h1>
              Ideas worth
              <br />
              <em>sharing.</em>
            </h1>

          </div>


          <div className="blog-hero-description">

            <span>01 - THOUGHTS FROM CODE6</span>

            <p>
              Insights on technology, design, digital
              experiences and the ideas shaping modern
              businesses.
            </p>

          </div>

        </div>

      </section>


      {/* FEATURED */}

      <section className="blog-featured blog-reveal">

        <div className="blog-featured-number">
          02
        </div>


        <article className="featured-card">

       <div className="featured-visual">
  <img
    src={posts[0].image}
    alt={posts[0].title}
  />

  <div className="featured-overlay"></div>

  <div className="featured-word">
    CODE6
  </div>
</div>

          <div className="featured-content">

            <div className="post-category">
              {posts[0].category}
            </div>

            <h2>
              {posts[0].title}
            </h2>

            <p>
              {posts[0].excerpt}
            </p>


            <div className="post-info">

              <span>
                <CalendarDays size={13} />
                {posts[0].date}
              </span>

              <span>
                <Clock3 size={13} />
                {posts[0].read}
              </span>

            </div>


            <Link
              to="/blog"
              className="read-button"
            >
              <span>READ ARTICLE</span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.4}
              />

            </Link>

          </div>

        </article>

      </section>


      {/* ALL ARTICLES */}

      <section className="blog-articles">

        <div className="blog-section-heading blog-reveal">

          <div>

            <span>03 — LATEST ARTICLES</span>

            <h2>
              Fresh
              <br />
              <em>thinking.</em>
            </h2>

          </div>

          <p>
            Explore our latest thoughts, practical
            insights and perspectives on the digital world.
          </p>

        </div>


        <div className="blog-post-grid">

          {posts.slice(1).map((post) => (
            <article
              className="blog-post-card blog-reveal"
              key={post.number}
            >

              {/* IMAGE / VISUAL */}

         <div className="post-visual">

  <img
    src={post.image}
    alt={post.title}
  />

  <div className="post-image-overlay"></div>

  <div className="post-visual-number">
    {post.number}
  </div>

  <div className="post-visual-label">
    {post.category}
  </div>

</div>

              {/* CONTENT */}

              <div className="post-card-content">

                <div className="post-card-top">

                  <span>
                    {post.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.3}
                  />

                </div>


                <div className="post-category">
                  {post.category}
                </div>


                <h3>
                  {post.title}
                </h3>

                <p>
                  {post.excerpt}
                </p>


                <div className="post-bottom">

                  <span>
                    {post.date}
                  </span>

                  <span>
                    {post.read}
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* NEWSLETTER CTA */}

      <section className="blog-newsletter blog-reveal">

        
        <div className="newsletter-content">

          <span>04 — STAY IN THE LOOP</span>

          <h2>
            Good ideas,
            <br />
            <em>delivered.</em>
          </h2>

          <p>
            Get occasional insights about technology,
            design and digital business directly in your inbox.
          </p>

        </div>


        <div className="newsletter-form">

          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            aria-label="Email address"
          />

          <button type="button">
            <span>SUBSCRIBE</span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.4}
            />
          </button>

        </div>

      </section>


      {/* CTA */}

      <section className="blog-cta blog-reveal">

        <div className="blog-cta-content">

          <span>HAVE SOMETHING IN MIND?</span>

          <h2>
            Let's create
            <br />
            something <em>great.</em>
          </h2>

        </div>


        <Link
          to="/contact"
          className="blog-cta-button"
        >
          <span>START A PROJECT</span>

          <ArrowUpRight
            size={20}
            strokeWidth={1.3}
          />

        </Link>

      </section>

    </main>
    </>
  );
}