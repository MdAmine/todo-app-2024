import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../service/auth.service";
import "./FloatingButton.scss";

const FloatingButton = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };

  const logout = () => {
    logoutUser();
    navigate("/login");
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
          <span>
            <Link to={"/todos"}>Todo List</Link>
          </span>
          <span>
            <Link to={"/about"}>About</Link>
          </span>
          <span onClick={logout}>Logout</span>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
