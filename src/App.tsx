import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import ListToDo from "./components/TODO/ListToDo/ListToDo";
import Login from "./components/Login/Login";
import TodoDetail from "./components/TODO/DetailToDo/DetailToDo";
import { initialTodos } from "./utils";
import DetailToDo from "./components/TODO/DetailToDo/DetailToDo";
import About from "./components/About/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [todoItems, setTodoItems] = useState(initialTodos);
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
                <ListToDo />{" "}
                <FloatingButton
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              </>
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/details/:id"
          element={
            isLoggedIn ? (
              <>
                {" "}
                <DetailToDo todoItems={todoItems} />
                <FloatingButton
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              </>
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        <Route
          path="/About"
          element={
            isLoggedIn ? (
              <>
                {" "}
                <About setIsLoggedIn={setIsLoggedIn} />{" "}
                <FloatingButton
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              </>
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
