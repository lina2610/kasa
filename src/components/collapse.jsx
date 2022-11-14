import React from "react";
//import { useRef } from "react";
import { useState } from "react";
import "../styles/collapse.css";
import arrow from "../images/Vector.png";

const Collapse = ({ content, title }) => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="toggle" onClick={() => setIsOpen(!IsOpen)}>
        {IsOpen}
        {title}

        <img className="arrow" src={arrow} alt="" />
      </button>
      <div className={IsOpen ? "content show" : "content"}> {content}</div>
    </div>
  );
};

export default Collapse;
