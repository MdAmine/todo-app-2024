import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import { useEffect, useState } from "react";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import TodoItem from "./components/Todo/TodoItem/TodoItem";
import Detail from "./components/Detail/Detail";

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
  };
  
  
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login loggedIn={loginHandler} />
              ) : (
                <>
                  <Todo />
                  <FloatingButton logoutHandler={logoutHandler} />
                </>
              )
            }
          />
          <Route path="/detail/:id/:todo/:complete/:priority" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
