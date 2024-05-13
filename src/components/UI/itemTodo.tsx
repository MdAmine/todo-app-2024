import {faCheck, faCircleXmark, faPenToSquare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                <span>{todo.title}</span>
                <div>
                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={!todo.completed ? faCheck : faCircleXmark}
                        className={`pointer`}
                        onClick={handleChecked}
                    />

                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={faPenToSquare}
                        className="pointer"
                        onClick={handleEdit}
                    />
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="pointer"
                        onClick={handleDelete}
                    />
                </div>
            </li>
        </ul>
    )
}

export default ItemTodo;