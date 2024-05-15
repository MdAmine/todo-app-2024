import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login/Login";
import Todolist from "./components/Todo/Todolist";
import FloatingButton from './components/UI/FloatingButton';



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
    
    <>
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && (
        <>
          <Todolist />
          <FloatingButton onLogout={handleLogout} />
        </>
      )}
    </>
  );
  
}

export default App;
