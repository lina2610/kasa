import React from "react";
import "../styles/tag.css";

const Tags = ({ getTag }) => {
  return (
    <div className="tag">
      <p className="text_tag">{getTag}</p>
    </div>
  );
};

export default Tags;
