import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import ListToDo from "./components/TODO/ListToDo/ListToDo";
import Login from "./components/Login/Login";
import DetailToDo from "./components/TODO/DetailToDo/DetailToDo";
import About from "./components/About/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
              <Login data-testid="login" setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/details/:id"
          element={
            isLoggedIn ? (
              <>
                {" "}
                <DetailToDo />
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
