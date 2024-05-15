import { useState } from "react";

import "./FloatingButton.scss";
import { Link } from "react-router-dom";

const FloatingButton = (props) => {
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
          <Link className="span" to='todo'>Todo List</Link>
          <Link className="span" to='about'>About</Link>
          <span onClick={props.handleLogout}>Logout</span>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
