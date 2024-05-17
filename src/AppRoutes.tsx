import { Navigate, Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import About from './pages/About';
import TodoDetails from './components/Todo/TodoDetails';
import FloatingButton from './components/UI/FloatingButton';

const AppRoutes = ({ isLoggedIn, todos, setTodos }) => (
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
);

export default AppRoutes;
