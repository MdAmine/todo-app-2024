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

  return (
    <>
      <div className="container">
        {isLoggedIn ? (
          <>
            <FloatingButton />
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
