import React from "react";

// import des images d'étoiles

import redstar from "../images/redstar.png";
import greystar from "../images/whitestar.png";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="ratestar"
            src={redstar}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="ratestar"
            src={greystar}
            alt=""
          />
        )
      )}
    </div>
  );
};

export default Rating;
