import {JSX, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function PrivateRoute({children}: { children: JSX.Element[] | JSX.Element }) {
    const defaultLogged = localStorage.getItem('isLogged');
    const [isLoggedIn, setIsLoggedIn] = useState(defaultLogged === "true");
    let navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            setIsLoggedIn(false);
            navigate('/login');
        }

    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return null;
    }
    return children
}

export default PrivateRoute;