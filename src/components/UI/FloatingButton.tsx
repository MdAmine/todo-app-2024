import { useState } from "react";

import "./FloatingButton.scss";
import Login from "../Login/Login";

const FloatingButton = (props) => {
 const {logoutHandler}=props;
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
          <span>About</span>
          <span  onClick={logoutHandler}>Logout</span> </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
