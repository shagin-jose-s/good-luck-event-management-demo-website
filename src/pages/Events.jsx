import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  CalendarDays,
  Boxes,
  CalendarCheck,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./Events.css";

const events = [
  {
    id: "01",
    title: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "02",
    title: "Birthday",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "03",
    title: "Celebration",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "04",
    title: "Corporate",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "05",
    title: "Engagement",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "06",
    title: "Baby Shower",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "07",
    title: "Anniversary",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "08",
    title: "Other Events",
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1000&q=85",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discuss Your Idea",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Plan & Customize",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Setup & Prepare",
    icon: Boxes,
  },
  {
    number: "04",
    title: "Execute the Event",
    icon: CalendarCheck,
  },
  {
    number: "05",
    title: "Deliver Memorable Moments",
    icon: Heart,
  },
];

const BotanicalDecoration = ({ className = "" }) => (
  <svg
    className={`botanical-decoration ${className}`}
    viewBox="0 0 120 160"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M8 145C34 116 46 78 94 12"
      stroke="currentColor"
      strokeWidth="2"
    />

    <path
      d="M27 119C8 111 5 96 8 83C23 88 33 101 27 119Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    <path
      d="M40 99C22 83 24 67 32 55C46 68 50 84 40 99Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    <path
      d="M55 77C43 57 50 43 62 34C70 51 68 66 55 77Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    <path
      d="M72 52C67 32 79 19 93 16C96 34 88 47 72 52Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    <path
      d="M26 121C44 119 54 127 58 140C41 143 29 135 26 121Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    <path
      d="M46 91C64 85 77 92 82 105C64 111 51 104 46 91Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />

    <path
      d="M65 64C83 56 97 62 103 75C86 84 73 77 65 64Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

const Events = () => {
  return (
    <main className="events-page">

      {/* HERO SECTION */}

      <section className="events-hero">

        <BotanicalDecoration className="hero-botanical" />

        <div className="events-hero-content">

          <span className="events-eyebrow">
            OUR EVENTS
          </span>

          <h1>
            Tailored Celebrations
            <br />
            for Every Occasion
          </h1>

          <p>
            From intimate gatherings to grand celebrations,
            we plan and execute events that create lasting memories.
          </p>

          <div className="events-hero-actions">

            <Link to="/contact" className="events-primary-button">
              Get a Quote
              <ArrowRight size={17} />
            </Link>

            <a href="#event-categories" className="events-secondary-button">
              Explore Events
            </a>

          </div>

        </div>

        <div className="events-hero-image">

          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=90"
            alt="Beautifully decorated event venue"
          />

        </div>

      </section>


      {/* EVENT CATEGORIES */}

      <section
        className="events-categories"
        id="event-categories"
      >

        <BotanicalDecoration className="categories-botanical-left" />

        <BotanicalDecoration className="categories-botanical-right" />

        <div className="events-section-heading">

          <div className="heading-decoration"></div>

          <h2>Our Event Categories</h2>

          <div className="heading-decoration"></div>

          <p>
            Choose your occasion and let us bring it to life.
          </p>

        </div>


        <div className="event-categories-grid">

          {events.map((event) => (

            <article className="event-category-card" key={event.id}>

              <img
                src={event.image}
                alt={`${event.title} event`}
                loading="lazy"
              />

              <div className="event-category-overlay"></div>

              <div className="event-category-content">

                <h3>{event.title}</h3>

                <Link
                  to="/contact"
                  state={{ eventType: event.title }}
                  className="event-category-arrow"
                  aria-label={`Enquire about ${event.title}`}
                >
                  <ArrowUpRight size={19} />
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* EVENT PROCESS */}

      <section className="events-process">

        <div className="events-section-heading process-heading">

          <div className="heading-decoration"></div>

          <h2>Our Event Process</h2>

          <div className="heading-decoration"></div>

        </div>


        <div className="process-timeline">

          {processSteps.map((step, index) => {

            const StepIcon = step.icon;

            return (

              <React.Fragment key={step.number}>

                <div className="process-item">

                  <div className="process-icon">
                    <StepIcon size={37} strokeWidth={1.7} />
                  </div>

                  <h3>{step.title}</h3>

                </div>

                {index !== processSteps.length - 1 && (

                  <div className="process-arrow">
                    <ArrowRight size={20} />
                  </div>

                )}

              </React.Fragment>

            );

          })}

        </div>

      </section>

    </main>
  );
};

export default Events;