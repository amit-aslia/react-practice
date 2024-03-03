import React from "react";

function GeneratePassword({ handleClick }) {
  return (
    <div onClick={handleClick} className="buttonContainer">
      <div className="whiteColorAndBold">Generate Password</div>
    </div>
  );
}

export default GeneratePassword;
