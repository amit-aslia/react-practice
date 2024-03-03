import React from "react";
import { computed } from "@preact/signals-react";

function Navbar({ todos }) {
  const completedTask = computed(() =>
    todos.value.reduce((acc, cv) => (cv.completed ? acc + 1 : acc), 0)
  );
  console.log("render Navbar");
  return (
    <div className="navbarContainer">
      <div>Completed: {completedTask}</div>
      <div>TODOs</div>
      <div>Accounts</div>
    </div>
  );
}

export default Navbar;
