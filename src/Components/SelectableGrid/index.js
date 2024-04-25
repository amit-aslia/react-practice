import React, { useState, useCallback } from "react";
import "./styles.css";

function SelectableGrid({ rows = 10, cols = 6 }) {
  const [isMouseDown, setMouseDown] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const handleMouseDown = (boxNo) => {
    setMouseDown(true);
    setSelectedBoxes([boxNo]);
  };

  const handleMouseEnter = useCallback(
    (boxNumber) => {
      if (isMouseDown) {
        const startBox = selectedBoxes[0];
        const endBox = boxNumber;

        const startRow = Math.floor((startBox - 1) / cols); // Math.floor((23-1)/10) = 2
        const startCol = (startBox - 1) % cols; // (23 -1)%10 = 22 % 10 = 2
        const endRow = Math.floor((endBox - 1) / cols);
        const endCol = (endBox - 1) % cols;

        const minRow = Math.min(startRow, endRow);
        const maxRow = Math.max(startRow, endRow);
        const minCol = Math.min(startCol, endCol);
        const maxCol = Math.max(startCol, endCol);

        const selected = [];
        for (let row = minRow; row <= maxRow; row++) {
          for (let col = minCol; col <= maxCol; col++) {
            selected.push(row * cols + col + 1);
          }
        }

        setSelectedBoxes(selected);
      }
    },
    [isMouseDown]
  );

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const renderBoxes = (id) => {
    return (
      <div
        key={id}
        onMouseDown={() => handleMouseDown(id + 1)}
        onMouseEnter={() => handleMouseEnter(id + 1)}
        className={`box ${selectedBoxes.includes(id + 1) ? "selected" : ""}`}
      >
        {id + 1}
      </div>
    );
  };

  return (
    <div
      onMouseUp={handleMouseUp}
      className="grid"
      style={{ "--rows": rows, "--cols": cols }}
    >
      {[
        ...Array(rows * cols)
          .keys()
          .map(renderBoxes),
      ]}
    </div>
  );
}

export default SelectableGrid;
