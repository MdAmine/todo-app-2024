import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Login from "./components/Login/Login";
import ToDo from "./components/ToDo/ToDo";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Details from "./components/ToDo/Details";
import About from "./components/About/About";

function App() {
  let [isLoggedin,setLoggedIn]=useState(false);
  useEffect(()=>{
    if(localStorage.getItem('connected')==='true')
      setLoggedIn(true)
  },[])
  function onLogin(){
    setLoggedIn(true)
    localStorage.setItem('connected','true');

  }
  function call(){
    setLoggedIn(false)  
    localStorage.setItem('connected','false');

  }

  if(!isLoggedin 
  )
    return (<> 
    <div className="container"><Login handleCallback={onLogin}/></div> </>)
  else 
  return (
    <>
      <div className="container"> 
      <FloatingButton handleCallback={call}/>
      <Routes>
        <Route path="about" element={<About/>}></Route>
        <Route path="/todo" element={<ToDo/>}/>
        <Route path="/details/:id" element={<Details/>}/>
     </Routes>
      </div>
    </>
  );
}

export default App;
