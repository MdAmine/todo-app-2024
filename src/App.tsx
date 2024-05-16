import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { createContext, useState } from 'react';
import { useAuth } from './hooks/useAuth';
import AppRoutes from './AppRoutes';
import { todoItems as initialTodoItems } from './Utils';

export const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
});

function App() {
  const { isLoggedIn, login, logout } = useAuth();
  const [todos, setTodos] = useState(initialTodoItems);

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      <div className="container">
        <AppRoutes isLoggedIn={isLoggedIn} todos={todos} setTodos={setTodos} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
