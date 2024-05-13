import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton.tsx";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm.tsx";
import TodoItem from "./components/TodoItem/TodoItem.tsx";
import Header from "./components/Header/Header.tsx";
import {Todo} from "./types";
import {getTodos} from "./utils/mockData.ts";
import {useMemo, useState} from "react";
import LoginForm from "./components/LoginForm/LoginForm.tsx";

function App() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(
    localStorage.getItem('isLoggedIn') == 'true' ?? false
  )
  const [todos, setTodos] = useState<Todo[]>(getTodos())
  const [search, setSearch] = useState<string>('')
  const searchedTodos = useMemo<Todo[]>(() => {
    return todos.filter(t => t.name.includes(search))
  }, [todos, search])

  const handleAddTodo = (todo: Todo) => {
    todo.id = Math.max(...todos.map(t => t.id)) + 1
    setTodos(prevState => {
      return [...prevState, todo]
    })
  }

  const handleSearch = (key: string) => {
    setSearch(key)
  }

  const handleDeleteTodo = (todoId: number) => {
    setTodos(prevState => {
      return prevState.filter(t => t.id !== todoId)
    })
  }

  const handleUpdateTodo = (todo: Todo) => {
    setTodos(prevState => prevState.map(t => {
      if (t.id === todo.id) {
        t.name = todo.name
        t.completed = todo.completed
      }
      return t
    }))
  }

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <div className="container">
      {
        isLoggedIn ? <>
          <Header onSearch={handleSearch}/>
          <ul className="list-group todos mx-auto text-light">
            {searchedTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo}
                        onUpdate={handleUpdateTodo}/>
            ))}
          </ul>
          <AddTodoForm onAddTodo={handleAddTodo}/>
        </> : <LoginForm onLogin={handleLogin}/>
      }
      <FloatingButton onLogout={handleLogout}/>
    </div>
  );
}

export default App;
