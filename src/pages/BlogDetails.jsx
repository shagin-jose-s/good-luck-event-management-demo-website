import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Tag,
  List,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

import "./BlogDetails.css";

/* =========================================
   BLOG ARTICLES DATA
========================================= */

const articles = {
  "elegant-weddings": {
    category: "WEDDING",
    date: "Nov 10, 2026",
    readTime: "5 min read",

    title: "Creating an Elegant Wedding Celebration",

    subtitle:
      "Thoughtful details, beautiful styling and moments that last a lifetime.",

    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=90",

    introduction:
      "A wedding is more than a celebration. It is a gathering of people, emotions and memories. Every detail contributes to the atmosphere of this special day.",

    sections: [
      {
        heading: "Setting the Atmosphere",

        text:
          "The right décor helps establish the mood of a wedding. Thoughtful arrangements, coordinated details and beautiful surroundings can bring the celebration together.",

        images: [
          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
        ],
      },

      {
        heading: "The Beauty of Small Details",

        text:
          "Table styling, floral arrangements, lighting and decorative elements all play a role in creating a cohesive celebration.",

        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
        ],
      },

      {
        heading: "Creating a Personal Experience",

        text:
          "Every couple has a different vision. Combining personal preferences with thoughtful event styling helps create an experience that feels unique and meaningful.",

        images: [
          "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85",
        ],
      },
    ],

    highlights: [
      "Thoughtful event styling",
      "Beautiful floral arrangements",
      "Elegant table decorations",
      "A setting that reflects your vision",
    ],

    closing:
      "Every couple has a different vision. The best celebration is one that feels personal and meaningful to them.",
  },

  "birthday-decoration": {
    category: "BIRTHDAY",
    date: "Nov 05, 2026",
    readTime: "4 min read",

    title: "Beautiful Birthday Décor Ideas",

    subtitle:
      "Creative backdrops and decorative details for memorable birthday moments.",

    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1800&q=90",

    introduction:
      "A birthday celebration is an opportunity to create a setting that reflects the personality and style of the person being celebrated.",

    sections: [
      {
        heading: "Create a Celebration Backdrop",

        text:
          "A well-planned backdrop can become the visual centre of a birthday celebration and provide a beautiful space for photographs.",

        images: [
          "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=85",
        ],
      },

      {
        heading: "Bring the Details Together",

        text:
          "Coordinate the table arrangements, decorative elements and colour palette to create a consistent celebration theme.",

        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1533294455009-a7b22e0e0c8c?auto=format&fit=crop&w=1200&q=85",
        ],
      },
    ],

    highlights: [
      "Creative birthday themes",
      "Decorative backdrops",
      "Coordinated table styling",
      "Personalised celebration details",
    ],

    closing:
      "Whether simple or elaborate, a thoughtfully styled birthday celebration can create memories that stay with everyone.",
  },

  "event-table-styling": {
    category: "EVENT DÉCOR",
    date: "Nov 01, 2026",
    readTime: "6 min read",

    title: "The Art of Beautiful Table Styling",

    subtitle:
      "Discover how decorative details can transform an event table.",

    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=90",

    introduction:
      "Table styling is an important part of the overall event experience. It brings together colours, textures and decorative elements in one setting.",

    sections: [
      {
        heading: "Choose a Consistent Style",

        text:
          "Start with a clear visual direction. Coordinating the table elements with the overall event theme helps create a balanced appearance.",

        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
        ],
      },

      {
        heading: "Focus on the Centrepiece",

        text:
          "A centrepiece can become the focal point of a table. Choose decorative elements that complement the arrangement without overcrowding it.",

        images: [
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=85",
        ],
      },
    ],

    highlights: [
      "Coordinated table arrangements",
      "Decorative centrepieces",
      "Floral styling",
      "Balanced colour combinations",
    ],

    closing:
      "The smallest details can make a meaningful difference to the overall look and feel of an event.",
  },

  "special-celebrations": {
    category: "CELEBRATIONS",
    date: "Oct 28, 2026",
    readTime: "5 min read",

    title: "Making Every Special Occasion Meaningful",

    subtitle:
      "Thoughtful planning for the occasions that matter most.",

    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=90",

    introduction:
      "Every celebration has its own purpose and personality. The planning and styling should reflect what makes that occasion special.",

    sections: [
      {
        heading: "Understand the Occasion",

        text:
          "Begin by understanding the type of event, the people involved and the atmosphere you want to create.",

        images: [
          "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
        ],
      },

      {
        heading: "Bring Your Ideas Together",

        text:
          "Thoughtful coordination of décor, event arrangements and decorative details helps create a celebration that feels complete.",

        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",

          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85",
        ],
      },
    ],

    highlights: [
      "Personalised event concepts",
      "Creative decoration ideas",
      "Thoughtful planning",
      "Coordinated celebration details",
    ],

    closing:
      "Whatever the occasion, the goal is to create an experience that feels meaningful to the people celebrating it.",
  },
};

/* =========================================
   BLOG DETAILS COMPONENT
========================================= */

const BlogDetails = () => {
  const { id } = useParams();

  const article = articles[id];

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  /* Related articles */

  const relatedArticles = Object.entries(articles)
    .filter(([articleId]) => articleId !== id)
    .slice(0, 3);

  /* Share URL */

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  /* Copy link */

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Article link copied!");
    } catch {
      alert("Unable to copy the link. Please copy it from your browser.");
    }
  };

  /* WhatsApp share */

  const shareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(
        article.title + " " + shareUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* Facebook share */

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="blog-details-page">

      {/* =====================================
          ARTICLE HERO
      ===================================== */}

      <section className="blog-details-hero">

        <div className="blog-details-hero-inner">

          {/* Breadcrumb */}

          <div className="blog-details-breadcrumb">

            <Link to="/blog">
              <ArrowLeft size={14} />
              Back to Journal
            </Link>

            <span>/</span>

            <span className="breadcrumb-current">
              {article.category}
            </span>

          </div>

          {/* Article heading */}

          <div className="blog-details-heading">

            <span className="blog-details-eyebrow">
              ✧ {article.category}
            </span>

            <h1>{article.title}</h1>

            <p>{article.subtitle}</p>

            <div className="blog-details-meta">

              <span>
                <CalendarDays size={17} />
                {article.date}
              </span>

              <span>
                <Clock3 size={17} />
                {article.readTime}
              </span>

              <span>
                <Tag size={17} />
                {article.category}
              </span>

            </div>

          </div>

          {/* Featured image */}

          <div className="blog-details-hero-image">

            <img
              src={article.image}
              alt={article.title}
            />

          </div>

        </div>

      </section>


      {/* =====================================
          ARTICLE BODY + SIDEBAR
      ===================================== */}

      <section className="blog-details-layout">

        {/* ARTICLE CONTENT */}

        <article className="blog-details-content">

          {/* Introduction */}

          <div className="blog-introduction-wrapper">

            <span className="blog-content-eyebrow">
              THE STORY
            </span>

            <p
              className="blog-details-introduction"
              id="top"
            >
              {article.introduction}
            </p>

          </div>


          {/* Dynamic sections */}

          {article.sections.map((section, index) => (

            <section
              className="blog-article-section"
              key={`${section.heading}-${index}`}
              id={`section-${index + 1}`}
            >

              <div className="blog-section-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2 className="blog-content-heading">
                {section.heading}
              </h2>

              <p className="blog-content-paragraph">
                {section.text}
              </p>


              {/* Dynamic image gallery */}

              {section.images?.length > 0 && (

                <div className="blog-content-gallery">

                  {section.images.map((image, imageIndex) => (

                    <div
                      className="blog-content-image"
                      key={`${image}-${imageIndex}`}
                    >

                      <img
                        src={image}
                        alt={`${section.heading} - Image ${imageIndex + 1}`}
                        loading="lazy"
                      />

                    </div>

                  ))}

                </div>

              )}

            </section>

          ))}


          {/* Quick tips */}

          <section
            className="blog-highlights"
            id="quick-tips"
          >

            <div className="blog-highlights-heading">

              <div className="blog-highlights-icon">
                <Lightbulb size={25} />
              </div>

              <div>
                <span>THE DETAILS THAT MATTER</span>
                <h2>Ideas to take inspiration from.</h2>
              </div>

            </div>

            <div className="blog-highlights-list">

              {article.highlights.map((highlight, index) => (

                <div key={highlight}>

                  <span className="highlight-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <CheckCircle2 size={17} />

                  <p>{highlight}</p>

                </div>

              ))}

            </div>

          </section>


          {/* Conclusion */}

          <section
            id="conclusion"
            className="blog-conclusion"
          >

            <span className="blog-content-eyebrow">
              FINAL THOUGHTS
            </span>

            <h2>Making Every Moment Meaningful</h2>

            <p>{article.closing}</p>

          </section>

        </article>


        {/* =====================================
            SIDEBAR
        ===================================== */}

        <aside className="blog-details-sidebar">


          {/* Table of Contents */}

          <div className="blog-sidebar-card blog-toc">

            <div className="blog-sidebar-heading">

              <List size={22} />

              <h3>On This Page</h3>

            </div>

            <nav>

              <a href="#top">
                <span />
                Introduction
              </a>

              {article.sections.map((section, index) => (

                <a
                  href={`#section-${index + 1}`}
                  key={section.heading}
                >
                  <span />
                  {section.heading}
                </a>

              ))}

              <a href="#quick-tips">
                <span />
                Quick Tips
              </a>

              <a href="#conclusion">
                <span />
                Conclusion
              </a>

            </nav>

          </div>


          {/* Enquiry card */}

          <div className="blog-sidebar-card blog-enquiry-card">

            <div className="blog-enquiry-icon">
              <CalendarDays size={28} />
            </div>

            <span>LET'S PLAN TOGETHER</span>

            <h3>Planning an Event?</h3>

            <p>
              Get personalised décor and rental solutions
              for your special day.
            </p>

            <Link to="/contact">
              Enquire Now
              <ArrowUpRight size={17} />
            </Link>

          </div>


          {/* Related posts */}

          <div className="blog-related-posts">

            <span className="blog-content-eyebrow">
              KEEP EXPLORING
            </span>

            <h3>Related Stories</h3>

            {relatedArticles.map(([relatedId, related]) => (

              <Link
                to={`/blog/${relatedId}`}
                className="blog-related-card"
                key={relatedId}
              >

                <div className="blog-related-image">

                  <img
                    src={related.image}
                    alt={related.title}
                    loading="lazy"
                  />

                </div>

                <div className="blog-related-info">

                  <span>{related.category}</span>

                  <h4>{related.title}</h4>

                  <small>
                    <CalendarDays size={12} />
                    {related.date}
                  </small>

                </div>

              </Link>

            ))}

            <Link
              to="/blog"
              className="blog-view-all"
            >
              View All Stories
              <ArrowRight size={16} />
            </Link>

          </div>

        </aside>

      </section>


      {/* =====================================
          BOTTOM CTA
      ===================================== */}

      <section className="blog-details-cta">

        <span className="blog-details-cta-eyebrow">
          LET'S CREATE SOMETHING BEAUTIFUL
        </span>

        <h2>
          Planning a celebration
          <br />
          of your own?
        </h2>

        <p>
          Share your ideas with our team.
        </p>

        <Link
          to="/contact"
          className="blog-details-cta-button"
        >
          Enquire Now
          <ArrowUpRight size={18} />
        </Link>

      </section>


      {/* =====================================
          BACK TO BLOG
      ===================================== */}

      <div className="blog-details-back">

        <Link to="/blog">
          <ArrowLeft size={17} />
          Back to All Stories
        </Link>

      </div>

    </main>
  );
};

export default BlogDetails;