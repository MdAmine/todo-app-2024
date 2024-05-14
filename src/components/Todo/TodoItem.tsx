import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";


interface TodoItemProps {
    title: string;
    onDelete: () => void;
    onUpdate: (updatedTitle: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({title, onDelete, onUpdate}) => {
    const [newTitle, setNewTitle] = useState(title);
    const [colorIconCheck, setColorIconCheck] = useState<boolean>(false);

    const handleUpdateClick = () => {
        const updatedTitle = prompt("Enter new value:", newTitle);
        if (updatedTitle !== null && updatedTitle.trim() !== "") {
            setNewTitle(updatedTitle);
            onUpdate(updatedTitle);
        }
    };
    const handleUpdateColorIconCheck = () => {
        setColorIconCheck(!colorIconCheck);
    };

    return (
        <>
            <ul className="list-group todos mx-auto text-light">
                <li className={`list-group-item d-flex justify-content-between align-items-center`}>
                    <span>{newTitle}</span>
                    <div>
                        <FontAwesomeIcon
                            style={{ marginRight: "0.3em", color: colorIconCheck ? "green" : "inherit" }}
                            icon={faCheck}
                            className="pointer"
                            onClick={handleUpdateColorIconCheck}
                        />
                        <FontAwesomeIcon
                            style={{marginRight: "0.3em"}}
                            icon={faPenToSquare}
                            className="pointer"
                            onClick={handleUpdateClick}
                        />
                        <FontAwesomeIcon icon={faTrashAlt} className="pointer" onClick={onDelete}/>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default TodoItem;
