import React from "react";
import "../styles/banner.css";
import image from "../images/IMG.png";

function Banner() {
  return (
    <div className="banner">
      <img src={image} alt=" " />
      <h2 className="banner_text"> Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
