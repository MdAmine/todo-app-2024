import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import ListTodo from "./components/UI/listTodo.tsx";
import {useEffect, useState} from "react";
import Login from "./components/UI/login.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoDetails from "./components/UI/todoDetails.tsx";
import About from "./components/UI/about.tsx";

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

    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={isLogged ? <ListTodo /> : <Login onLogin={handleLogin} />} />
                    <Route path="/todo/:id" element={<TodoDetails/>} />
                    <Route path="/about" element={<About onLogout={handleLogout} />} />
                </Routes>
                {isLogged && <FloatingButton onLogout={handleLogout} />}
            </div>
        </BrowserRouter>
    );
}

export default App;
