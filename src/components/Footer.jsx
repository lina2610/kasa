import React from "react";
import footerlogo from "../images/LOGO.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="orgafooter">
        <img src={footerlogo} alt="Logo Kasa" className="Logo_kasa" />

        <p className="footertext">Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
