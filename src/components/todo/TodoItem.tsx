import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <ul className="list-group todos mx-auto text-light">
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
          <FontAwesomeIcon
            style={{
              marginRight: "0.3em",
            }}
            icon={todo.complete ? faCheck : faXmark}
            className="pointer"
            onClick={() => onComplete(todo.id)}
          />

          <FontAwesomeIcon
            style={{
              marginRight: "0.3em",
            }}
            icon={faPenToSquare}
            className="pointer"
            onClick={() => onEdit(todo.id)}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="pointer"
            onClick={() => onDelete(todo.id)}
          />
        </div>
      </li>
    </ul>
  );
};

export default TodoItem;
