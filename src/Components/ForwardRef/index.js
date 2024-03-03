import React, { useRef } from "react";
import Child from "./Child";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = 100;
  };

  return (
    <div>
      <h1>Forward ref</h1>
      <Child ref={inputRef} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
