import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import TodoList from "./components/todo/TodoList";
import FloatingButton from "./components/UI/FloatingButton";

const App: React.FC = () => {
  const isLoggedIn = React.useState<boolean>(
    localStorage.getItem("isLoggedIn") === "true"
  )[0];

  return (
    <>
      <div className="container">
        {isLoggedIn ? <TodoList /> : <Login />}
        <FloatingButton />
      </div>
    </>
  );
};

export default App;
