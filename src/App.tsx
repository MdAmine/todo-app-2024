import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import TodoList from "./components/Todo/TodoList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";



const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoggedInStatus = localStorage.getItem("isLoggedIn");
        if (storedLoggedInStatus === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
    };

    return (
        <>
        <div className="container">
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <TodoList onLogout={handleLogout} />
            )}
            <FloatingButton />
        </div>
        </>
    );
};

export default App;