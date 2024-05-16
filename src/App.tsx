import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Todo from "./components/todo/Todo.tsx";
import Login from "./components/login/Login.tsx";
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/about/About.tsx";
import TodoDetails from "./components/todo/todo-details/TodoDetails.tsx";
import initialTodoItems from "./components/Utils.tsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [todoItems, setTodoItems] = useState(initialTodoItems);
    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        if (loggedIn === "true") {
            setIsLoggedIn(true);
        }
    }, []);
    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true")
    }
    const logout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", "false");
    };
    return (
        <BrowserRouter>
            <div className="container">
                {isLoggedIn ?
                    <>
                        <Routes>
                            <Route path="/" element={<Todo todoItems={todoItems} setTodoItems={todoItems}/>}/>
                            <Route path="/about" element={<About logout={logout}/>}/>
                            <Route path="/:id" element={<TodoDetails todoItems={todoItems}/>}/>
                        </Routes>
                    </>
                    :
                    <>
                        <Login onLogin={login}/>
                    </>
                }
                <FloatingButton onLogout={logout}/>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;
