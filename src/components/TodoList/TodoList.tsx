import Header from "../Header/Header.tsx";
import TodoItem from "../TodoItem/TodoItem.tsx";
import AddTodoForm from "../AddTodoForm/AddTodoForm.tsx";
import {useMemo, useState} from "react";
import {Priority, Todo} from "../../types";
import {getTodos} from "../../utils/mockData.ts";

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(getTodos())
  const [search, setSearch] = useState<string>('')
  const [priority, setPriority] = useState<Priority>(Priority.ALL)
  const searchedTodos = useMemo<Todo[]>(() => {
    return todos.filter(t => {
      return t.name.toLowerCase().includes(search.toLowerCase()) &&
        t.priority === priority
    })
  }, [todos, search, priority])

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

  return (<>
    <Header onSearch={handleSearch}/>
    <div className='d-flex justify-content-center mb-3'>
      <div className="btn-group">
        <button type="button" className={`btn btn-outline-dark ${(priority === Priority.ALL ? 'active' : null)}`}
                onClick={() => setPriority(Priority.ALL)}>
          ALL
        </button>
        <button type="button" className={`btn btn-outline-danger ${(priority === Priority.P1 ? 'active' : null)}`}
                onClick={() => setPriority(Priority.P1)}>
          P1
        </button>
        <button type="button" className={`btn btn-outline-warning ${(priority === Priority.P2 ? 'active' : null)}`}
                onClick={() => setPriority(Priority.P2)}>
          P2
        </button>
        <button type="button" className={`btn btn-outline-info ${(priority === Priority.P3 ? 'active' : null)}`}
                onClick={() => setPriority(Priority.P3)}>
          P3
        </button>
        <button type="button" className={`btn btn-outline-success ${(priority === Priority.P4 ? 'active' : null)}`}
                onClick={() => setPriority(Priority.P4)}>
          P4
        </button>
      </div>
    </div>
    <ul className="list-group todos mx-auto text-light" aria-label='todos-list'>
      {searchedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo}
                  onUpdate={handleUpdateTodo}/>
      ))}
    </ul>
    <AddTodoForm onAddTodo={handleAddTodo} priority={priority}/>
  </>)
}

export default TodoList