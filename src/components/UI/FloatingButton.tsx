import { useContext, useState } from "react";

import "./FloatingButton.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/LoginContext";

const FloatingButton = () => {
  const [checked, setChecked] = useState(false);
  const navigation=useNavigate()
  const handleClick = () => {
    setChecked(!checked);
  };
  let auth=useContext(AuthContext)

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
        <span onClick={()=>navigation('/todo')}>To do List</span>
        <span onClick={()=>navigation('/about')}>About</span>
          <span onClick={auth.logout}>Logout</span>
        </ul>
      </nav>
    </div>

    </>
  
  
  );
};
export default FloatingButton;
