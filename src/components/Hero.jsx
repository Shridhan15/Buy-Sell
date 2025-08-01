import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="heroSection">
      <div className="animatedBg"></div>

      <div className="heroContent">
        <h1>
          <span className="textAnimateDelay">Buy & Sell College </span>
          <span className="textAnimateDelay2 blinkText">Essentials</span>
        </h1>
        <p className="textAnimateDelay3">
          Find or sell books, gadgets, furniture & more within your campus.
        </p>
        <div className=" heroBtns textAnimateDelay4">
          <button onClick={() => navigate("/explore")}>Explore Listings</button>
          <button onClick={() => navigate("/post")}>Post a Product</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
