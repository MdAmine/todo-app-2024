import { useState } from "react";
import { Link } from "react-router-dom";
import "./FloatingButton.scss";

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
            <Link className="link" to="/App">TodoList</Link>
            </li>
            <li>
            <Link className="link" to="/about">About</Link>
            </li>
            <li onClick={onLogout}>Logout</li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default FloatingButton;
