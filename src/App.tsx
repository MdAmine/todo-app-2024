import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, {useEffect, useState} from "react";
import ListToDo from "./components/to-do/list-to-do/List-to-do.tsx";
import {Route, Routes} from "react-router-dom";
import Login from "./components/login/Login.tsx";
import About from "./components/about/About.tsx";
import Details from "./components/details/Details.tsx";
import FloatingButton from "./components/UI/FloatingButton.tsx";
import AuthProvider from "./components/context/Context.tsx";

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
        <AuthProvider>
            <Routes>
                <Route
                    path="/"
                    element={
                        isLoggedIn ? (
                            <>
                                <ListToDo/>
                            </>
                        ) : (
                            <Login onLogin={handleLogin}/>
                        )
                    }
                />
                {isLoggedIn && (
                    <>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/details/:id" element={<Details/>}/>
                    </>
                )}
            </Routes>
            {isLoggedIn && <FloatingButton onLogout={handleLogout}/>}
        </AuthProvider>
    );
}

export default App;
