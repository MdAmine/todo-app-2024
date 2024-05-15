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


    const handleShow = (todo) => {
        navigate("/todo/" + todo.id, { state: { todo } });
    }

    const getPriorityBadge = (priority) => {
        switch (priority) {
            case 'P1':
                return <span className="badge bg-danger">P1</span>;
            case 'P2':
                return <span className="badge bg-warning">P2</span>;
            case 'P3':
                return <span className="badge bg-primary">P3</span>;
            case 'P4':
                return <span className="badge bg-success">P4</span>;
            default:
                return <span className="badge bg-secondary">No Priority</span>;
        }
    };

    return (
        <ul className="list-group todos mx-auto text-light">
            <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'item-complete' : ''}`}>
                <div className="todo-info d-flex align-items-center">
                    {getPriorityBadge(todo.priority)}
                    <span className="todo-title ms-2">{children}</span>
                </div>
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
                        title="show"
                        icon={faEye}
                        className="pointer"
                        style={{ marginRight: "0.3em" }}
                        onClick={() => handleShow(todo)} 
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
