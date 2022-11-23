import React from "react";
//import { useRef } from "react";
import { useState } from "react";
import "../styles/collapse.css";
import arrow from "../images/Vector.png";

const Collapse = ({ content, title }) => {
  const [IsOpen, setIsOpen] = useState(false); //création d'une variable isOpen associée à la fonction setIsopen

  return (
    <div className="collapse">
      <button className="toggle" onClick={() => setIsOpen(!IsOpen)}>
        {IsOpen}
        {title}

        <img className="arrow" src={arrow} alt="" />
      </button>

      <div className={IsOpen ? "content show" : "content"}>
        {Array.isArray(content) ? (
          <ul className="list">
            {content.map((equipment, index) => (
              <li key={index} className="">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
