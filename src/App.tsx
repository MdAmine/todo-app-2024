import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import RouterOutlet from "./routes/RouterOutlet.tsx";
import {AuthContext} from "./context/authContext.ts";
import {useEffect, useState} from "react";

function App() {
    const defaultLogged = localStorage.getItem('isLogged');
    const [isLoggedIn, setIsLoggedIn] = useState(defaultLogged === "true");

    const loginHandler = () => {
        setIsLoggedIn(true);
    }
    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("todos")
    }
    useEffect(() => {
        localStorage.setItem('isLogged', String(isLoggedIn));
    }, [isLoggedIn]);
    return (
        <>
            <AuthContext.Provider value={{loginHandler, logoutHandler, isLoggedIn}}>
                <RouterOutlet/>
            </AuthContext.Provider>
        </>
    );
}

export default App;
