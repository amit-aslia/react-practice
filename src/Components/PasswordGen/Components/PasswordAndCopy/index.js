import React, { useState } from "react";

function PasswordAndCopy({ password }) {
  const [copy, setCopy] = useState("Copy");
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopy("Copied");
    setTimeout(() => {
      setCopy("Copy");
    }, 3000);
  };
  return (
    <div className="flexPropertiesCenterAndSpacebetween whiteColorAndBold password-and-copy-container">
      <div>{password}</div>
      <div onClick={handleCopy} className="buttonContainer copy">
        <div className="whiteColorAndBold">{copy}</div>
      </div>
    </div>
  );
}

export default PasswordAndCopy;
