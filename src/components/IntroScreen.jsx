import React, { useEffect, useState } from "react";
import { Leaf } from "lucide-react";
import "./IntroScreen.css";

const IntroScreen = () => {
  const [showIntro, setShowIntro] = useState(
    window.location.pathname === "/"
  );

  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <div className="intro-screen">
      <div className="intro-content">
        <div className="intro-logo-icon">
          <Leaf size={34} strokeWidth={1.3} />
        </div>

        <h1 className="intro-logo-text">Good Luck</h1>

        <div className="intro-divider">
          <span></span>
          <span className="intro-diamond">✦</span>
          <span></span>
        </div>

        <p className="intro-tagline">
          EVENTS • DECOR • CELEBRATIONS
        </p>

        <div className="intro-loader">
          <span></span>
        </div>
      </div>

      <div className="intro-bottom-text">
        CREATING MOMENTS THAT LAST FOREVER
      </div>
    </div>
  );
};

export default IntroScreen;