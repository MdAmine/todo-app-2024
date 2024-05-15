import { useState } from "react";

import "./FloatingButton.scss";
import { useNavigate } from "react-router-dom";

const FloatingButton = ({ isLoggedIn, setIsLoggedIn }) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const aboutNavigate = () => {
    navigate("/About");
  };
  const todoNavigate = () => {
    navigate("/");
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
          <span onClick={todoNavigate}>Todo List</span>
          <span onClick={aboutNavigate}>About</span>
          <span onClick={logoutHandler}>Logout</span>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
