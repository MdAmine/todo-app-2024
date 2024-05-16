import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import ListTodo from "./components/UI/listTodo.tsx";
import {useContext} from "react";
import Login from "./components/UI/login.tsx";
import {Route, Routes} from "react-router-dom";
import TodoDetails from "./components/UI/todoDetails.tsx";
import About from "./components/UI/about.tsx";
import {AuthContext} from "./todoContextStore.tsx";

function App() {

    const {isLogged} = useContext(AuthContext);

    return (

            <div className="container">
                <Routes>
                    <Route path="/" element={isLogged ? <ListTodo /> : <Login/>} />
                    <Route path="/todo/:id" element={<TodoDetails/>} />
                    <Route path="/about" element={<About />} />
                </Routes>
                {isLogged && <FloatingButton/>}
            </div>

    );
}

export default App;
