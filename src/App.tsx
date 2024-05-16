import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, {useContext, useEffect} from "react";
import ListToDo from "./components/to-do/list-to-do/List-to-do.tsx";
import {Route, Routes} from "react-router-dom";
import Login from "./components/login/Login.tsx";
import About from "./components/about/About.tsx";
import Details from "./components/details/Details.tsx";
import FloatingButton from "./components/UI/FloatingButton.tsx";
import {AuthContext} from "./components/context/Context.tsx";

function App() {

    const {loggedIn, setLoggedIn} = useContext(AuthContext);
    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn");
        if (loggedInStatus === "true") {
            setLoggedIn(true);
        }
    }, []);
    const handleLogin = () => {
        setLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
    };

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        loggedIn ? (
                            <>
                                <ListToDo/>
                            </>
                        ) : (
                            <Login onLogin={handleLogin}/>
                        )
                    }
                />
                {loggedIn && (
                    <>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/details/:id" element={<Details/>}/>
                    </>
                )}
            </Routes>
            {loggedIn && <FloatingButton/>}
        </>
    );
}

export default App;
