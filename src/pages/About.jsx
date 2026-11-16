import React from "react";
import {
  ArrowRight,
  CalendarDays,
  Users,
  Star,
  MapPin,
  Gem,
  ShieldCheck,
  Handshake,
  Heart,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./About.css";

const highlights = [
  {
    icon: CalendarDays,
    title: "Thoughtful Planning",
    description: "Every occasion",
  },
  {
    icon: Users,
    title: "Personal Support",
    description: "Client-focused",
  },
  {
    icon: Star,
    title: "Creative Styling",
    description: "Unique experiences",
  },
  {
    icon: MapPin,
    title: "Event Services",
    description: "For every occasion",
  },
];

const values = [
  {
    icon: Gem,
    title: "Creativity",
    description: "Unique ideas for every occasion.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description: "Premium materials and careful execution.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description: "Transparent, reliable and client-focused.",
  },
  {
    icon: Heart,
    title: "Memorable Experience",
    description: "Events that leave lasting memories.",
  },
];

const reasons = [
  "End-to-End Event Management",
  "Creative & Customized Setups",
  "High-Quality Décor & Rental Materials",
  "On-Time & Hassle-Free Execution",
  "Dedicated Support Throughout",
];

const About = () => {
  return (
    <main className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">

        <div className="about-hero-left-image">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=85"
            alt="Beautiful event floral decoration"
          />
        </div>

        <div className="about-hero-content">
          <span className="section-eyebrow">
            ABOUT US
          </span>

          <h1>About Good Luck</h1>

          <div className="about-title-line"></div>

          <p>
            We are a passionate event management team dedicated
            to creating unforgettable experiences. From elegant
            décor to complete event execution, we turn your ideas
            into beautifully organized and memorable celebrations.
          </p>

          <div className="about-hero-actions">
            <Link to="/events" className="primary-button">
              Our Events <ArrowRight size={17} />
            </Link>

            <Link to="/contact" className="secondary-button">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="about-hero-right-image">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1100&q=90"
            alt="Elegant wedding stage decoration"
          />
        </div>

        <div className="about-floral-decoration about-floral-left">
          ❧
        </div>

      </section>

      {/* OUR STORY */}
      <section className="about-story">

        <div className="about-story-content">
          <h2>Our Story</h2>

          <div className="about-title-line"></div>

          <p>
            Good Luck is built around a simple vision — to make
            every celebration stress-free, beautiful and truly
            special. We bring together creative ideas, thoughtful
            planning and attention to detail.
          </p>
        </div>

        <div className="about-highlight-grid">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article className="about-highlight-card" key={item.title}>
                <Icon size={34} strokeWidth={1.6} />

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>

      </section>

      {/* OUR VALUES */}
      <section className="about-values">

        <div className="about-floral-decoration values-floral-left">
          ❧
        </div>

        <div className="about-floral-decoration values-floral-right">
          ❧
        </div>

        <div className="about-section-heading">
          <div className="heading-line"></div>
          <h2>Our Values</h2>
          <div className="heading-line"></div>
        </div>

        <p className="about-section-subtitle">
          The principles that guide every event we create.
        </p>

        <div className="about-values-grid">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article className="about-value-card" key={value.title}>
                <Icon size={43} strokeWidth={1.6} />

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            );
          })}
        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why">

        <div className="about-why-image">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=90"
            alt="Beautifully arranged celebration table"
          />
        </div>

        <div className="about-why-content">

          <h2>Why Choose Us?</h2>

          <div className="about-title-line"></div>

          <div className="about-reasons-list">
            {reasons.map((reason) => (
              <div className="about-reason" key={reason}>
                <span>
                  <CheckCircle2 size={17} />
                </span>

                <p>{reason}</p>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <div className="about-cta-background"></div>

        <div className="about-cta-content">
          <div>
            <h2>Let's Create Your Next Celebration</h2>

            <p>
              Share your ideas with us, and we'll turn it into
              a beautiful reality.
            </p>
          </div>

          <Link to="/contact" className="primary-button">
            Get in Touch <ArrowRight size={17} />
          </Link>
        </div>

      </section>

    </main>
  );
};

export default About;