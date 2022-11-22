import React from "react";
import { useState } from "react";
import pictures from "../data/data.json";
import leftarrow from "../images/arrowleft.png";
import rightarrow from "../images/arrowright.png";
import "../styles/slider.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    //setCurrent(current === length - 1 ? 0 : current + 1);

    if (current === length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (
              <>
                <img src={picture} alt="" className="sliderpicture" />
                <span className="slidernumber">
                  {" "}
                  {current + 1}/{length}
                </span>
              </>
            )}
          </div>
        );
      })}
      {}
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={leftarrow} alt="" className="previous" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={rightarrow} alt="" className="next" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slider;
