import Hero from "../components/Hero";
import ItemsMarque from "../components/ItemsMarque.jsx";
import Footer from "../components/Footer.jsx";
import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />

      <ItemsMarque />

      <Footer />
    </div>
  );
};

export default Home;
