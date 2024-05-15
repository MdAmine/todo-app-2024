import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import ListTodo from "./components/UI/listTodo.tsx";
import {useEffect, useState} from "react";
import Login from "./components/UI/login.tsx";

function App() {

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLogged');
        if (loggedInStatus === 'true') {
            setIsLogged(true);
        }
    }, []);

    const handleLogin = () => {
        localStorage.setItem('isLogged', 'true');
        setIsLogged(true);
    }

    const handleLogout = () => {
        localStorage.setItem('isLogged', 'false');
        setIsLogged(false);
    }

    if (!isLogged) {
        return (
            <div className="container">
                <Login onLogin={handleLogin}/>
            </div>
        )
    } else {
        return (
            <>
                <div className="container">

                    <ListTodo />

                    <FloatingButton onLogout={handleLogout}/>
                </div>
            </>
        );

    }
}

export default App;
