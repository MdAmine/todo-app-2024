import {useState} from "react";

import "./FloatingButton.scss";

interface FloatingButtonProps {
    logoutHandler: () => void;
}

const FloatingButton = ({logoutHandler}: FloatingButtonProps) => {
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(!checked);
    };

    const setUnchecked = () => {
        setChecked(false);
    };

    const onLogout = () => {
        logoutHandler();
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
                    <span>Todo List</span>
                    <span>About</span>
                    <button onClick={onLogout}>Logout</button>
                </ul>
            </nav>
        </div>
    );
};
export default FloatingButton;
