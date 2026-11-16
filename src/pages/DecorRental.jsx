import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  X,
  ShoppingBag,
  Eye,
  Plus,
  Check,
  Heart,
  LayoutGrid,
  Flower2,
  Armchair,
  Table2,
  Sparkles,
  Lightbulb,
  Tent,
  Utensils,
  Speaker,
  MoreHorizontal,
  MessageCircle,
  CalendarDays,
  PackageCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./DecorRental.css";

const products = [
  {
    id: 1,
    name: "Floral Backdrop Setup",
    category: "Backdrops",
    price: 3500,
    purchasePrice: 18000,
    type: "Rental",
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    description:
      "An elegant floral backdrop designed to create a beautiful focal point for wedding ceremonies and celebrations.",
    dimensions: "Custom setup",
    includes: "Backdrop frame and decorative styling",
  },
  {
    id: 2,
    name: "Outdoor String Lights",
    category: "Lighting",
    price: 1200,
    purchasePrice: 7500,
    type: "Rental",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85",
    description:
      "Warm decorative lighting that creates a magical atmosphere for outdoor celebrations.",
    dimensions: "Custom length",
    includes: "String lights and basic installation",
  },
  {
    id: 3,
    name: "Round Table & Chair Set",
    category: "Seating",
    price: 500,
    purchasePrice: 3500,
    type: "Rental",
    badge: "Best Choice",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85",
    description:
      "A coordinated table and chair arrangement for elegant event seating.",
    dimensions: "Standard event setup",
    includes: "Table and chair arrangement",
  },
  {
    id: 4,
    name: "Mandap / Stage Setup",
    category: "Wedding Décor",
    price: 5000,
    purchasePrice: 35000,
    type: "Rental",
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=85",
    description:
      "A beautifully styled stage setup for wedding ceremonies and special occasions.",
    dimensions: "Custom stage size",
    includes: "Stage structure and decorative styling",
  },
  {
    id: 5,
    name: "LED Letter Lights (LOVE)",
    category: "Lighting",
    price: 1000,
    purchasePrice: 6000,
    type: "Rental",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
    description:
      "Decorative illuminated letters that create a memorable highlight for celebrations.",
    dimensions: "Custom letter arrangement",
    includes: "LED letter display",
  },
  {
    id: 6,
    name: "Round Ring Backdrop",
    category: "Backdrops",
    price: 1800,
    purchasePrice: 12000,
    type: "Rental",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85",
    description:
      "A stylish circular backdrop with decorative floral styling for photographs and events.",
    dimensions: "Custom ring size",
    includes: "Ring frame and basic floral styling",
  },
  {
    id: 7,
    name: "Red Carpet & Stanchion",
    category: "Others",
    price: 800,
    purchasePrice: 4500,
    type: "Rental",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85",
    description:
      "A welcoming red carpet arrangement for entrances and special event occasions.",
    dimensions: "Custom carpet length",
    includes: "Carpet and entrance barriers",
  },
  {
    id: 8,
    name: "Event Tent / Canopy",
    category: "Tents & Canopy",
    price: 4000,
    purchasePrice: 28000,
    type: "Rental",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85",
    description:
      "A spacious canopy arrangement suitable for outdoor functions and celebrations.",
    dimensions: "Custom tent size",
    includes: "Tent structure and basic setup",
  },
];

const categories = [
  { name: "All Items", icon: LayoutGrid },
  { name: "Backdrops", icon: Flower2 },
  { name: "Seating", icon: Armchair },
  { name: "Tables", icon: Table2 },
  { name: "Décor", icon: Sparkles },
  { name: "Lighting", icon: Lightbulb },
  { name: "Tents & Canopy", icon: Tent },
  { name: "Catering Setup", icon: Utensils },
  { name: "Audio & Visual", icon: Speaker },
  { name: "Others", icon: MoreHorizontal },
];

const DecorRental = () => {
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // LOAD PRODUCTS ALREADY IN CART
  const [cartProductIds, setCartProductIds] = useState(() => {
    try {
      const cart = JSON.parse(
        localStorage.getItem("goodluck_cart") || "[]"
      );

      return Array.isArray(cart)
        ? cart.map((item) => item.id)
        : [];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState([]);

  // SYNC CART PRODUCTS
  useEffect(() => {
    const syncCartProducts = () => {
      try {
        const cart = JSON.parse(
          localStorage.getItem("goodluck_cart") || "[]"
        );

        setCartProductIds(
          Array.isArray(cart)
            ? cart.map((item) => item.id)
            : []
        );
      } catch {
        setCartProductIds([]);
      }
    };

    window.addEventListener("cartUpdated", syncCartProducts);
    window.addEventListener("storage", syncCartProducts);

    return () => {
      window.removeEventListener("cartUpdated", syncCartProducts);
      window.removeEventListener("storage", syncCartProducts);
    };
  }, []);

  // FILTER PRODUCTS
  const filteredProducts =
    activeCategory === "All Items"
      ? products
      : products.filter((product) => {
          if (activeCategory === "Décor") {
            return [
              "Wedding Décor",
              "Birthday Décor",
              "Floral Décor",
            ].includes(product.category);
          }

          return product.category === activeCategory;
        });

  // ADD TO CART
  const addToCart = (product) => {
    let existingCart = [];

    try {
      existingCart = JSON.parse(
        localStorage.getItem("goodluck_cart") || "[]"
      );

      if (!Array.isArray(existingCart)) {
        existingCart = [];
      }
    } catch {
      existingCart = [];
    }

    const existingItem = existingCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: (Number(item.quantity) || 1) + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity: 1,
          rentalDays: 1,
        },
      ];
    }

    localStorage.setItem(
      "goodluck_cart",
      JSON.stringify(updatedCart)
    );

    setCartProductIds(
      updatedCart.map((item) => item.id)
    );

    window.dispatchEvent(new Event("cartUpdated"));
  };

  // FAVORITES
  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  return (
    <main className="decor-page">

      {/* HERO SECTION */}

      <section className="decor-hero">
        <div className="decor-hero-content">
          <span className="section-eyebrow">
            DÉCOR & RENTAL
          </span>

          <h1>
            Event Décor &
            <br />
            <span>Rental Essentials</span>
          </h1>

          <p>
            Premium décor setups and event materials available
            for rent or purchase to make your event truly special.
          </p>

          <div className="decor-hero-actions">
            <a
              href="#decor-categories"
              className="decor-primary-button"
            >
              Browse Categories
              <ArrowRight size={17} />
            </a>

            <Link
              to="/contact"
              className="decor-secondary-button"
            >
              Enquiry Now
            </Link>
          </div>
        </div>

        <div className="decor-hero-image">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=90"
            alt="Elegant wedding event decoration"
          />
        </div>
      </section>

      {/* CATEGORY SECTION */}

      <section
        className="decor-category-section"
        id="decor-categories"
      >
        <div className="decor-section-heading">
          <span className="heading-line"></span>
          <h2>Browse by Category</h2>
          <span className="heading-line"></span>
        </div>

        <div className="decor-category-list">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                className={`decor-category-item ${
                  activeCategory === category.name ? "active" : ""
                }`}
                onClick={() =>
                  setActiveCategory(category.name)
                }
              >
                <Icon size={25} strokeWidth={1.7} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* PRODUCT COLLECTION */}

      <section
        className="decor-collection"
        id="decor-products"
      >
        <div className="decor-collection-heading">
          <div className="decor-section-heading">
            <span className="heading-line"></span>
            <h2>Our Décor & Rental Collection</h2>
            <span className="heading-line"></span>
          </div>

          <p>
            Explore our range of décor items and rental materials
            for every occasion.
          </p>
        </div>

        <div className="decor-collection-toolbar">
          <span>
            Showing <strong>{filteredProducts.length}</strong> items
          </span>

          <Link to="/cart" className="decor-cart-link">
            <ShoppingBag size={18} />
            View Cart
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="decor-product-grid">
          {filteredProducts.map((product) => {
            const isAdded = cartProductIds.includes(product.id);

            return (
              <article
                className="decor-product-card"
                key={product.id}
              >
                <div className="decor-product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                  {product.badge && (
                    <span className="product-badge">
                      {product.badge}
                    </span>
                  )}

                  <span className="product-type">
                    {product.type}
                  </span>

                  <button
                    className={`product-favorite ${
                      favorites.includes(product.id) ? "liked" : ""
                    }`}
                    onClick={() => toggleFavorite(product.id)}
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      size={19}
                      fill={
                        favorites.includes(product.id)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>

                  <button
                    className="product-preview-icon"
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`Preview ${product.name}`}
                  >
                    <Eye size={19} />
                  </button>
                </div>

                <div className="decor-product-info">
                  <span className="product-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <div className="product-price">
                    <div>
                      <strong>
                        ₹{product.price.toLocaleString("en-IN")}
                      </strong>

                      <small>
                        / {product.type === "Rental" ? "day" : "item"}
                      </small>
                    </div>

                    {product.purchasePrice && (
                      <div className="purchase-price">
                        <span>Buy</span>
                        <strong>
                          ₹{product.purchasePrice.toLocaleString("en-IN")}
                        </strong>
                      </div>
                    )}
                  </div>

                  <div className="product-buttons">
                    <button
                      className="preview-button"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <Eye size={15} />
                      Preview
                    </button>

                    <button
                      className={`add-cart-button ${
                        isAdded ? "product-added" : ""
                      }`}
                      onClick={() => addToCart(product)}
                    >
                      {isAdded ? (
                        <>
                          <Check size={16} />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={15} />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <ShoppingBag size={35} />
            <h3>Coming Soon</h3>
            <p>
              Products for this category will be available soon.
            </p>
            <button
              onClick={() => setActiveCategory("All Items")}
            >
              View All Items
            </button>
          </div>
        )}
      </section>

      {/* HOW IT WORKS */}

      <section className="decor-how-section">
        <div className="decor-section-heading">
          <span className="heading-line"></span>
          <h2>How Our Rental Works</h2>
          <span className="heading-line"></span>
        </div>

        <p className="decor-how-subtitle">
          A simple way to find and book the perfect event essentials.
        </p>

        <div className="decor-how-grid">
          <div className="decor-how-card">
            <div className="decor-how-icon">
              <LayoutGrid size={27} />
            </div>
            <span>01</span>
            <h3>Browse & Select</h3>
            <p>
              Explore our collection and choose the items
              that suit your event.
            </p>
          </div>

          <div className="decor-how-card">
            <div className="decor-how-icon">
              <ShoppingBag size={27} />
            </div>
            <span>02</span>
            <h3>Add to Cart</h3>
            <p>
              Add your preferred décor items and review
              your selections.
            </p>
          </div>

          <div className="decor-how-card">
            <div className="decor-how-icon">
              <MessageCircle size={27} />
            </div>
            <span>03</span>
            <h3>Send Enquiry</h3>
            <p>
              Share your selected items through WhatsApp
              to discuss your booking.
            </p>
          </div>

          <div className="decor-how-card">
            <div className="decor-how-icon">
              <PackageCheck size={27} />
            </div>
            <span>04</span>
            <h3>Confirm & Celebrate</h3>
            <p>
              Finalise the arrangements and get ready
              for your special occasion.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}

      <section className="decor-bottom-cta">
        <div className="decor-cta-content">
          <span className="section-eyebrow">
            MAKE IT MEMORABLE
          </span>

          <h2>
            Let's Make Your
            <br />
            <span>Event Beautiful.</span>
          </h2>

          <p>
            Find the perfect décor pieces and bring your
            celebration vision to life.
          </p>

          <Link
            to="/contact"
            className="decor-primary-button"
          >
            Plan Your Event
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="decor-cta-image">
          <img
            src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1000&q=85"
            alt="Beautifully decorated event table"
          />
        </div>
      </section>

      {/* PRODUCT PREVIEW MODAL */}

      {selectedProduct && (
        <div
          className="product-modal-backdrop"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close preview"
            >
              <X size={21} />
            </button>

            <div className="modal-image">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />
            </div>

            <div className="modal-content">
              <span className="section-eyebrow">
                {selectedProduct.category}
              </span>

              <h2>{selectedProduct.name}</h2>

              <p className="modal-description">
                {selectedProduct.description}
              </p>

              <div className="modal-detail">
                <span>Type</span>
                <strong>{selectedProduct.type}</strong>
              </div>

              <div className="modal-detail">
                <span>Dimensions</span>
                <strong>{selectedProduct.dimensions}</strong>
              </div>

              <div className="modal-detail">
                <span>Includes</span>
                <strong>{selectedProduct.includes}</strong>
              </div>

              <div className="modal-price">
                <strong>
                  ₹{selectedProduct.price.toLocaleString("en-IN")}
                </strong>
                <span>
                  / {selectedProduct.type === "Rental" ? "day" : "item"}
                </span>
              </div>

              <button
                className={`decor-primary-button modal-add-button ${
                  cartProductIds.includes(selectedProduct.id)
                    ? "product-added"
                    : ""
                }`}
                onClick={() => addToCart(selectedProduct)}
              >
                {cartProductIds.includes(selectedProduct.id) ? (
                  <>
                    <Check size={17} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    Add to Cart
                    <ShoppingBag size={17} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default DecorRental;