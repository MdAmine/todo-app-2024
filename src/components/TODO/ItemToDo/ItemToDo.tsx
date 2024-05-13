import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../ListToDo/ListToDo.css";
function ItemToDo({ props, onDelete }) {
  const { id, todo } = props;
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li
          className={`list-group-item d-flex justify-content-between align-items-center`}
        >
          <span>{props.todo}</span>
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
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="pointer"
              onClick={handleDelete}
            />
          </div>
        </li>
      </ul>
    </>
  );
}

export default ItemToDo;
