import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import './TodoItem.css';

export function TodoItem({ todo, children, onDelete, onEdit, onCheck }) {
    
    const handleDelete = () => {
        onDelete(todo.id);
    };

    const handleEdit = () => {
        const updatedTitle = prompt("Edit todo", todo.title);
        if (updatedTitle) {
            onEdit(todo.id, updatedTitle);
        }
    };

    const handleCheck = () => {
        onCheck(todo.id);
    }

    return (
        <ul className="list-group todos mx-auto text-light">
            <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'item-complete' : ''}`}>
                <span>{children}</span>
                <div className="todo-actions">
                    {todo.completed ? (
                        <FontAwesomeIcon
                            title="unCheck"
                            icon={faBan}
                            className="pointer"
                            onClick={handleCheck}
                            style={{ marginRight: "0.3em" }}
                        />
                    ) : (
                        <FontAwesomeIcon
                            title="check"
                            icon={faCheck}
                            className="pointer"
                            onClick={handleCheck}
                            style={{ marginRight: "0.3em" }}
                        />
                    )}
                    <FontAwesomeIcon
                        title="edit"
                        icon={faPenToSquare}
                        className="pointer"
                        onClick={handleEdit}
                        style={{ marginRight: "0.3em" }}
                    />
                    <FontAwesomeIcon
                        title="delete"
                        icon={faTrashAlt}
                        className="pointer"
                        onClick={handleDelete}
                    />
                </div>

            </li>
        </ul>
    );
}
