import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Todo} from "../../types";
import TodoPriorityBadge from "../TodoPriorityBadge/TodoPriorityBadge.tsx";

function TodoItemView() {
  const {todoId} = useParams();
  const [todo, setTodo] = useState<Todo | null>(null)

  useEffect(() => {
    if (todoId) {
      const todos = JSON.parse(localStorage.getItem('todos') ?? '[]') as Todo[]
      setTodo(todos.find(t => t.id === parseInt(todoId)) ?? null)
    }
  }, [todoId]);

  if (!todo) {
    return (<div className='container'>
      <h2>Not found</h2>
    </div>)
  }

  return (
    <div className='container text-white'>
      <p>Priority: <TodoPriorityBadge priority={todo.priority}/></p>
      <p>Name: {todo.name}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default TodoItemView