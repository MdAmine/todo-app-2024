import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li className={`list-group-item d-flex justify-content-between align-items-center`}>
          <span>{props.item.todo}</span>
          <div>
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faCheck}
              className="pointer"
            />

            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faPenToSquare}
              className="pointer"
            />
            <FontAwesomeIcon icon={faTrashAlt} className="pointer" onClick={() => props.onDelete(props.item.id)}/>
          </div>
        </li>
      </ul>
    </>
  );
}

export default TodoItem;