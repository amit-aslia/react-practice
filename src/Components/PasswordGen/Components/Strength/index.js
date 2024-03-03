import React from "react";

function Strength({ passwordLen }) {
  const getStrength = (val) => {
    if (val.length < 1) return '';
    else if ( val < 4) return "Very Poor";
    else if ( val > 4 && val <= 6) return "Poor";
    else if ( val > 6 && val <= 8) return "Good";
    else if ( val > 8 && val <= 12) return "Very Good";
    else if ( val > 12 && val <= 16) return "Excellent";
    return "";
  };
  return (
    <div className="flexPropertiesCenterAndSpacebetween whiteColorAndBold">
      <div>Strength</div>
      <div>{getStrength(passwordLen)}</div>
    </div>
  );
}

export default Strength;
