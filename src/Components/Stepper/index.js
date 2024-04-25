import React, { useState } from "react";
import "./styles.css";

const LIST = [1, 2, 3];
function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const progressLineWidth = (100 / (LIST.length - 1)) * currentStep;
  console.log(progressLineWidth);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const renderSteps = (elem, index) => (
    <div className={`circle ${currentStep >= index ? "active" : ""}`}>
      {elem}
    </div>
  );
  return (
    <div className="container">
      <div className="st2">
      <div className="stepContainer">
        {LIST.map(renderSteps)}
        <div
          className="progressLine"
          style={{ width: `${progressLineWidth}%` }}
        ></div>
      </div>
      </div>
      <button disabled={currentStep === LIST.length - 1} onClick={handleNext}>Next</button>
    </div>
  );
}

export default Stepper;