import React from "react";
import "../styles/card.css";

const card = ({ images, title }) => {
  return (
    <div className="card">
      <img src={images} alt="fond" className="cardimage" />
      <div className="cardoverlay"> </div>
      <h2 className="cardtitle">{title}</h2>
    </div>
  );
};
export default card;
