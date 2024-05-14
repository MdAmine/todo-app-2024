import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import ToDo from "./components/ToDo/ToDo";
import { Login } from "./components/Login/Login";
import { useState } from "react";

function App() {

  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("isLogged", "true");
    setIsLogged(true);
  };

  const handleLogout = () => {
    localStorage.setItem("isLogged", "false");
    setIsLogged(false);
  };

  


  return (
    <>
      <div className="container">

        {isLogged && <><ToDo /><FloatingButton handleLogout={handleLogout} /></>}


       {!isLogged && <Login onLogin={handleLogin} />}

      </div>
    </>
  );
}

export default App;
