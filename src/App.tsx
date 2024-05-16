import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import ListToDo from "./components/TODO/ListToDo/ListToDo";
import Login from "./components/Login/Login";
import DetailToDo from "./components/TODO/DetailToDo/DetailToDo";
import About from "./components/About/About";
import AuthContext from "./components/Context/context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="container">
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  <ListToDo /> <FloatingButton />
                </>
              ) : (
                <Login data-testid="login" />
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
                  <FloatingButton />
                </>
              ) : (
                <Login />
              )
            }
          />

          <Route
            path="/About"
            element={
              isLoggedIn ? (
                <>
                  {" "}
                  <About /> <FloatingButton />
                </>
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
