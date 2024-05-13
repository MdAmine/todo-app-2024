import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";

import "./App.css";
import ListToDo from "./components/TODO/ListToDo/ListToDo";
import Login from "./components/Login/Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="container">
        {isLoggedIn ? (
          <>
            <ListToDo />

            <FloatingButton
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          </>
        ) : (
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </>
  );
}

export default App;
