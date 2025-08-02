import React from "react";
import Marquee from "react-fast-marquee";
import "./ItemsMarque.css";
import dummyProducts from "../../assets/assets";

const ItemsMarquee = () => {
  return (
    <section className="mWrapper">
      <h2 className="mTitle">Listed Items</h2>
      <Marquee pauseOnHover speed={50} gradient={false} className="mContainer">
        {dummyProducts.map((item, index) => (
          <div className="mItem" key={index}>
            <img src={item.image} alt={item.name} className="mItemImage" />
            <p className="mItemName">{item.name}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ItemsMarquee;
