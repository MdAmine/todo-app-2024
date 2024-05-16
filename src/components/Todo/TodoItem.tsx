import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

interface TodoItemProps {
    id: string;
    title: string;
    priority: string;
    onDelete: () => void;
    onUpdate: (id: string, updatedTitle: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({id, title, priority, onDelete, onUpdate}) => {
    const [newTitle, setNewTitle] = useState(title);
    const [colorIconCheck, setColorIconCheck] = useState<boolean>(false);

    const handleUpdateClick = () => {
        const updatedTitle = prompt("Enter new value:", newTitle);
        if (updatedTitle !== null) {
            setNewTitle(updatedTitle);
            onUpdate(id, updatedTitle);
        }
    };

    const handleUpdateColorIconCheck = () => {
        setColorIconCheck(!colorIconCheck);
    };

    const getBadgeClass = (priority: string): string => {
        switch (priority) {
            case "P4":
                return "badge bg-success";
            case "P2":
                return "badge bg-warning";
            case "P1":
                return "badge bg-danger";
            case "P3":
                return "badge bg-primary";
            default:
                return "badge bg-secondary";
        }
    };

    return (
        <ul className="list-group todos mx-auto text-light">
            <li className={`list-group-item d-flex justify-content-between align-items-center`}>
                <span>
                    <span className={getBadgeClass(priority)}>{priority}</span>
                    {newTitle}
                </span>

                <div>
                    <FontAwesomeIcon
                        style={{marginRight: "0.3em", color: colorIconCheck ? "green" : "inherit"}}
                        icon={faCheck}
                        className="pointer"
                        onClick={handleUpdateColorIconCheck}
                    />
                    <FontAwesomeIcon
                        style={{marginRight: "0.3em"}}
                        icon={faPenToSquare}
                        className="pointer"
                        aria-label="Update Todo"
                        title="Update Todo"
                        onClick={handleUpdateClick}
                        role="button"
                        tabIndex={0}
                    />
                    <FontAwesomeIcon icon={faTrashAlt} className="pointer" onClick={onDelete} data-testid="delete-icon"/>
                </div>
            </li>
        </ul>
    );
};

export default TodoItem;
