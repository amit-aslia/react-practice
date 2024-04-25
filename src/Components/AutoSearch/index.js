import React, { useEffect, useState } from "react";
import Searchbar from "./Components/Searchbar";
import photoList from "./data/photoList";
import Suggestion from "./Components/Suggestions";

import "./styles.css";

function AutoSearch() {
  const [suggestion, setSuggestion] = useState([]);
  const [selected, setSelected] = useState(-1);

  const handleSuggestion = (target) => {
    const filterData = photoList.filter((elem) => elem.title.includes(target));
    setSuggestion(filterData);
  };

  const handleChange = (e) => {
    handleSuggestion(e.target.value);
  };

  const handleKeyDown = (e) => {
    const { key } = e;
    const len = suggestion.slice(0, 10).length;
    if (key === "ArrowDown") {
      setSelected((prev) => (prev >= len - 1 ? 0 : prev + 1));
    } else if (key === "ArrowUp") {
      setSelected((prev) => (prev === 0 ? len - 1 : prev - 1));
    }
  };

  return (
    <div className="container">
      <Searchbar handleKeyDown={handleKeyDown} handleChange={handleChange} />
      {suggestion.length > 0 && (
        <Suggestion selected={selected} suggestion={suggestion} />
      )}
    </div>
  );
}

export default AutoSearch;
