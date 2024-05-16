import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import About from './pages/About';
import TodoDetails from './components/Todo/TodoDetails';
import { todoItems as initialTodoItems } from './Utils';
import FloatingButton from './components/UI/FloatingButton';

export const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todos, setTodos] = useState(initialTodoItems);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ login: handleLogin, logout: handleLogout, isLoggedIn }}>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to={isLoggedIn ? '/home' : '/login'} />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/home" /> : <Authentication />}
          />
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <>
                  <FloatingButton />
                  <Home todos={todos} setTodosHome={setTodos} />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/todo/:id"
            element={
              isLoggedIn ? (
                <>
                  <FloatingButton />
                  <TodoDetails />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/about"
            element={
              isLoggedIn ? (
                <>
                  <FloatingButton />
                  <About />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
