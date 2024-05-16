import {useContext, useState} from "react";

import "./FloatingButton.scss";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/authContext.ts";


const FloatingButton = () => {
    const [checked, setChecked] = useState(false);
    const {logoutHandler} = useContext(AuthContext)!;
    const navigate = useNavigate();

    const handleClick = () => {
        setChecked(!checked);
    };

    const setUnchecked = () => {
        setChecked(false);
    };

    const onLogout = () => {
        navigate('/login');
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
                    <span onClick={() => navigate("/todos")}>Todos</span>
                    <span onClick={() => navigate("/about")}>About</span>
                    <span onClick={onLogout}>Logout</span>
                </ul>
            </nav>
        </div>
    );
};
export default FloatingButton;
