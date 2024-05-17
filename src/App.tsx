import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login/Login";
import Todolist from "./components/Todo/Todolist";
import FloatingButton from './components/UI/FloatingButton';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Detail from './components/Todo/Detail';
import LoginContext from './components/Todo/LoginContext';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    console.log(isLoggedIn); 
  }, [isLoggedIn]);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true"); 
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
 
 return (
  <LoginContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login onLogin={handleLogin}/>
              ) : (
                <>
                  < Todolist />
                  <FloatingButton onLogout={handleLogout}  />
                </>
              )
            }
          />
          {/* page detail de chaque item */}
          <Route path="/todo/:id/:todo/:completed/:priority" element={<Detail />} />
          {/* la page about */}
          <Route path="/About" element={<About />} />
          {/* contient la liste (Todolist)  */}
          <Route path="/" element={<App />} />


        </Routes>
      </div>
    </BrowserRouter>
        </LoginContext.Provider>

  );

  
  
}

export default App;
