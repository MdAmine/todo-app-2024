import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";
import { useEffect, useState } from "react";

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
      
      
       {isLoggedIn ? (
        <Todo/>
      ) : (
        <Login handleCallback={loginHandler}/>
      )}

        <FloatingButton handleCallback={logoutHandler}/>
      </div>
    </>
  );
}

export default App;
