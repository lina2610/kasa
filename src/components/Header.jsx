import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/LOGO.png";
import "../styles/header.css";

const Header = () => {
  return (
    <nav className="navbar_kasa">
      <Link>
        <img src={logo} alt="Logo Kasa" className="Logo_kasa" />
      </Link>
      <Link className="link" to="/">
        Accueil
      </Link>
      <Link className="link_2" to="/about">
        A propos
      </Link>
    </nav>
  );
};

export default Header;
