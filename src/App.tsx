import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ListToDo from "./components/to-do/list-to-do/List-to-do.tsx";
import FloatingButton from "./components/UI/FloatingButton.tsx";
import Login from "./components/login/Login.tsx";
import {useState} from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    }
    return (
        <>
            {isLoggedIn ? <><ListToDo/> <FloatingButton onLogout={handleLogout}/></> : (
                <>
                    <Login onLogin={handleLogin}/>

                </>
            )}


        </>
    );
}

export default App;
