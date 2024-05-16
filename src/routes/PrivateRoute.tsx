import {JSX, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/authContext.ts";

function PrivateRoute({children}: { children: JSX.Element[] | JSX.Element }) {
    const navigate = useNavigate();
    const {isLoggedIn} = useContext(AuthContext)!;

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }

    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return null;
    }
    return children
}

export default PrivateRoute;