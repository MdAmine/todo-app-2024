import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import './TodoItem.css';

export function TodoItem({ todo, children, onDelete, onEdit }) {
    
    const handleDelete = () => {
        onDelete(todo.id);
    };

    const handleEdit = () => {
        const updatedTitle = prompt("Edit todo", todo.title);
        if (updatedTitle) {
            onEdit(todo.id, updatedTitle);
        }
    };

    return (
        <ul className="list-group todos mx-auto text-light">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>{children}</span>
                <div className="todo-actions">
                    <FontAwesomeIcon
                        icon={faCheck}
                        className="pointer"
                        style={{ marginRight: "0.3em" }}
                    />
                    <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="pointer"
                        onClick={handleEdit}
                        style={{ marginRight: "0.3em" }}
                    />
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="pointer"
                        onClick={handleDelete}
                    />
                </div>
            </li>
        </ul>
    );
}
