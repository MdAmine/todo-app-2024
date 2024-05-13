import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Todo from "./components/todo/Todo.tsx";
import Login from "./components/login/Login.tsx";
import {useState} from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => {
        setIsLoggedIn(true);
    }
    const logout = () => {
        setIsLoggedIn(false);
    };
    return (
        <>
            <div className="container">
                {isLoggedIn ? <Todo/> : <Login onLoggin={login}/>}
                <FloatingButton onLoggout={logout}/>
            </div>
        </>
    );
}

export default App;
