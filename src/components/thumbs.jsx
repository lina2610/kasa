import React from "react";

const Thumbs =
  () =>
  ({ images, title }) => {
    return (
      <div className="thumb">
        <img src={images} alt="fond" className="thumb" />
        <h2 className="thumb_title">{title}</h2>
      </div>
    );
  };

export default Thumbs;
