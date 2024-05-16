import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login/Login";
import Todolist from "./components/Todo/Todolist";
import FloatingButton from './components/UI/FloatingButton';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Detail from './components/Todo/Detail';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    console.log(isLoggedIn); 
  }, [isLoggedIn]);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true"); 
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  // <BrowserRouter>
  //          <Routes>

  //     {!isLoggedIn && <Login onLogin={handleLogin} />}
  //     {isLoggedIn && (
  //       <>
  //         <Todolist />
  //         <FloatingButton onLogout={handleLogout} />
  //         <Routes>
  //       <Route path="/todolist" element={<Todolist />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/login" element={<Login />} />
  //     </Routes>
         
  //       </>
        
        
  //     )}
  //     </Routes>

  //          </BrowserRouter>
 return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login onLogin={handleLogin}/>
              ) : (
                <>
                  <Todolist />
                  <FloatingButton onLogout={handleLogout}  />
                </>
              )
            }
          />
          <Route path="/todo/:id/:todo/:completed/:priority" element={<Detail />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  
  
}

export default App;
