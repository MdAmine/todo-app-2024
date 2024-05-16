import React, {useState} from "react";
import "./FloatingButton.scss";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../AuthContext/AuthContext";

const FloatingButton: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const {logout} = useAuth();

    const handleClick = () => {
        setChecked(!checked);
    };


    const setUnchecked = () => {
        setChecked(false);
    };

    const handleAboutClick = () => {
        navigate("/about");
        setChecked(false);
    };
 
    const handleTodoListClick = () => {
        navigate("/todo-list");
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
                    <span onClick={handleTodoListClick}>Todo List</span>
                    <span onClick={handleAboutClick}>About</span>
                    <span onClick={logout}>Logout</span>
                </ul>
            </nav>
          

        </div>
);
};

export default FloatingButton;