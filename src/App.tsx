import  { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoItemDetail from "./components/Todo/TodoItem/TodoItemDetail";
import initTodoItems from "./Utils";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [TodoItems, setTodoItems] = useState(initTodoItems);

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
    <Router>
      <div className="container">
        <Routes>
          <Route path="/details/:id" element={<TodoItemDetail todoItems={TodoItems}/>} /> 
          <Route path="/" element={
            <>
              {isLoggedIn ? <Todo TodoItems={TodoItems}/> : <Login onLogin={handleLogin} />}
              <FloatingButton logout={handleLogout}/>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;