import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import IntroScreen from "./components/IntroScreen";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import DecorRental from "./pages/DecorRental";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

import "./App.css";

function App() {
  const location = useLocation();

  // Hide footer only on Cart page
  const hideFooter = location.pathname.replace(/\/+$/, "") === "/cart";

  return (
    <>
      <ScrollToTop />

      <IntroScreen />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/decor-rental" element={<DecorRental />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

export default App;