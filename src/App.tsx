import  { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TodoItemDetail from "./components/Todo/TodoItem/TodoItemDetail";
import initTodoItems from "./Utils";
import About from "./components/About/About";
import { AuthContext } from "./context/authContext";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [TodoItems] = useState(initTodoItems);
  let { login,logout } = useContext(AuthContext); 

  useEffect(()=>{
    if(localStorage.getItem("isLoggedIn")==="true"){
      setIsLoggedIn(true);
    }
  },[])

  login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>
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
      <Login onLogin={login} />
      }
        
        <FloatingButton logout={logout}/>
      </div>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;