import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import { useEffect, useState } from "react";
import { Router, Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import TodoItem from "./components/Todo/TodoItem/TodoItem";
import Detail from "./components/Detail/Detail";
import FetchedData from "./components/About/fetchedData";
import About from "./components/About/About";
import React from "react";
import LoginContext from "./components/LoginContext";

const App=() => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);


  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
    console.log(isLoggedIn);
  };

  
  return (
    <LoginContext.Provider value={{ isLoggedIn, loginHandler, logoutHandler }}>
      <BrowserRouter>
        <div className="container">
          <Routes>
          !isLoggedIn
            <Route
              path="/"
              element={
                   !isLoggedIn ? (
                        <Login />) : (
                              <>
                                <Todo />
                                <FloatingButton />
                              </>
                            )
                      }
            />
            {isLoggedIn && (
              <> 
                <Route
                  path="/detail/:id/:todo/:complete/:priority"
                  element={<Detail />}
                />                
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
              </>
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </LoginContext.Provider>
  ); 
}

export default App;
