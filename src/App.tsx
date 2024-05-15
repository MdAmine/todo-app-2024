import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, {useEffect, useState} from "react";
import ListToDo from "./components/to-do/list-to-do/List-to-do.tsx";
import FloatingButton from "./components/UI/FloatingButton.tsx";
import {Route, Routes} from "react-router-dom";
import Login from "./components/login/Login.tsx";
import About from "./components/about/About.tsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn");
        if (loggedInStatus === "true") {
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
        <Routes>
            <Route
                path="/"
                element={
                    isLoggedIn ?
                        <>
                            <ListToDo/>
                            <FloatingButton onLogout={handleLogout}/>
                        </>
                        :
                        <Login onLogin={handleLogin}/>
                }
            />
            {isLoggedIn && (
                <Route path="/about" element={<About/>}/>
            )}

        </Routes>
    );
}

export default App;
