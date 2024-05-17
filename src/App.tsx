import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import Detail from "./components/Todo/Detail";
import { useState } from "react";
import FloatingButton from "./components/UI/FloatingButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import AuthContext from "./context/AuthContext";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "false"
  );

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          handleLogin,
          handleLogout,
        }}
      >
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  !isLoggedIn ? (
                    <Login handleLogin={handleLogin} />
                  ) : (
                    <>
                      <Todo />
                      <FloatingButton handleLogout={handleLogout} />
                    </>
                  )
                }
              />
              <Route path="/detail/:id" element={<Detail />} />
              <Route
                path="about"
                element={<About handleLogout={handleLogout} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
