import React from "react";
import "../styles/host.css";

const Host = ({ name, picture }) => {
  return (
    <>
      <div className="host">
        <div className="hostname"> {name}</div>
        <img className="hostpicture" src={picture} alt=""></img>
      </div>
    </>
  );
};

export default Host;
