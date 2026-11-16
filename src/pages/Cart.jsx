import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  CalendarDays,
  MapPin,
  Info,
  ShieldCheck,
  CalendarCheck,
  Zap,
  Headset,
  Layers,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./Cart.css";

// Replace with the client's actual WhatsApp number.
// Format: Country code + mobile number.
const WHATSAPP_NUMBER = "91 6369817256";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    eventDate: "",
    venue: "",
    eventType: "",
    requirements: "",
  });

  const eventTypes = [
    "Wedding",
    "Birthday",
    "Engagement",
    "Baby Shower",
    "Anniversary",
    "Corporate",
    "Reception",
    "Other Events",
  ];

useEffect(() => {
  try {
    const savedCart = JSON.parse(
      localStorage.getItem("goodluck_cart") || "[]"
    );

    const validCart = Array.isArray(savedCart)
      ? savedCart.map((item) => ({
          ...item,
          quantity: Math.max(1, Number(item.quantity) || 1),
          rentalDays: Math.max(1, Number(item.rentalDays) || 1),
        }))
      : [];

    setCartItems(validCart);

    window.dispatchEvent(new Event("cartUpdated"));
  } catch (error) {
    console.error("Unable to load cart:", error);
    setCartItems([]);
    localStorage.setItem("goodluck_cart", "[]");
    window.dispatchEvent(new Event("cartUpdated"));
  }
}, []);

  const saveCart = (updatedCart) => {
    setCartItems(updatedCart);

    localStorage.setItem(
      "goodluck_cart",
      JSON.stringify(updatedCart)
    );

    // Immediately update Navbar cart badge
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    saveCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, item.quantity - 1),
          }
        : item
    );

    saveCart(updatedCart);
  };

  const updateRentalDays = (id, days) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            rentalDays: Math.max(1, Number(days) || 1),
          }
        : item
    );

    saveCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    saveCart(updatedCart);
  };

  const clearCart = () => {
    if (!window.confirm("Are you sure you want to clear your cart?")) {
      return;
    }

    saveCart([]);
  };

  const getItemTotal = (item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;

    const duration =
      item.type === "Rental"
        ? Number(item.rentalDays) || 1
        : 1;

    return price * quantity * duration;
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + getItemTotal(item),
    0
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + (Number(item.quantity) || 1),
    0
  );

  const rentalDays = cartItems.reduce(
    (maximum, item) =>
      item.type === "Rental"
        ? Math.max(maximum, Number(item.rentalDays) || 1)
        : maximum,
    0
  );

  const formatPrice = (price) =>
    `₹${Number(price).toLocaleString("en-IN")}`;

  const handleCustomerChange = (event) => {
    const { name, value } = event.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleWhatsAppEnquiry = (event) => {
    event.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (WHATSAPP_NUMBER.includes("X")) {
      alert(
        "Please configure the business WhatsApp number in Cart.jsx."
      );
      return;
    }

    const productDetails = cartItems
      .map((item, index) => {
        const duration =
          item.type === "Rental"
            ? `${item.rentalDays || 1} day(s)`
            : "Purchase";

        return `
${index + 1}. ${item.name}
   Category: ${item.category || "Décor"}
   Type: ${item.type}
   Quantity: ${item.quantity}
   Duration: ${duration}
   Price: ${formatPrice(getItemTotal(item))}
`;
      })
      .join("\n");

    const message = `
Hello Good Luck Event Management!

I would like to enquire about the following products:

${productDetails}

--------------------------------

Estimated Total: ${formatPrice(subtotal)}

ENQUIRY DETAILS

Name: ${customer.name}
Phone: ${customer.phone}
Event Date: ${customer.eventDate || "Not specified"}
Event Type: ${customer.eventType || "Not specified"}
Event Location: ${customer.venue || "Not specified"}

Additional Requirements:
${customer.requirements || "Not specified"}

Please contact me regarding availability and final pricing.

Thank you!
`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="cart-page">

      {/* HERO */}
      <section className="cart-hero">

        <div className="cart-hero-decoration cart-hero-left">
          <ShoppingBag size={38} />
        </div>

        <span className="cart-hero-eyebrow">
          <ShoppingBag size={18} />
          YOUR CART
        </span>

        <h1>
          Review & <span>Enquire</span>
        </h1>

        <p>
          Check your selected items, update quantities and
          send a quick enquiry on WhatsApp to book or get
          a custom quote.
        </p>

      </section>

      {/* CART CONTENT */}
      <section className="cart-content">

        {cartItems.length === 0 ? (

          /* EMPTY CART */
          <div className="empty-cart">

            <div className="empty-cart-icon">
              <ShoppingBag size={38} />
            </div>

            <span className="section-eyebrow">
              YOUR COLLECTION
            </span>

            <h2>Your cart is waiting.</h2>

            <p>
              You haven't added any décor or rental products yet.
              Explore our collection and select your favourites.
            </p>

            <Link
              to="/decor-rental"
              className="cart-primary-button"
            >
              Explore Décor & Rental
              <ArrowRight size={17} />
            </Link>

          </div>

        ) : (

          <div className="cart-layout">

            {/* LEFT SIDE */}
            <div className="cart-left-column">

              {/* SELECTED ITEMS */}
              <div className="cart-items-card">

                <div className="cart-items-heading">

                  <div className="cart-heading-title">
                    <ShoppingBag size={29} />

                    <h2>
                      Selected Items ({totalQuantity})
                    </h2>
                  </div>

                  <button
                    type="button"
                    className="cart-clear-button"
                    onClick={clearCart}
                  >
                    <Trash2 size={16} />
                    Clear Cart
                  </button>

                </div>

                <div className="cart-items-list">

                  {cartItems.map((item) => (

                    <article
                      className="cart-item"
                      key={item.id}
                    >

                      {/* PRODUCT IMAGE */}
                      <div className="cart-item-image">

                        <img
                          src={item.image}
                          alt={item.name}
                        />

                      </div>

                      {/* PRODUCT DETAILS */}
                      <div className="cart-item-details">

                        <h3>{item.name}</h3>

                        <p className="cart-item-description">
                          {item.description ||
                            "Premium event décor and rental collection."}
                        </p>

                        <span className="cart-item-category">
                          {item.category || "Décor / Setup"}
                        </span>

                      </div>

                      {/* PRICE */}
                      <div className="cart-item-pricing">

                        <div className="cart-price-option">

                          <span className="cart-price-label">
                            {item.type === "Rental"
                              ? "Rent"
                              : "Purchase"}
                          </span>

                          <strong>
                            {formatPrice(item.price)}
                          </strong>

                          <small>
                            {item.type === "Rental"
                              ? "/ day"
                              : "/ item"}
                          </small>

                        </div>

                        {item.type === "Rental" && (
                          <div className="cart-rental-control">

                            <label
                              htmlFor={`days-${item.id}`}
                            >
                              Rental Days
                            </label>

                            <input
                              id={`days-${item.id}`}
                              type="number"
                              min="1"
                              value={item.rentalDays || 1}
                              onChange={(event) =>
                                updateRentalDays(
                                  item.id,
                                  event.target.value
                                )
                              }
                            />

                          </div>
                        )}

                      </div>

                      {/* QUANTITY AND REMOVE */}
                      <div className="cart-item-actions">

                        <div className="quantity-control">

                          <button
                            type="button"
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>

                        </div>

                        <strong className="cart-item-total">
                          {formatPrice(getItemTotal(item))}
                        </strong>

                        <button
                          type="button"
                          className="remove-item"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={17} />
                        </button>

                      </div>

                    </article>

                  ))}

                </div>

                <Link
                  to="/decor-rental"
                  className="continue-shopping"
                >
                  <ArrowLeft size={16} />
                  Continue Shopping
                </Link>

              </div>

              {/* IMPORTANT NOTE */}
              <div className="cart-important-note">

                <div className="cart-important-heading">
                  <Info size={25} />
                  <h3>Important Note</h3>
                </div>

                <ul>
                  <li>
                    The above prices are for reference and may vary
                    based on event date, location and quantity.
                  </li>

                  <li>
                    This is an enquiry request, not an online payment.
                  </li>

                  <li>
                    Our team will confirm availability and send
                    the final quotation on WhatsApp.
                  </li>
                </ul>

                <div className="cart-note-decoration">
                  <Layers size={75} />
                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <aside className="cart-summary">

              {/* SUMMARY */}
              <div className="cart-summary-heading">

                <Layers size={31} />

                <h2>Cart Summary</h2>

              </div>

              <div className="summary-row">
                <span>Items ({totalQuantity})</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>

              {rentalDays > 0 && (
                <div className="summary-row">
                  <span>Rental Duration</span>
                  <strong>
                    {rentalDays} Day(s)
                  </strong>
                </div>
              )}

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Estimated Total (Rent / Purchase)</span>

                <strong>
                  {formatPrice(subtotal)}
                </strong>
              </div>

              <p className="summary-note">
                Final price will be confirmed on WhatsApp.
                Delivery, setup and additional charges may apply.
              </p>

              {/* ENQUIRY FORM */}
              <form
                className="cart-customer-form"
                onSubmit={handleWhatsAppEnquiry}
              >

                <div className="cart-form-heading">
                  <CalendarDays size={28} />
                  <h3>Enquiry Details</h3>
                </div>

                {/* NAME */}
                <div className="cart-form-field">

                  <label htmlFor="customer-name">
                    Your Name *
                  </label>

                  <input
                    id="customer-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={customer.name}
                    onChange={handleCustomerChange}
                    required
                  />

                </div>

                {/* PHONE */}
                <div className="cart-form-field">

                  <label htmlFor="customer-phone">
                    Phone Number *
                  </label>

                  <input
                    id="customer-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={customer.phone}
                    onChange={handleCustomerChange}
                    pattern="[0-9+\-\s()]{7,20}"
                    title="Enter a valid phone number"
                    required
                  />

                </div>

                {/* EVENT DATE */}
                <div className="cart-form-field">

                  <label htmlFor="customer-date">
                    Event Date *
                  </label>

                  <div className="cart-input-icon">
                    <CalendarDays size={16} />

                    <input
                      id="customer-date"
                      type="date"
                      name="eventDate"
                      min={new Date().toISOString().split("T")[0]}
                      value={customer.eventDate}
                      onChange={handleCustomerChange}
                      required
                    />
                  </div>

                </div>

                {/* EVENT TYPE */}
                <div className="cart-form-field">

                  <label htmlFor="customer-event-type">
                    Event Type *
                  </label>

                  <select
                    id="customer-event-type"
                    name="eventType"
                    value={customer.eventType}
                    onChange={handleCustomerChange}
                    required
                  >
                    <option value="">
                      Select event type
                    </option>

                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}

                  </select>

                </div>

                {/* EVENT LOCATION */}
                <div className="cart-form-field">

                  <label htmlFor="customer-venue">
                    Event Location *
                  </label>

                  <div className="cart-input-icon">
                    <MapPin size={16} />

                    <input
                      id="customer-venue"
                      type="text"
                      name="venue"
                      placeholder="Enter event location"
                      value={customer.venue}
                      onChange={handleCustomerChange}
                      required
                    />
                  </div>

                </div>

                {/* REQUIREMENTS */}
                <div className="cart-form-field">

                  <label htmlFor="customer-requirements">
                    Additional Requirements
                  </label>

                  <textarea
                    id="customer-requirements"
                    name="requirements"
                    rows="4"
                    placeholder="Tell us about your event requirements..."
                    value={customer.requirements}
                    onChange={handleCustomerChange}
                  />

                </div>

                {/* WHATSAPP BUTTON */}
                <button
                  type="submit"
                  className="cart-whatsapp-button"
                >
                  <MessageCircle size={19} />
                  Send Enquiry on WhatsApp
                  <ArrowRight size={18} />
                </button>

                <p className="cart-no-payment">
                  No online payment required.
                  Our team will contact you through WhatsApp.
                </p>

              </form>

            </aside>

          </div>

        )}

      </section>

      {/* BOTTOM BENEFITS */}
      <section className="cart-benefits">

        <div className="cart-benefit-item">

          <ShieldCheck size={34} />

          <h3>Quality Décor</h3>

          <p>
            Premium and well-maintained items for every event.
          </p>

        </div>

        <div className="cart-benefit-item">

          <CalendarCheck size={34} />

          <h3>Flexible Rental</h3>

          <p>
            Rent or purchase as per your need.
          </p>

        </div>

        <div className="cart-benefit-item">

          <Zap size={34} />

          <h3>Quick Response</h3>

          <p>
            Get a fast quote and availability on WhatsApp.
          </p>

        </div>

        <div className="cart-benefit-item">

          <Headset size={34} />

          <h3>Event Support</h3>

          <p>
            Our team will assist you from enquiry to setup.
          </p>

        </div>

      </section>

    </main>
  );
};

export default Cart;