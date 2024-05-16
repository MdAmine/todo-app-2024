import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faClipboard, faPenToSquare, faTrashAlt, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Todo} from "../../types";
import TodoPriorityBadge from "../TodoPriorityBadge/TodoPriorityBadge.tsx";
import {useNavigate} from "react-router-dom";

function TodoItem({todo, onDelete, onUpdate}: {
  todo: Todo,
  onDelete: (todoId: number) => void,
  onUpdate: (todo: Todo) => void,
}) {
  const navigate = useNavigate()

  const handleUpdate = () => {
    const newName = prompt('Todo name', todo.name)
    if (newName) {
      onUpdate({
        ...todo,
        name: newName,
      })
    }
  }

  const handleCheck = () => {
    onUpdate({
      ...todo,
      completed: !todo.completed,
    })
  }

  const handleView = () => {
    navigate(`todos/${todo.id}`)
  }

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${(todo.completed) ? 'item-complete' : null}`}
    >
      <span>
        <TodoPriorityBadge priority={todo.priority}/>&nbsp;{todo.name}
      </span>
      <div>
        <FontAwesomeIcon
          style={{
            marginRight: "0.3em",
          }}
          icon={(todo.completed) ? faXmark : faCheck}
          onClick={handleCheck}
          className="pointer"
          aria-label='check-btn'
        />
        <FontAwesomeIcon
          style={{
            marginRight: "0.3em",
          }}
          icon={faClipboard}
          onClick={handleView}
          className="pointer"
        />
        <FontAwesomeIcon
          style={{
            marginRight: "0.3em",
          }}
          icon={faPenToSquare}
          className="pointer"
          onClick={handleUpdate}
          aria-label='update-btn'
        />
        <FontAwesomeIcon icon={faTrashAlt} className="pointer"
                         onClick={() => onDelete(todo.id)}
                         aria-label='delete-btn'/>
      </div>
    </li>
  )
}

export default TodoItem