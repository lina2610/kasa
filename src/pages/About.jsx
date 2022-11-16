import React from "react";
import AboutBanner from "../components/Aboutbanner.jsx";
import "../styles/about.css";
import Collapse from "../components/Collapse.jsx";
import text from "../data/text.js";

const About = () => {
  const content = (title) => {
    switch (title) {
      case "fiability":
        return text.fiability;
      case "respect":
        return text.respect;
      case "service":
        return text.service;
      case "security":
        return text.security;
      default:
        console.log("default");
        break;
    }
  };

  return (
    <div className="about">
      <AboutBanner />

      <div className="aboutdrop">
        <Collapse title="Fiabilité" content={content("fiability")} />
        <Collapse title="Respect" content={content("respect")} />
        <Collapse title="Service" content={content("service")} />
        <Collapse title="Securité" content={content("security")} />
      </div>
    </div>
  );
};

export default About;
