import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import { useState } from "react";

const App=() => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
  };
  return (   
    <>
      <div className="container">
      {!isLoggedIn && <Login loggedIn={loginHandler} /> }    
      {isLoggedIn &&<> <Todo /> <FloatingButton logoutHandler={logoutHandler}/></> } 
        
      
      </div>
    </>
  );
}

export default App;
