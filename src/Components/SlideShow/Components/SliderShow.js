import React from "react";
import images from "../constants";

function Slider({ selected, setSelectedImage }) {
  const handleClick = (id) => {
    setSelectedImage(id);
  };

  const handleKey = (e) => {
    console.log(e.key);
    if (e.key === "ArrowRight") {
      setSelectedImage((prev) => prev + 1);
    } else if (e.key === "ArrowLeft") {
      setSelectedImage((prev) => prev - 1);
    }
  };

  const renderList = (eachImage, index) => {
    return (
      <div
        key={index}
        tabIndex="0"
        onKeyUp={handleKey}
        onClick={() => handleClick(index)}
        className={`listImage ${selected === index ? "active" : ""}`}
      >
        <img
          className="eachImage"
          key={eachImage.image_url}
          src={eachImage.image_url}
          alt={eachImage.caption}
        />
      </div>
    );
  };
  return <div className="listContainer">{images.map(renderList)}</div>;
}

export default Slider;
