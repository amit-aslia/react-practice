import React, { useState } from "react";

import "./styles.css";
import MainImage from "./Components/MainImage";
import Slider from './Components/SliderShow';

function SlideShow() {
  const [selected, setSelectedImage] = useState(0); 

  return (
    <div className="container">
      <MainImage selected={selected} setSelectedImage={setSelectedImage}  />
      <Slider selected={selected} setSelectedImage={setSelectedImage} />
    </div>
  );
}

export default SlideShow;
