import React from "react";
import "./ItemMarquee.css";
import { dummyProducts } from "../assets/assets";

const ItemsMarque = () => {
  return (
    <section>
      <h2 style={{ color: "#fff", textAlign: "center", margin: "30px 0" }}>Listed Items</h2>
      <div className="marquee-container">
        <div className="marquee-track">
          {dummyProducts.concat(dummyProducts).map((product, index) => (
            <div key={index} className="marquee-item">
              <img src={product.image} alt={product.name} />
              <div className="marquee-item-name">{product.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemsMarque;
