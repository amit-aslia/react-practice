import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  return (props) => {
    const [isLoggedIn, setLogin] = useState(false);

    const login = () => setLogin(true);
    const logout = () => setLogin(false);

    const updatedName = isLoggedIn
      ? `Hi ${props.name} Welcome to HOC`
      : "Please Login first";

    const enhancedProps = {
      ...props,
      login,
      logout,
      updatedName,
      isLoggedIn,
    };
    return <WrappedComponent {...enhancedProps} />;
  };
};

function MyComponent({ name, login, logout, updatedName, isLoggedIn }) {
  const handleClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      login();
    }
  };
  return (
    <div>
      <h1>{name}</h1>
      <h1>{updatedName}</h1>
      <button onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}

export default withCounter(MyComponent);
