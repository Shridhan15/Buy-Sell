import React from "react";
import Marquee from "react-fast-marquee";
import "./ItemsMarque.css";
import dummyProducts from "../assets/assets";

const ItemsMarquee = () => {
  return (
    <section className="m-wrapper">
      <h2 className="m-title">Listed Items</h2>
      <Marquee pauseOnHover speed={50} gradient={false}>
        {dummyProducts.map((item, index) => (
          <div className="m-item" key={index}>
            <img src={item.image} alt={item.name} />
            <p className="m-item-name">{item.name}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ItemsMarquee;
