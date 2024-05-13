import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import ListTodo from "./components/UI/listTodo.tsx";
import {useState} from "react";
import Login from "./components/UI/login.tsx";

function App() {

    const [isLogged, setIsLogged] = useState(false);

    const handleLogin = () => {
        setIsLogged(true);
    }

    const handleLogout = () => {
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
