import React from "react";

function Checkboxes({ checkedItems, setCheckboxes }) {
  const handleCheckbox = (id) => {
    const updatedList = checkedItems.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          checked: !elem.checked,
        };
      }
      return elem;
    });
    setCheckboxes(updatedList);
  };

  const renderCheckboxes = (elem) => {
    return (
      <div
        onClick={() => handleCheckbox(elem.id)}
        className="eachCheckBox"
        key={elem.key}
      >
        <input type="checkbox" checked={elem.checked} />
        <div className="whiteColorAndBold">{elem.title}</div>
      </div>
    );
  };
  return (
    <div className="checkboxContainer">
      {checkedItems.map(renderCheckboxes)}
    </div>
  );
}

export default Checkboxes;
