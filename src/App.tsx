import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import ToDo from "./components/ToDo/ToDo";
import { Login } from "./components/Login/Login";
import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { TodoDetail } from "./components/ToDo/TodoDetail";

function App() {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("isLogged", "true");
    setIsLogged(true);
    navigate("/todo");
  };

  const handleLogout = () => {
    localStorage.setItem("isLogged", "false");
    setIsLogged(false);
  };

  


  return (
    <>
      <div className="container">

        {isLogged && <FloatingButton handleLogout={handleLogout} />}


        {/*{!isLogged && <Login onLogin={handleLogin} />}

       */}

            <Routes>
              
              <Route path="/login" element={<Login onLogin={handleLogin}/>} />
              <Route path='/' element={<ProtectedRoute authenticated={isLogged}/>}>
                <Route  path='todo' element={<ToDo/>}/>
                <Route path='todo/:id' element={<TodoDetail/>} />
              </Route>
              <Route path='*' element={<Navigate to="/" />} />
            </Routes>
      </div>
    </>
  );
}

export default App;
