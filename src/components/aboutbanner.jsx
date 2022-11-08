import React from "react";
import "../styles/aboutbanner.css";
import image from "../images/aboutbackground.png";

function AboutBanner() {
  return (
    <div className="aboutbannerbackground">
      <img src={image} alt="" />
    </div>
  );
}

export default AboutBanner;
