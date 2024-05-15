import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import TodoDetails from "./components/todo/TodoDetails";
import TodoList from "./components/todo/TodoList";
import FloatingButton from "./components/UI/FloatingButton";
import PrivateRoute from "./PrivateRoute";
import { isAuthenticated } from "./service/auth.service";
import About from "./components/about/About";

const App = () => {
  return (
    <Router>
      <div className="container">
        {isAuthenticated() && <FloatingButton />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/todos"
            element={<PrivateRoute Component={TodoList} />}
          />
          <Route
            path="/todos/:id"
            element={<PrivateRoute Component={TodoDetails} />}
          />
          <Route path="/about" element={<PrivateRoute Component={About} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
