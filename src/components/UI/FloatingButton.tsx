import { useState } from "react";

import "./FloatingButton.scss";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import React from "react";
import LoginContext from "../LoginContext";

const FloatingButton = () => {
 //const {logoutHandler}=props;
 const { isLoggedIn, loginHandler, logoutHandler } = React.useContext(LoginContext);

  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
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
          <Link to="/about"><span>About</span></Link>
          <span onClick={logoutHandler}>Logout</span> </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
