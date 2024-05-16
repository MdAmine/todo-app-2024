import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./FloatingButton.scss";

const FloatingButton = ({onLoged}) => {
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };

  function handleRedirectToTodoList() {
    navigate('/todo-list')
  }

  function handleRedirectToAbout() {
    navigate('/about')
  }

  function handleRedirectToLogout() {
    onLoged()
    navigate('/login')
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
          <button type="submit" onClick={handleRedirectToTodoList}>
            Todo List
          </button>
          <button type="submit" onClick={handleRedirectToAbout}>
            About
          </button>
          <button type="submit" onClick={handleRedirectToLogout}>
            Logout
          </button>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
