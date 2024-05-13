import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Login from "./components/Login/Login";
import AddToDo from "./components/ToDo/AddToDo";
import ToDo from "./components/ToDo/ToDo";
import { useState } from "react";

function App() {
  let [isLoggedin,setLoggedIn]=useState(false);
  function callback(){
    setLoggedIn(true)
  }
  function call(){
    setLoggedIn(false)
  }
  if(!isLoggedin 
  )
    return (<> <div className="container"><Login handleCallback={callback}/></div> </>)
  else 
  return (
    <>
      <div className="container"> 
      <ToDo />
      <FloatingButton handleCallback={call}/>
      </div>
    </>
  );
}

export default App;
