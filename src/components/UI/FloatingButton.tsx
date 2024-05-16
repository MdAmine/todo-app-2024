import { useState } from "react";
import { Link } from "react-router-dom";
import "./FloatingButton.scss";
import LoginContext from "../Todo/LoginContext";

const FloatingButton = ({ onLogout }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };

  return (
    <>
    <LoginContext.Provider   value={{ onLogout }}>
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
            <li>
            <Link className="link" to="/">TodoList</Link>
            </li>
            <li>
            <Link className="link" to="/about">About</Link>
            </li>
            <li onClick={onLogout}>Logout</li>
          </ul>
        </nav>
      </div>
      </LoginContext.Provider>
      </>
  );
};
export default FloatingButton;
