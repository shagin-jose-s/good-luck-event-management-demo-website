import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Heart,
  Gift,
  PartyPopper,
  Building2,
  Lightbulb,
  CalendarDays,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Blog.css";

const articles = [
  {
    id: "elegant-weddings",
    category: "WEDDING",
    filter: "Weddings",
    date: "Nov 10, 2026",
    readTime: "5 min read",
    title: "Creating an Elegant Wedding Celebration",
    description:
      "Discover how thoughtful décor, beautiful arrangements and carefully selected details can transform a wedding celebration into a memorable experience.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=90",
    
  },
  {
    id: "birthday-decoration",
    category: "BIRTHDAY",
    filter: "Birthday",
    date: "Nov 05, 2026",
    readTime: "4 min read",
    title: "Beautiful Birthday Décor Ideas",
    description:
      "Explore creative birthday decoration ideas, attractive backdrops and special touches that make every birthday celebration feel unique.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=90",
    
  },
  {
    id: "event-table-styling",
    category: "EVENT DÉCOR",
    filter: "Celebration",
    date: "Nov 01, 2026",
    readTime: "6 min read",
    title: "The Art of Beautiful Table Styling",
    description:
      "From centrepieces to table arrangements, discover how small decorative details can create a beautiful setting for your special occasion.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=90",
    
  },
  {
    id: "special-celebrations",
    category: "CELEBRATIONS",
    filter: "Celebration",
    date: "Oct 28, 2026",
    readTime: "5 min read",
    title: "Making Every Special Occasion Meaningful",
    description:
      "Every occasion deserves its own atmosphere. Find inspiration for creating beautiful celebrations with thoughtful planning and personal details.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=90",
    
  },
];

const categories = [
  { label: "All Posts", icon: Sparkles },
  { label: "Weddings", icon: Heart },
  { label: "Birthday", icon: Gift },
  { label: "Celebration", icon: PartyPopper },
  { label: "Corporate", icon: Building2 },
  { label: "Tips & Guides", icon: Lightbulb },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All Posts") {
      return articles;
    }

    return articles.filter(
      (article) => article.filter === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="blog-page">
      {/* BLOG HEADER */}

      <section className="blog-heading-section">
        <div className="blog-heading-decoration blog-decoration-left">
          <Sparkles />
        </div>

        <div className="blog-heading-decoration blog-decoration-right">
          <Sparkles />
        </div>

        <span className="blog-heading-eyebrow">
          <span />
          OUR BLOG
          <span />
        </span>

        <h1>Event Ideas, Tips & Inspiration</h1>

        <p>
          Explore expert tips, creative ideas and the latest trends
          to plan your perfect event.
        </p>
      </section>

      {/* CATEGORY FILTERS */}

      <section className="blog-filter-section">
        <div className="blog-filters">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                type="button"
                key={category.label}
                className={
                  activeCategory === category.label ? "active" : ""
                }
                onClick={() => setActiveCategory(category.label)}
              >
                {category.label !== "All Posts" && (
                  <Icon size={19} />
                )}

                {category.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* BLOG ARTICLES */}

      <section className="blog-articles-section">
        {filteredArticles.length > 0 ? (
          <div className="blog-article-list">
            {filteredArticles.map((article, index) => (
              <article
                className={`blog-article-card ${
                  index % 2 !== 0 ? "blog-article-reverse" : ""
                }`}
                key={article.id}
              >
                <Link
                  to={`/blog/${article.id}`}
                  className="blog-card-image"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                  />

                  <span className="blog-image-number">
                    {article.number}
                  </span>

                  <span className="blog-image-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </Link>

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span>
                      <CalendarDays size={15} />
                      {article.date}
                    </span>

                    <span>
                      <Clock3 size={15} />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="blog-card-category">
                    {article.category}
                    <span>•</span>
                    EVENT INSPIRATION
                  </div>

                  <h2>{article.title}</h2>

                  <p>{article.description}</p>

                  <Link
                    to={`/blog/${article.id}`}
                    className="blog-explore-button"
                  >
                    Explore
                    <ArrowRight size={19} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-empty-state">
            <Sparkles size={35} />
            <h3>Something exciting is coming soon.</h3>
            <p>
              We are preparing more stories and inspiration for this
              category. Check back soon!
            </p>
            <button onClick={() => setActiveCategory("All Posts")}>
              View All Posts
            </button>
          </div>
        )}
      </section>

      {/* CTA */}

      <section className="blog-cta">
        <span className="blog-cta-eyebrow">
          HAVE SOMETHING SPECIAL IN MIND?
        </span>

        <h2>
          Let's make your
          <br />
          next moment beautiful.
        </h2>

        <p>Tell us about the celebration you're planning.</p>

        <Link to="/contact" className="blog-cta-button">
          Plan Your Event
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
};

export default Blog;