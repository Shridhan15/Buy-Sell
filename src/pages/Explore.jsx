import React from "react";
import "./Explore.css";
import dummyProducts from "../assets/assets.js";

const Explore = () => {
  return (
    <div className="explorePage">
      <h1 className="title">Explore Products</h1>
      <div className="prodList">
        {dummyProducts.map((product, index) => (
          <div className="prodCard shadow" key={index}>
            <div
              className="prodImgWrapper"
              onMouseMove={(e) => {
                const wrapper = e.currentTarget;
                const rect = wrapper.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                wrapper.style.setProperty("--x", `${x}px`);
                wrapper.style.setProperty("--y", `${y}px`);
                wrapper.classList.add("colorReveal");
              }}
              onMouseLeave={(e) => {
                const wrapper = e.currentTarget;
                wrapper.classList.remove("colorReveal");
              }}
            >
              <img src={product.image} alt={product.name} className="prodImg" />
            </div>

            <div className="prodInfo">
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
