import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCheck, faEye, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import './TodoItem.css';
import { useNavigate } from "react-router";

export function TodoItem({ todo, children, onDelete, onEdit, onCheck }) {
    const navigate = useNavigate();

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
    };

    const handleShow = () => {
        navigate(`/todo/${todo.id}`, { state: { todo } });
    };

    const getPriorityBadge = (priority) => {
        const badgeClasses = {
            P1: "badge bg-danger",
            P2: "badge bg-warning",
            P3: "badge bg-primary",
            P4: "badge bg-success"
        };
        return <span className={badgeClasses[priority] || "badge bg-secondary"}>
            {priority || "No Priority"}
        </span>;
    };

    return (
        <ul className="list-group todos mx-auto text-light">
            <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'item-complete' : ''}`}>
                <div className="todo-info d-flex align-items-center">
                    {getPriorityBadge(todo.priority)}
                    <span className="todo-title ms-2">{children}</span>
                </div>
                <div className="todo-actions">
                    <FontAwesomeIcon
                        title={todo.completed ? "unCheck" : "check"}
                        icon={todo.completed ? faBan : faCheck}
                        className="pointer"
                        onClick={handleCheck}
                        style={{ marginRight: "0.3em" }}
                    />
                    <FontAwesomeIcon
                        title="show"
                        icon={faEye}
                        className="pointer"
                        style={{ marginRight: "0.3em" }}
                        onClick={handleShow}
                    />
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
