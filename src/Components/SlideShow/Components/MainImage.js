import React from "react";
import images from "../constants";

function MainImage({ selected, setSelectedImage }) {
  const handleNext = () => {
    if (images.length - 1 === selected) {
      setSelectedImage(0);
    } else {
      setSelectedImage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (selected === 0) {
      setSelectedImage(images.length - 1);
    } else {
      setSelectedImage((prev) => prev - 1);
    }
  };
  return (
    <div className="slide">
      <div onClick={handlePrev} className="prev arrow">
        Prev
      </div>
      <div onClick={handleNext} className="next arrow">
        Next
      </div>
      <img
        className="imageCss"
        src={images[selected].image_url}
        alt={images[selected].caption}
      />
    </div>
  );
}

export default MainImage;
