import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Login from "./components/Login.tsx";
import {Todos} from "./components/todos/Todos.tsx";
import {useEffect, useState} from "react";

function App() {
    const defaultLogged = localStorage.getItem('isLogged');
    const [isLoggedIn, setIsLoggedIn] = useState(defaultLogged === "true");

    const loginHandler = () => {
        setIsLoggedIn(true);
    }
    const logoutHandler = () => {
        setIsLoggedIn(false);
    }

    useEffect(() => {
        localStorage.setItem('isLogged', String(isLoggedIn));
    }, [isLoggedIn]);

    return (
        <>
            <div className="container">
                {isLoggedIn ? (
                    <>
                        <Todos/>
                        <FloatingButton logoutHandler={logoutHandler}/>
                    </>
                ) : (
                    <>
                        <Login loginHandler={loginHandler}/>
                    </>
                )}

            </div>
        </>
    );
}

export default App;
