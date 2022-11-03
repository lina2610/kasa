import React from "react";
import "../styles/banner.css";
import photo from "../images/IMG.png";

function Banner() {
  const title = "kasa banner";
  return (
    <div className="banner">
      <img src={photo} alt="photo_montagne" className="banner_photo" />
      <h1 className="banner_text">{title}</h1>
    </div>
  );
}

export default Banner;
