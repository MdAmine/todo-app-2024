import {faCheck, faCircleXmark, faEye, faPenToSquare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";


const ItemTodo = ({todo , onDelete , onEdit , onChecked}) => {

    const handleDelete = () => {
        onDelete(todo.id);
    };

    const handleEdit = () => {
        let text;
        let title = prompt("edit your todo:", todo.title);
        if (title === null || title === "") {
            text = todo.title;
        } else {
            text = title;
        }
        onEdit(todo.id, text);
    }

    const handleChecked = () => {
        onChecked(todo.id);
    }

    return (
        <ul className="list-group todos mx-auto text-light">
            <li
                className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? "item-complete" : ""}`}
            >
                <span className={`badge  
                    ${todo.priority === 'P1' ? 'bg-danger' : ''}
                    ${todo.priority === 'P2' ? 'bg-warning' : ''}
                    ${todo.priority === 'P3' ? 'bg-primary' : ''}
                    ${todo.priority === 'P4' ? 'bg-success' : ''}`
                }>{todo.priority}</span>
                <span>{todo.title}</span>
                <div>
                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={!todo.completed ? faCheck : faCircleXmark}
                        className={`pointer`}
                        onClick={handleChecked}
                        aria-label={!todo.completed ? "check" : "uncheck"}
                    />

                    <Link to={`/todo/${todo.id}`}>
                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={faEye}
                            className="pointer"
                            aria-label={"details"}
                        ></FontAwesomeIcon>
                    </Link>

                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={faPenToSquare}
                        className="pointer"
                        onClick={handleEdit}
                        aria-label={"edit"}
                    />

                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="pointer"
                        onClick={handleDelete}
                        aria-label="delete"
                    />
                </div>
            </li>
        </ul>
    )
}

export default ItemTodo;