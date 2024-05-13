import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Login from "./components/Login.tsx";
import {Todos} from "./components/todos/Todos.tsx";
import {useState} from "react";

function App() {
    const defaultLogged = localStorage.getItem('isLogged');
    const [isLoggedIn, setIsLoggedIn] = useState(defaultLogged === "true");

    const loginHandler = () => {
        localStorage.setItem('isLogged', "true");
        setIsLoggedIn(true);
    }
    const logoutHandler = () => {
        localStorage.removeItem('isLogged');
        setIsLoggedIn(false);
    }
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
