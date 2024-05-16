import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {useContext} from "react";
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import TodoList from "./components/TodoList/TodoList.tsx";
import {AuthContext} from "./context/AuthContextProvider.tsx";

function App() {
  const {isLoggedIn} = useContext(AuthContext)!;

  if (isLoggedIn) {
    return (
      <TodoList/>
    )
  }

  return (
    <LoginForm/>
  )
}

export default App;
