import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEye, faPenToSquare, faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TodoItm = (props) => {
    const { item, onDelete, onUpdate, updateTodoState } = props;

    const handleToggleComplete = () => {
        updateTodoState(item.id, !item.completed);
    };

    const handleUpdate = () => {
        const newTodo = prompt("Update todo item:", item.todo);
        if (newTodo !== null && newTodo.trim() !== "") {
            onUpdate(item.id, newTodo);
        }
    };

    const handleDelete = () => {
        onDelete(item.id);
    };

    const priorityColors = {
        P1: 'danger',
        P2: 'warning',
        P3: 'primary',
        P4: 'success'
    };

    return (
        <ul className="list-group todos mx-auto text-light">
            <li className={`list-group-item d-flex justify-content-between align-items-center`}>
                <span>
                    <span className={`badge bg-${priorityColors[item.priority]} me-2`}>{item.priority}</span>
                    {item.todo}
                </span>
                <div>
                    <FontAwesomeIcon
                        style={{ marginRight: "0.3em" }}
                        icon={item.completed ? faCheck : faTimes}
                        className="pointer"
                        onClick={handleToggleComplete}
                    />
                    <Link to={`/todo/${item.id}/${item.todo}/${item.completed}/${item.priority}`}>
                        <FontAwesomeIcon
                            style={{ marginRight: "0.3em", color: "white" }}
                            icon={faEye}
                            className="pointer"
                        />
                    </Link>
                    <FontAwesomeIcon
                        style={{ marginRight: "0.3em" }}
                        icon={faPenToSquare}
                        className="pointer"
                        onClick={handleUpdate}
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

export default TodoItm;
