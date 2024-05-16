import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import TodoList from "./components/Todo/TodoList";
import About from "../src/components/CallApi/About";
import FloatingButton from "./components/UI/FloatingButton";
import {AuthProvider, useAuth} from "./components/AuthContext/AuthContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
    const {isLoggedIn} = useAuth();

    return (
        <div className="container">
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={isLoggedIn ? <TodoList/> : <Login/>}/>
                <Route path="/todo-list" element={<TodoList/>}/>
            </Routes>
            {isLoggedIn && <FloatingButton/>}
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </Router>
);

export default AppWrapper;