import  { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TodoItemDetail from "./components/Todo/TodoItem/TodoItemDetail";
import initTodoItems from "./Utils";
import About from "./components/About/About";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [TodoItems] = useState(initTodoItems);

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
    <BrowserRouter>
      <div className="container">
        {isLoggedIn ?
        <Routes>
        <Route path="/details/:id" element={<TodoItemDetail todoItems={TodoItems}/>} /> 
        <Route path="/" element={
            <Todo TodoItems={TodoItems}/>
        } />

        <Route path="/about" element={<About/>}/>
      </Routes>
      :
      <Login onLogin={handleLogin} />
      }
        
        <FloatingButton logout={handleLogout}/>
      </div>
    </BrowserRouter>
  );
}

export default App;