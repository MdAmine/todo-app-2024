import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import Login from "./components/Login/Login";
import ToDo from "./components/ToDo/ToDo";
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Details from "./components/ToDo/Details";
import About from "./components/About/About";
import AuthContext from "./components/context/LoginContext";

function App() {
  let [isLoggedin,setLoggedIn]=useState(false);
   let auth=useContext(AuthContext)
  useEffect(()=>{
    if(localStorage.getItem('connected')==='true')
      setLoggedIn(true)
  },[])
  function onLogin(){
    setLoggedIn(true)
    localStorage.setItem('connected','true');

  }
  function onLogout(){
    setLoggedIn(false)  
    localStorage.setItem('connected','false');

  }

  if(!isLoggedin 
  )
    return (<> 
    <AuthContext.Provider
    value={{
      isLoggedIn:isLoggedin,
      login:()=>{onLogin()},
      logout:()=>{onLogout()}
        }}
    >
    <div className="container"><Login handleCallback={auth.login}/></div> 
    </AuthContext.Provider></>)
  else 
  return (
    <>
    <AuthContext.Provider
     value={{
      isLoggedIn:isLoggedin,
      login:()=>{onLogin()},
      logout:()=>{onLogout()}
        }}
    >
      <div className="container"> 
      <FloatingButton handleCallback={auth.logout}/>
      <Routes>
        <Route path="about" element={<About/>}></Route>
        <Route path="/todo" element={<ToDo/>}/>
        <Route path="/details/:id" element={<Details/>}/>
     </Routes>
      </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
