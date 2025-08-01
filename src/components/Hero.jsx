import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="animated-bg"></div>

      <div className="hero-content">
        <h1>
          <span className="text-animate-delay">Buy & Sell College </span>
          <span className="text-animate-delay-2 blink-text">Essentials</span>
        </h1>
        <p className="text-animate-delay-3">
          Find or sell books, gadgets, furniture & more within your campus.
        </p>
        <div className="hero-buttons text-animate-delay-4">
          <button onClick={() => navigate("/explore")}>Explore Listings</button>
          <button onClick={() => navigate("/post")}>Post a Product</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
