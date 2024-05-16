import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context-api/context";
import "./FloatingButton.scss";

const FloatingButton = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };

  const logout = () => {
    authContext.logout();
    navigate("/login");
  };

  return (
    <>
      {authContext.isAuthenticated() && (
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
      )}
    </>
  );
};

export default FloatingButton;
