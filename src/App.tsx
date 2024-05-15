import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import Detail from "./components/Todo/Detail";
import { useState } from "react";
import FloatingButton from "./components/UI/FloatingButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "false"
  );

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login handleLogin={handleLogin} />
              ) : (
                <>
                  <Todo />
                  <FloatingButton handleLogout={handleLogout} />
                </>
              )
            }
          />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
