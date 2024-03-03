import React from "react";

function Navbar({ todos }) {
  console.log('render Navbar');
  const completedTask = todos.reduce(
    (acc, cv) => (cv.completed ? acc + 1 : acc),
    0
  );
  return (
    <div className="navbarContainer">
      <div>Completed: {completedTask}</div>
      <div>TODOs</div>
      <div>Accounts</div>
    </div>
  );
}

export default Navbar;
