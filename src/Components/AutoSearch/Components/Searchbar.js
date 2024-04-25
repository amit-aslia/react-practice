import React from "react";
import debounce from "../utilities/debounce";

function Searchbar({ handleChange, handleKeyDown }) {
  const handleInputChange = (e) => {
    debounce(handleChange, 300, e);
  };
  return (
    <div className="searchbarContainer">
      <input
        onChange={handleInputChange}
        placeholder="search bar"
        className="search-input"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Searchbar;
