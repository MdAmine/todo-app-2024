import { useState } from "react";
import "./FloatingButton.scss";
import {Link, useNavigate} from "react-router-dom";

const FloatingButton = ({onLogout}) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };

  function handleLogoutClick() {
      onLogout();
      navigate('/')
  }

  let handleClickhome = () => {
    navigate("/");
  };

  let handleClickAbout = () => {
      navigate("/about");
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
          <span onClick={handleClickhome}>Home</span>
          <span onClick={handleClickAbout}>About</span>
          <span onClick={handleLogoutClick}>Logout</span>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
