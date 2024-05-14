import  { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("isLoggedIn")==="true"){
      setIsLoggedIn(true);
    }
  },[])

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn","true");
  };
  const handleLogout = () =>{
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn","fasle");
  }

  return (
    <div className="container">
      {isLoggedIn ? (
        <>
          <Todo />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
      <FloatingButton logout={handleLogout}/>
    </div>
  );
}

export default App;