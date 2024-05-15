import {
  faCheck,
  faEye,
  faPenToSquare,
  faTrashAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TodoItem = ({ todo, onDelete, onComplete, onEdit }) => {
  const renderPriorityIcon = () => {
    if (todo.priority === "P0") {
      return null;
    }

    return (
      <span className="badge border border-primary text-primary  ">
        {todo.priority}
      </span>
    );
  };

  return (
    <ul className="list-group todos mx-auto text-light" data-testid="todo-item">
      <li
        className={`list-group-item d-flex justify-content-between align-items-center ${
          todo.complete ? "center" : "bg-dark"
        }`}
      >
        <div className="d-flex justify-content-between align-items-center gap-2">
          {renderPriorityIcon()}
          <span>{todo.title}</span>
        </div>
        <div className="d-flex gap-1">
          <Link to={`/todos/${todo.id}`}>
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faEye}
              className="pointer"
            />
          </Link>
          <FontAwesomeIcon
            title={todo.complete ? "complete" : "unComplete"}
            style={{
              marginRight: "0.3em",
            }}
            icon={todo.complete ? faCheck : faXmark}
            className="pointer"
            onClick={() => onComplete(todo.id)}
            data-testid="complete-button"
          />

          <FontAwesomeIcon
            style={{
              marginRight: "0.3em",
            }}
            icon={faPenToSquare}
            className="pointer"
            onClick={() => onEdit(todo.id)}
            data-testid="edit-button"
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="pointer"
            onClick={() => onDelete(todo.id)}
            data-testid="delete-button"
          />
        </div>
      </li>
    </ul>
  );
};

export default TodoItem;
