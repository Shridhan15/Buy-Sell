import React from "react";
import "./Explore.css";
import dummyProducts from "../assets/assets.js";

const Explore = () => {
  return (
    <div className="explore-page">
      <h1 className="title">Explore Products</h1>
      <div className="product-list">
        {dummyProducts.map((product, index) => (
          <div className="product-card shadow" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>
                <strong>Purchase Date:</strong> {product.purchaseDate}
              </p>
              <p>
                <strong>Used Duration:</strong> {product.usedDuration}
              </p>
              <p>
                <strong>Selling Price:</strong> ₹{product.price}
              </p>
              <p className="condition">
                <strong>Condition:</strong> {product.condition}
              </p>
            </div>
          </div>
        ))}
      </div>

       
    </div>
  );
};

export default Explore;
