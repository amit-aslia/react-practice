import React from "react";

function Slider({ length, setLength }) {
  return (
    <div className="slider">
      <input
      className="input"
        type="range"
        min="4"
        max="16"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
    </div>
  );
}

export default Slider;
