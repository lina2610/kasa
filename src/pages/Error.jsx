import React from "react";
import { Link } from "react-router-dom";
import "../styles/error.css";

function Error() {
  return (
    <div className="error">
      <div className="errorcontent">
        <p className="errornumber"> 404</p>
        <p className="errortext">
          {" "}
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link to="/" className="errorlink">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
