import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import ListToDo from "./components/TODO/ListToDo/ListToDo";
import Login from "./components/Login/Login";
import TodoDetail from "./components/TODO/DetailToDo/DetailToDo";
import { initialTodos } from "./utils";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [todoItems, setTodoItems] = useState(initialTodos);

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <ListToDo /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/todo/:id"
          element={<TodoDetail todoItems={todoItems} />}
        />
      </Routes>
      <FloatingButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
