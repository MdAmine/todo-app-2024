import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login/Login";
import Todolist from "./components/Todo/Todolist";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

 
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout=()=>{
    setIsLoggedIn(false);
  }

  return (
    <>
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      
      {isLoggedIn && <Todolist onLogout={handleLogout} />}
    </>
  );
}

export default App;
