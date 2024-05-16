import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { createContext } from 'react';
import { useAuth } from './hooks/useAuth';
import AppRoutes from './AppRoutes';
import { useTodos } from './hooks/useTodos';

export const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
});

function App() {
  const { isLoggedIn, login, logout } = useAuth();
  const {todos, setTodos} = useTodos();

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      <div className="container">
        <AppRoutes isLoggedIn={isLoggedIn} todos={todos} setTodos={setTodos} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
