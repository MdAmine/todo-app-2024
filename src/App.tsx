import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = (value) => {
    localStorage.setItem("isLoggedIn", value);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
        <Route 
          path="/login" 
          element={
            isLoggedIn ? <Navigate to="/home" /> : <Authentication onLogin={handleLogin} />
          } 
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/todo/:id"
          element={
            isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/about"
          element={
            isLoggedIn ? <About onLogout={handleLogout} /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;
