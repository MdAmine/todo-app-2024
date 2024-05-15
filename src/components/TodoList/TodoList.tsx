import Header from "../Header/Header.tsx";
import TodoItem from "../TodoItem/TodoItem.tsx";
import AddTodoForm from "../AddTodoForm/AddTodoForm.tsx";
import {useMemo, useState} from "react";
import {Priority, Todo} from "../../types";
import {getTodos} from "../../utils/mockData.ts";
import TodoPrioritySearchButton from "../TodoPrioritySearchButton/TodoPrioritySearchButton.tsx";

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(getTodos())
  const [search, setSearch] = useState<string>('')
  const [priority, setPriority] = useState<Priority | null>(null)
  const searchedTodos = useMemo<Todo[]>(() => {
    return todos.filter(t => {
      return (priority === null && t.name.toLowerCase().includes(search.toLowerCase())) ||
        (t.priority === priority && t.name.toLowerCase().includes(search.toLowerCase()))
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
        <TodoPrioritySearchButton currentPriority={priority} priority={null} setPriority={setPriority}/>
        <TodoPrioritySearchButton currentPriority={priority} priority={Priority.P1} setPriority={setPriority}/>
        <TodoPrioritySearchButton currentPriority={priority} priority={Priority.P2} setPriority={setPriority}/>
        <TodoPrioritySearchButton currentPriority={priority} priority={Priority.P3} setPriority={setPriority}/>
        <TodoPrioritySearchButton currentPriority={priority} priority={Priority.P4} setPriority={setPriority}/>
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