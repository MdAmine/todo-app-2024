import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onComplete }) => {
  return (
    <ul className="list-group todos mx-auto text-light">
      <li
        className={`list-group-item d-flex justify-content-between align-items-center`}
      >
        <span>{todo.title}</span>
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
