import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {useEffect, useState} from "react";
import ListToDo from "./components/to-do/list-to-do/List-to-do.tsx";
import FloatingButton from "./components/UI/FloatingButton.tsx";
import Login from "./components/login/Login.tsx";

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
        <>
            {isLoggedIn ?
                <>
                    <ListToDo/>
                    <FloatingButton onLogout={handleLogout}/>
                </> :
                <>
                    <Login onLogin={handleLogin}/>

                </>
            }


        </>
    );
}

export default App;
