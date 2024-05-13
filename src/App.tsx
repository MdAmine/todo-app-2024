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

  return (
    <div className="container">
      {isLoggedIn ? (
        <>
          <Todo />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
      <FloatingButton />
    </div>
  );
}

export default App;