import {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export const  AuthContext = createContext({handleLogin: () => {}, handleLogout: () => {}, isLogged: false});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLogged');
        if (loggedInStatus === 'true') {
            setIsLogged(true);
        }
    }, []);

    const handleLogin = () => {
        localStorage.setItem("isLogged", "true");
        setIsLogged(true);
        navigate("/");
    };

    const handleLogout = () => {
        localStorage.setItem("isLogged", "false");
        setIsLogged(false);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ isLogged, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
