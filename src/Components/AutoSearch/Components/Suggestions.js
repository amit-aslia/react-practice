import React from "react";

function Suggestions({ suggestion, selected }) {
  const renderSuggestions = (eachSuggestion, index) => {
    return (
      <div key={eachSuggestion.id} className={`suggestion ${selected === index ? 'active' : ''}`}>
        {eachSuggestion.title}
      </div>
    );
  };
  return (
    <div className="suggestionContainer">
      {suggestion.slice(0, 10).map(renderSuggestions)}
    </div>
  );
}

export default Suggestions;
