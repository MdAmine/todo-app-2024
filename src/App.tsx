import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import TodoList from "./components/todo/TodoList";
import FloatingButton from "./components/UI/FloatingButton";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  return (
    <div className="container">
      {isLoggedIn ? <TodoList /> : <Login onLogin={handleLogin} />}
      <FloatingButton onLogout={handleLogout} />
    </div>
  );
};

export default App;
