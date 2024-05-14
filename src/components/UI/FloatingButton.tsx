import React, { useState } from "react";

import "./FloatingButton.scss";

const FloatingButton = ({ onLogout }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };

  const logout = () => {
    localStorage.setItem("user", "null");
    localStorage.setItem("isLoggedIn", "false");
    onLogout();
  };

  return (
    <div className="buttonContainer" onBlur={setUnchecked}>
      <input
        type="checkbox"
        id="toggle"
        className={checked ? "checked" : ""}
        onClick={handleClick}
      />
      <label className="button" htmlFor="toggle"></label>
      <nav className="nav">
        <ul>
          <span>Todo List</span>
          <span>About</span>
          <span onClick={logout}>Logout</span>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
