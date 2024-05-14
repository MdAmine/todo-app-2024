import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton.tsx";
import {useState} from "react";
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import TodoList from "./components/TodoList/TodoList.tsx";

function App() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(
    localStorage.getItem('isLoggedIn') == 'true'
  )


  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <div className="container">
      {
        isLoggedIn ? <TodoList/> : <LoginForm onLogin={handleLogin}/>
      }
      <FloatingButton onLogout={handleLogout}/>
    </div>
  );
}

export default App;
