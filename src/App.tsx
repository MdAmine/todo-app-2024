import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Todo/Details/Details";
import About from "./components/About/About";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    localStorage.getItem('isLoggedIn') === "true" && setIsLoggedIn(true);
  }, [isLoggedIn]);


  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.clear("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="container">


        {/* {isLoggedIn ? (
          <Todo />

        ) : (
          <Login handleCallback={loginHandler} />
        )} */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/details/:id/:todo/:complete/:priority" element={<Details />} />
          {isLoggedIn ? (
            <Route path="" element={<Todo />} />
          ) : (
            <Route path="" element={<Login handleCallback={loginHandler} />} />
            // <></>
          )}
        </Routes>

        <FloatingButton handleCallback={logoutHandler} />
      </div>


    </>
  );
}

export default App;
