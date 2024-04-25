import React, { useEffect, useState } from "react";

import starImg from "./white-star.png";
import rating from "./rating.png";
import "./styles.css";

function Star() {
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleMouseOver = (id) => {
    setHoverIndex(id);
  };

  const handleMouseOut = () => {
    setHoverIndex(0);
  };

  const renderStars = (id) => {
    const imageSrc = id <= hoverIndex ? rating : starImg;
    return (
      <div
        onMouseOut={handleMouseOut}
        onMouseOver={() => handleMouseOver(id)}
        className="star-container"
      >
        <img className="star-image" src={imageSrc} alt="star" />
      </div>
    );
  };
  return <div className="container">{[1, 2, 3, 4, 5].map(renderStars)}</div>;
}

export default Star;
