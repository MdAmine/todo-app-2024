import { useState } from "react";

import "./FloatingButton.scss";
import { Link } from "react-router-dom";

interface FloatingButtonProps {
  handleLogout: () => void;
}
const FloatingButton: React.FC<FloatingButtonProps> = ({ handleLogout }) => {
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
          <Link to={`/about`}>
            <span>About</span>
          </Link>

          <span onClick={handleLogout}>Logout</span>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
