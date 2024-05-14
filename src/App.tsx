import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login/Login";
import Todolist from "./components/Todo/Todolist";
import FloatingButton from './components/UI/FloatingButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

 //login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  //logout
  const handleLogout=()=>{
    setIsLoggedIn(false);
  }

  return (
    <>
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      
      {isLoggedIn && <><Todolist  /><FloatingButton onLogout={handleLogout}/></>}
    </>
  );
}

export default App;
