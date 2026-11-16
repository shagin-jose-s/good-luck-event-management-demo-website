import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarDays,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Headphones,
  ShieldCheck,
  Star,
  User,
  Users,
  Wallet,
  List,
  Send,
} from "lucide-react";
import "./Contact.css";

// Replace with the actual business WhatsApp number.
// Format: 919876543210
const WHATSAPP_NUMBER = "91 6369817256";

// Replace with actual business details
const BUSINESS = {
  phone: "+91 6369817256",
  email: "goodluckdecorator@gmail.com",
  instagram: "@goodluck_events",
  instagramUrl: "https://instagram.com/",
  address: "18, School St, Janakiraman Colony, Koyambedu, Chennai, Tamil Nadu 600107",
  mapQuery: "18, School St, Janakiraman Colony, Koyambedu, Chennai, Tamil Nadu 600107",
};

const Contact = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: location.state?.eventType || "",
    eventDate: "",
    venue: "",
    guests: "",
    budget: "",
    requirements: "",
  });

  const eventTypes = [
    "Wedding",
    "Birthday",
    "Celebration",
    "Corporate",
    "Engagement",
    "Baby Shower",
    "Anniversary",
    "Other Events",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (WHATSAPP_NUMBER.includes("X")) {
      alert("Please configure the business WhatsApp number in Contact.jsx.");
      return;
    }

    const message = `
Hello Good Luck Event Management!

I would like to enquire about an event.

PERSONAL INFORMATION

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

EVENT DETAILS

Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Venue: ${formData.venue}
Expected Guests: ${formData.guests}
Estimated Budget: ${formData.budget || "Not specified"}

ADDITIONAL REQUIREMENTS

${formData.requirements || "Not specified"}

Please contact me with further details.
    `;

    const whatsappURL = `https://wa.me/${6369817256}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const openWhatsApp = () => {
    if (WHATSAPP_NUMBER.includes("X")) {
      alert("Please configure the business WhatsApp number.");
      return;
    }

    window.open(
      `https://wa.me/${6369817256}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const today = new Date().toLocaleDateString("en-CA");

  return (
    <main className="contact-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="contact-hero">

        <div className="contact-hero-decoration contact-hero-left">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=85"
            alt=""
          />
        </div>

        <div className="contact-hero-content">

          <div className="contact-eyebrow">
            <span />
            CONTACT US
            <span />
          </div>

          <h1>
            Let's Plan <em>Your Next Event</em>
          </h1>

          <p>
            Have a celebration in mind? Reach out to us for event planning,
            décor, rentals or any custom requirements. We're here to help!
          </p>

        </div>

        <div className="contact-hero-decoration contact-hero-right">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=700&q=85"
            alt=""
          />
        </div>

      </section>


      {/* =====================================
          MAIN CONTACT CONTENT
      ===================================== */}

      <section className="contact-main">

        {/* LEFT COLUMN */}

        <div className="contact-left-column">

          {/* ENQUIRY FORM */}

          <div className="contact-card contact-form-card">

            <div className="contact-form-heading">

              <div className="contact-form-title-icon">
                <Mail size={39} />
              </div>

              <div>
                <h2>Send Us an Enquiry</h2>
                <p>
                  Fill in the details and our team will get back to you shortly.
                </p>
              </div>

            </div>


            <form onSubmit={handleSubmit}>

              {/* SECTION 01 */}

              <div className="contact-form-section">

                <div className="contact-section-heading">
                  <span>01</span>
                  <h3>Your Information</h3>
                </div>

                <div className="contact-form-grid">

                  <div className="contact-field">

                    <label htmlFor="name">
                      Full Name <span>*</span>
                    </label>

                    <div className="contact-input-wrap">
                      <User size={17} />

                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>


                  <div className="contact-field">

                    <label htmlFor="phone">
                      Phone Number <span>*</span>
                    </label>

                    <div className="contact-input-wrap">
                      <Phone size={17} />

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9+\-\s()]{7,20}"
                        required
                      />
                    </div>

                  </div>


                  <div className="contact-field contact-full-width">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <div className="contact-input-wrap">
                      <Mail size={17} />

                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                  </div>

                </div>

              </div>


              {/* SECTION 02 */}

              <div className="contact-form-section">

                <div className="contact-section-heading">
                  <span>02</span>
                  <h3>Event Details</h3>
                </div>

                <div className="contact-form-grid">

                  <div className="contact-field">

                    <label htmlFor="eventType">
                      Event Type <span>*</span>
                    </label>

                    <div className="contact-input-wrap contact-select-wrap">
                      <List size={17} />

                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select event type</option>

                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}

                      </select>
                    </div>

                  </div>


                  <div className="contact-field">

                    <label htmlFor="eventDate">
                      Event Date <span>*</span>
                    </label>

                    <div className="contact-input-wrap">
                      <CalendarDays size={17} />

                      <input
                        id="eventDate"
                        type="date"
                        name="eventDate"
                        min={today}
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>


                  <div className="contact-field contact-full-width">

                    <label htmlFor="venue">
                      Event Venue / Location <span>*</span>
                    </label>

                    <div className="contact-input-wrap">
                      <MapPin size={17} />

                      <input
                        id="venue"
                        type="text"
                        name="venue"
                        placeholder="Enter event venue or location"
                        value={formData.venue}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>


                  <div className="contact-field">

                    <label htmlFor="guests">
                      Expected Guest Count <span>*</span>
                    </label>

                    <div className="contact-input-wrap">
                      <Users size={17} />

                      <input
                        id="guests"
                        type="number"
                        name="guests"
                        placeholder="Number of guests"
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>


                  <div className="contact-field">

                    <label htmlFor="budget">
                      Estimated Budget
                    </label>

                    <div className="contact-input-wrap contact-select-wrap">
                      <Wallet size={17} />

                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Select your budget</option>
                        <option value="Below ₹25,000">Below ₹25,000</option>
                        <option value="₹25,000 - ₹50,000">
                          ₹25,000 - ₹50,000
                        </option>
                        <option value="₹50,000 - ₹1,00,000">
                          ₹50,000 - ₹1,00,000
                        </option>
                        <option value="₹1,00,000 - ₹3,00,000">
                          ₹1,00,000 - ₹3,00,000
                        </option>
                        <option value="Above ₹3,00,000">
                          Above ₹3,00,000
                        </option>
                        <option value="Discuss later">
                          Discuss later
                        </option>
                      </select>
                    </div>

                  </div>

                </div>

              </div>


              {/* SECTION 03 */}

              <div className="contact-form-section">

                <div className="contact-section-heading">
                  <span>03</span>
                  <h3>Additional Requirements</h3>
                </div>

                <div className="contact-field">

                  <label htmlFor="requirements">
                    Tell us more about your celebration
                  </label>

                  <textarea
                    id="requirements"
                    name="requirements"
                    rows="5"
                    placeholder="Describe your ideas, theme, decoration preferences or other requirements..."
                    value={formData.requirements}
                    onChange={handleChange}
                  />

                </div>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit-button"
              >
                <Send size={19} />
                Send Enquiry via WhatsApp
                <ArrowRight size={19} />
              </button>

              <p className="contact-form-note">
                Your enquiry details will be prepared as a WhatsApp message
                for the business.
              </p>

            </form>

          </div>


          {/* GOOGLE MAP */}

          <div className="contact-card contact-map-card">

            <iframe
              title="Good Luck Event Management Location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                BUSINESS.mapQuery
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

          </div>

        </div>


        {/* RIGHT COLUMN */}

        <div className="contact-right-column">

          {/* GET IN TOUCH */}

          <div className="contact-card contact-info-card">

            <h2>Get in Touch</h2>


            <div className="contact-info-item">

              <div className="contact-info-icon">
                <Phone size={22} />
              </div>

              <div>
                <h3>Call Us</h3>
                <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}>
                  {BUSINESS.phone}
                </a>
              </div>

            </div>


            <div className="contact-info-item">

              <div className="contact-info-icon">
                <MessageCircle size={22} />
              </div>

              <div>
                <h3>WhatsApp</h3>

                <button
                  type="button"
                  className="contact-text-link"
                  onClick={openWhatsApp}
                >
                  {WHATSAPP_NUMBER}
                </button>
              </div>

            </div>


            <div className="contact-info-item">

              <div className="contact-info-icon">
                <InstagramIcon />
              </div>

              <div>
                <h3>Instagram</h3>

                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {BUSINESS.instagram}
                </a>
              </div>

            </div>


            <div className="contact-info-item">

              <div className="contact-info-icon">
                <MapPin size={23} />
              </div>

              <div>
                <h3>Our Location</h3>
                <p>{BUSINESS.address}</p>
              </div>

            </div>

          </div>


          {/* BUSINESS HOURS */}

          <div className="contact-card contact-hours-card">

            <div className="contact-hours-heading">
              <CalendarDays size={29} />
              <h2>Business Hours</h2>
            </div>

            <div className="contact-hours-row">
              <span>Monday - Saturday</span>
              <strong>9:00 AM - 8:00 PM</strong>
            </div>

            <div className="contact-hours-row">
              <span>Sunday</span>
              <strong>10:00 AM - 6:00 PM</strong>
            </div>

            <div className="contact-hours-divider" />

            <div className="contact-assistance-heading">
              <Headphones size={31} />

              <div>
                <h3>Need Quick Assistance?</h3>
                <p>
                  Chat with us on WhatsApp for faster responses.
                </p>
              </div>

            </div>

            <button
              type="button"
              className="contact-whatsapp-button"
              onClick={openWhatsApp}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
              <ArrowRight size={17} />
            </button>

          </div>

        </div>

      </section>


      {/* =====================================
          BOTTOM BENEFITS
      ===================================== */}

      <section className="contact-benefits">

        <div className="contact-benefit">
          <CalendarDays size={34} />
          <h3>Quick Response</h3>
          <p>We reply to all enquiries promptly.</p>
        </div>

        <div className="contact-benefit">
          <ShieldCheck size={34} />
          <h3>Trusted Service</h3>
          <p>Reliable event planning & rentals.</p>
        </div>

        <div className="contact-benefit">
          <MapPin size={34} />
          <h3>Local Support</h3>
          <p>Serving our local and nearby areas.</p>
        </div>

        <div className="contact-benefit">
          <Star size={34} />
          <h3>Custom Solutions</h3>
          <p>Flexible plans for every event.</p>
        </div>

      </section>

    </main>
  );
};

const InstagramIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="18" cy="6" r="0.8" fill="currentColor" />
  </svg>
);

export default Contact;
