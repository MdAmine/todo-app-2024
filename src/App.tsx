import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import "./App.css";
import ToDo from "./components/ToDo/ToDo";
import { Login } from "./components/Login/Login";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { TodoDetail } from "./components/ToDo/TodoDetail";
import About from "./components/about/About";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isLogged, handleLogin, handleLogout } = useAuth();

  


  return (
    <>
      <div className="container">

        {isLogged && <FloatingButton handleLogout={handleLogout} />}

            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin}/>} />
              <Route path='/' element={<ProtectedRoute authenticated={isLogged}/>}>
                <Route  path='todo' element={<ToDo/>}/>
                <Route path='todo/:id' element={<TodoDetail/>} />
                <Route path="about" element={<About onLogout={handleLogout}/>} />
              </Route>
              <Route path='*' element={<Navigate to="/" />} />
            </Routes>
      </div>
    </>
  );
}

export default App;
