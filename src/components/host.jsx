import React from "react";

const Host = ({ name, picture }) => {
  return (
    <>
      <div className="host"> {name}</div>
      <img className="picture" src={picture} alt=""></img>
    </>
  );
};

export default Host;
