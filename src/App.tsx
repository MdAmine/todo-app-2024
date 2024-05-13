import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () =>{
    setIsLoggedIn(false);
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