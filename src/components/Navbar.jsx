import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShoppingBag, Menu, X, Leaf } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navItems = [
    { name: "Home", path: "/", end: true },
    { name: "About Us", path: "/about" },
    { name: "Our Events", path: "/events" },
    { name: "Décor & Rental", path: "/decor-rental" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const updateCartCount = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("goodluck_cart")) || [];

      const count = cart.reduce(
        (total, item) => total + Number(item.quantity || 1),
        0
      );

      setCartCount(count);
    } catch {
      setCartCount(0);
    }
  };

  useEffect(() => {
    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <div className="brand-text">
            <h2>
              Good Luck
              <Leaf className="brand-leaf" size={17} />
            </h2>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* MOBILE CART */}
          <Link
            to="/cart"
            className="mobile-cart-link"
            onClick={closeMenu}
          >
            <ShoppingBag size={19} />
            <span>Cart ({cartCount})</span>
          </Link>
        </nav>

        {/* CART ICON */}
        <div className="navbar-actions">
          <Link
            to="/cart"
            className="cart-icon"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={21} />
            <span className="cart-badge">{cartCount}</span>
          </Link>
        </div>

        {/* MOBILE MENU */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;