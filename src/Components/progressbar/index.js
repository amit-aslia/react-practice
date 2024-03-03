import React, { useState } from "react";
import "./styles.css";

function ProgressBar() {
  const [percentage, setPercentage] = useState(0);
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 100) return;
    else if (value) setPercentage(value);
    else setPercentage(0);
  };

  const getTransitionTime = () => {
    return (2 / 100) * percentage;
  };
  return (
    <div className="container">
      <h1>Progress Bar</h1>

      <div className="progressbarContainer">
        <div
          className="progresbar"
          style={{
            width: `${percentage}%`,
            transition: `width ${getTransitionTime()}s linear 0.5s`,
          }}
        />
      </div>
      <span>Enter percentage: </span>
      <input value={percentage} type="number" onChange={handleInputChange} />
    </div>
  );
}

export default ProgressBar;
