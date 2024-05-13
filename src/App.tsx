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
    return (
        <>
            {isLoggedIn ? <><ListToDo/> <FloatingButton/></> : (
                <>
                    <Login onLogin={handleLogin}/>

                </>
            )}


        </>
    );
}

export default App;
