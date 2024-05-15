import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import { useState } from "react";
import FloatingButton from "./components/UI/FloatingButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    localStorage.setItem("isLoggin", true);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggin", false);
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="container">
        {!isLoggedIn && <Login handleLogin={handleLogin} />}
        {isLoggedIn && (
          <>
            {" "}
            <Todo /> <FloatingButton handleLogout={handleLogout} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
