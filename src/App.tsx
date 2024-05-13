import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import {TodoList} from "./components/Todo/TodoList.tsx";
import {Login} from "./components/Login/Login.tsx";
import { useState } from "react";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (value) => {
    if(value){
      localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
    }
  }

  const logout = () => {
    localStorage.setItem('isLoggedIn', false);
      setIsLoggedIn(false);
  }

  return (
    <>
      <div className="container">
        {isLoggedIn ? (
          <>
            <FloatingButton onLogout={logout} />
            <TodoList />
          </>
        ) : (
          <Login onLogin={login} />
        )}
      </div>
    </>
  );
}

export default App;
