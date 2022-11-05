import React from "react";
import "../styles/banner.css";

const Banner = ({ photo, title }) => {
  return (
    <div className="banner">
      <img src={photo} alt="photo_montagne" className="banner_photo" />
      <h2 className="banner_text">{title}</h2>
    </div>
  );
};

export default Banner;
