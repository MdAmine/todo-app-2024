import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import { useEffect, useState } from "react";

function App() {

  const [isLoged, setIsLoged] = useState(false);

  function handleLogIn() {
    setIsLoged(!isLoged);
  }

  useEffect(() => {console.log(isLoged)}, [isLoged])

  if (!isLoged)
    return <div className="container"><Login onLoged={handleLogIn} /></div>
  
  return (
    <Routes>
      <Route path="/todo-list" element={
        <div className="container">
           <Todo />

          <FloatingButton onLoged={handleLogIn} />
        </div>
      }/>

      <Route path="*" element={<Navigate replace to="/todo-list" />} />

      {/* <Route path="/about" Component={About}/> */}
      
    </Routes>
  );
}

export default App;
