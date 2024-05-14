import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Todo from "./components/todo/Todo.tsx";
import Login from "./components/login/Login.tsx";
import {useEffect, useState} from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        if (loggedIn === "true") {
            setIsLoggedIn(true);
        }
    }, []);
    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn","true")
    }
    const logout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn","false")
    };
    return (
        <>
            <div className="container">
                {isLoggedIn ? <Todo/> : <Login onLogin={login}/>}
                <FloatingButton onLogout={logout}/>
            </div>
        </>
    );
}

export default App;
