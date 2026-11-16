import React from "react";
import {
  ArrowRight,
  Cake,
  Gift,
  PartyPopper,
  Building2,
  Heart,
  CalendarDays,
  Flower2,
  Wine,
  Package,
  Users,
  Star,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./Home.css";

const categories = [
  { title: "Wedding", icon: Heart },
  { title: "Birthday", icon: Cake },
  { title: "Celebration", icon: PartyPopper },
  { title: "Corporate", icon: Building2 },
  { title: "Engagement", icon: Gift },
  { title: "Others", icon: CalendarDays },
];

const services = [
  {
    title: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Birthday",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Celebration",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Corporate",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85",
  },
];

const whyChoose = [
  { title: "Creative Setups", icon: Star },
  { title: "Quality Assurance", icon: ShieldCheck },
  { title: "On-Time Execution", icon: Clock },
  { title: "Client Satisfaction", icon: Heart },
];

const Home = () => {
  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-decoration hero-decoration-top">❧</div>
        <div className="hero-decoration hero-decoration-bottom">❧</div>

        <div className="hero-content">
          <span className="section-eyebrow">
            EVENT MANAGEMENT
          </span>

          <h1>
            Create
            <br />
            Memorable
            <br />
            Moments
          </h1>

          <p>
            Elegant setups, premium décor & rental solutions
            for all your special occasions.
          </p>

          <div className="hero-actions">
            <Link to="/events" className="primary-button">
              Explore Our Events <ArrowRight size={17} />
            </Link>

            <Link to="/contact" className="secondary-button">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=90"
            alt="Elegant wedding stage with beautiful event decoration"
          />
          <div className="hero-image-overlay"></div>
          <div className="hero-slider-dots">
            <span className="active"></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* EVENT CATEGORIES */}
      <section className="category-strip">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              to="/events"
              className="category-item"
              key={category.title}
            >
              <Icon size={29} strokeWidth={1.5} />
              <span>{category.title}</span>
            </Link>
          );
        })}
      </section>

      {/* WHAT WE DO */}
      <section className="home-what-we-do">

        <div className="what-we-do-images">
          <div className="what-image what-image-one">
            <img
              src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=85"
              alt="Outdoor wedding decoration"
            />
          </div>

          <div className="what-image what-image-two">
            <img
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=700&q=85"
              alt="Birthday party decoration"
            />
          </div>

          <div className="what-image what-image-three">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=700&q=85"
              alt="Elegant wedding setup"
            />
          </div>
        </div>

        <div className="what-we-do-content">
          <span className="section-eyebrow">WHAT WE DO</span>

          <h2>Plan · Decorate · Execute</h2>

          <p>
            From intimate celebrations to grand occasions,
            we bring your vision to life with creativity,
            quality and care.
          </p>

          <div className="what-services">
            <div className="what-service-item">
              <Flower2 />
              <span>Event Planning</span>
            </div>

            <div className="what-service-item">
              <Wine />
              <span>Décor & Setup</span>
            </div>

            <div className="what-service-item">
              <Package />
              <span>Rental Materials</span>
            </div>

            <div className="what-service-item">
              <Users />
              <span>On-Site Support</span>
            </div>
          </div>

          <Link to="/about" className="primary-button">
            Know More About Us <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="home-featured">
        <div className="center-section-heading">
          <div className="heading-line"></div>
          <h2>Our Featured Events</h2>
          <div className="heading-line"></div>
        </div>

        <p className="featured-subtitle">
          Tailored event experiences for every occasion.
        </p>

        <div className="featured-grid">
          {services.map((service) => (
            <Link
              to="/events"
              className="featured-card"
              key={service.title}
            >
              <div className="featured-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="featured-card-info">
                <h3>{service.title}</h3>
                <span>
                  <ArrowRight size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="home-why-choose">
        <div className="why-heading">
          <h2>Why Choose Good Luck?</h2>
          <p>
            We focus on the details, so you can enjoy the moment.
          </p>
        </div>

        <div className="why-features">
          {whyChoose.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="why-feature" key={feature.title}>
                <Icon size={34} strokeWidth={1.5} />
                <span>{feature.title}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-cta">
        <div className="cta-background-image"></div>

        <div className="cta-content">
          <div>
            <h2>Let’s Plan Your Next Event</h2>
            <p>
              Tell us your idea, and we'll make it a beautiful reality.
            </p>
          </div>

          <Link to="/contact" className="primary-button">
            Contact Us Now <ArrowRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Home;
