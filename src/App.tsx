import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import TodoList from "./components/todo/TodoList";
import FloatingButton from "./components/UI/FloatingButton";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="container">
        {isLoggedIn ? <TodoList /> : <Login login={handleLogin} />}
        <FloatingButton logout={handleLogout} />
      </div>
    </>
  );
};

export default App;
