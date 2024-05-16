import { useState } from "react";

import "./FloatingButton.scss";
import { Link, useNavigate } from "react-router-dom";

const FloatingButton = (props) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();


  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };
  const handleAboutClick =()=>{
    navigate('/about');
  }
 

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
              <span ><Link to="/">Todo List</Link></span>
              <span onClick={handleAboutClick}>About</span>
              <span onClick={props.logout}>Logout</span>
            </ul>
          </nav>
    </div>
  );
};
export default FloatingButton;
