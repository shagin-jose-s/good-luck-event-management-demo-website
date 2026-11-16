import React from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* SUBTLE SLOFY WATERMARK */}
      <div className="footer-watermark" aria-hidden="true">
        SLOFY ENTERPRISES
      </div>

      <div className="footer-container">
        {/* BRAND SECTION */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Leaf size={25} strokeWidth={1.4} />
            <span>Good Luck</span>
          </Link>

          <p className="footer-brand-description">
            Creating beautiful celebrations and unforgettable experiences
            with thoughtful details, elegant décor and exceptional care.
          </p>

          <div className="footer-social-links">
            <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
                </a>

          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <ul>
            <li><Link to="/events">Event Management</Link></li>
            <li><Link to="/decor-rental">Décor & Rental</Link></li>
            <li><Link to="/gallery">Event Styling</Link></li>
            <li><Link to="/decor-rental">Props & Materials</Link></li>
            <li><Link to="/events">Special Celebrations</Link></li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div className="footer-column footer-contact">
          <h3>Get In Touch</h3>

          <a href="tel:+91XXXXXXXXXX">
            <Phone size={17} />
            <span>Contact us for enquiries</span>
          </a>

          <Link to="/contact">
            <Mail size={17} />
            <span>Send an enquiry</span>
          </Link>

          <Link to="/contact">
            <MapPin size={17} />
            <span>Visit our contact page</span>
          </Link>
        </div>

        {/* CTA SECTION */}
        <div className="footer-cta">
          <span className="footer-eyebrow">LET'S CREATE SOMETHING SPECIAL</span>

          <h3>
            Your celebration,
            <br />
            our passion.
          </h3>

          <Link to="/contact" className="footer-cta-button">
            Plan Your Event
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {currentYear} Good Luck Event Management. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <Link to="/contact">Privacy Policy</Link>
          <span>•</span>
          <Link to="/contact">Terms & Conditions</Link>
        </div>

        <p className="footer-credit">
          Crafted with care
        </p>
      </div>
    </footer>
  );
};

export default Footer;