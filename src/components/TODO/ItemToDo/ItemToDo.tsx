import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ItemToDo.css";
import {
  faBan,
  faCheck,
  faEye,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../ListToDo/ListToDo.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function ItemToDo({ props, onDelete, onModify, onToggleComplete }) {
  const { id, todo, complete, priority } = props;
  const [completed, setCompleted] = useState(complete);

  const handleDelete = () => {
    onDelete(id);
  };
  const handleModify = () => {
    const modifiedTodo = prompt("Modify todo:", todo);
    if (modifiedTodo !== null) {
      onModify(modifiedTodo);
    }
  };
  const priorityColors = {
    P1: "danger",
    P2: "warning",
    P3: "primary",
    P4: "info",
  };
  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li
          className={`list-group-item d-flex justify-content-between align-items-center ${
            complete ? "completed" : ""
          }`}
        >
          <span className={`badge text-bg-${priorityColors[priority]} mr-2`}>
            {priority}
          </span>

          <span>{props.todo}</span>
          <div>
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={complete ? faBan : faCheck}
              className="pointer"
              onClick={onToggleComplete}
            />
            <Link to={`/details/${id}`}>
              <FontAwesomeIcon
                style={{ marginRight: "0.3em", color: "white" }}
                icon={faEye}
                className="pointer"
              />
            </Link>

            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faPenToSquare}
              className="pointer"
              onClick={handleModify}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="pointer"
              data-testid="delete-icon"
              onClick={handleDelete}
            />
          </div>
        </li>
      </ul>
    </>
  );
}

export default ItemToDo;
