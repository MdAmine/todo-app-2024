import {useContext, useState} from "react";

import "./FloatingButton.scss";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContextProvider.tsx";

const FloatingButton = () => {
  const [checked, setChecked] = useState(false);
  const {setLoggedOut} = useContext(AuthContext)!;
  const navigate = useNavigate()

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };

  const handleLogout = () => {
    setLoggedOut()
    navigate('/')
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
        <ul className='mt-3'>
          <Link to='' className='text-center'>Todo List</Link>
          <Link to='about' className='text-center'>About</Link>
          <span onClick={handleLogout} aria-label='logout-btn'>Logout</span>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
