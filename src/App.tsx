import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import TodoDetails from "./components/todo/TodoDetails";
import TodoList from "./components/todo/TodoList";
import FloatingButton from "./components/UI/FloatingButton";
import { AuthProvider } from "./context-api/context";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <div className="container">
            <FloatingButton />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<PrivateRoute Component={Home} />} />
              <Route
                path="/todos"
                element={<PrivateRoute Component={TodoList} />}
              />
              <Route
                path="/todos/:id"
                element={<PrivateRoute Component={TodoDetails} />}
              />
              <Route
                path="/about"
                element={<PrivateRoute Component={About} />}
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
