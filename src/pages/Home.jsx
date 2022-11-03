import React from "react";
import { Link } from "react-router-dom";
import data from "data/data.json";
//import banner from "components/banner.jsx";

const Appartments = () => {
  return;

  <div className="home">
    <div className="home_appartments">{data.map}</div>
    <Link className="link" to="/">
      Accueil
    </Link>
  </div>;
};

export default Appartments;
