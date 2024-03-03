import React from "react";

function PasswordLen({ length }) {
  return (
    <div className="flexPropertiesCenterAndSpacebetween whiteColorAndBold">
      <div>Character Length</div>
      <div>{length}</div>
    </div>
  );
}

export default PasswordLen;
