import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashAlt, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Todo} from "../../types";
import TodoPriorityBadge from "../TodoPriorityBadge/TodoPriorityBadge.tsx";

function TodoItem({todo, onDelete, onUpdate}: {
  todo: Todo,
  onDelete: (todoId: number) => void,
  onUpdate: (todo: Todo) => void,
}) {
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

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${(todo.completed) ? null : 'item-complete'}`}
    >
      <span>
        <TodoPriorityBadge priority={todo.priority}/>&nbsp;{todo.name}
      </span>
      <div>
        <FontAwesomeIcon
          style={{
            marginRight: "0.3em",
          }}
          icon={(todo.completed) ? faCheck : faXmark}
          onClick={handleCheck}
          className="pointer"
          aria-label='check-btn'
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