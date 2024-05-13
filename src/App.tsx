import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Todo from "./components/todo/Todo.tsx";
import Login from "./components/login/Login.tsx";
import {useState} from "react";

function App() {
    const [isLogedIn, setIsLogedIn] = useState(false);
    const login = () => {
        setIsLogedIn(true);
    }
    const logout = () => {
        setIsLogedIn(false);
    };
    return (
        <>
            <div className="container">
                {isLogedIn ? <Todo/> : <Login onLogin={login}/>}
                <FloatingButton onLogout={logout}/>
            </div>
        </>
    );
}

export default App;
