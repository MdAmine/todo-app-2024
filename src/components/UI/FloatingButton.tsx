import React, {useContext, useState} from "react";

import "./FloatingButton.scss";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/Context.tsx";

const FloatingButton = () => {
    const [checked, setChecked] = useState(false);
    const {loggedIn, logout} = useContext(AuthContext);
    const handleClick = () => {
        setChecked(!checked);
    };

    const setUnchecked = () => {
        setChecked(false);
    };

    const onSubmit = (event) => {
        logout();
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
                    <Link to="/">Todo List</Link>
                    <Link to="/about">About</Link>
                    <span onClick={onSubmit}>Logout</span>
                </ul>
            </nav>
        </div>
    );
};
export default FloatingButton;
