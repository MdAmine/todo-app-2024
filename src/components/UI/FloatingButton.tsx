import { useState } from "react";

import "./FloatingButton.scss";
import { Link } from "react-router-dom";

const FloatingButton = ({onLogout}) => {
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
          <span><Link to="/home">Todo List</Link></span>
          <span><Link to="/about">About</Link></span>
          <span onClick={onLogout}>Logout</span>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
