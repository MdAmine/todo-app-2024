import { useState } from "react";
import { faCheck, faClose, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ToDoItem(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedValue, setUpdatedValue] = useState(props.itemTitle);
    const [isChecked, setIsChecked] = useState(false); 

    function handleUpdate() {
        setIsEditing(true);
    }

    function handleCancel() {
        setIsEditing(false);
        setUpdatedValue(props.itemTitle);
    }

    function handleChange(event) {
        setUpdatedValue(event.target.value);
    }

    function handleSave() {
        props.handleUpdate(props.id, updatedValue);
        setIsEditing(false);
    }

    function toggleChecked() {
        setIsChecked(!isChecked);
    }

    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${isChecked ? 'bg-success' : ''}`}>
            {isEditing ? (
                <>
                    <input type="text" value={updatedValue} onChange={handleChange} placeholder="enter your todo"/>
                    <FontAwesomeIcon
                        style={{ marginRight: "0.3em" }}
                        icon={faCheck}
                        className="pointer"
                        onClick={handleSave}
                        data-testid="add-button"
                    />
                    <FontAwesomeIcon
                        style={{ marginRight: "0.3em" }}
                        icon={faClose}
                        className="pointer"
                        onClick={handleCancel}
                    />
                </>
            ) : (
                <>
                    <span>{props.itemTitle}</span>
                    <div>
                        <FontAwesomeIcon
                            style={{ marginRight: "0.3em" }}
                            icon={isChecked ? faClose : faCheck} 
                            className="pointer"
                            onClick={toggleChecked}
                            data-testid={`checked-button-${props.id}`}
                        />
                        <FontAwesomeIcon
                            style={{ marginRight: "0.3em" }}
                            icon={faPenToSquare}
                            className="pointer"
                            onClick={handleUpdate}
                            data-testid={`edit-button-${props.id}`}

                        />
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="pointer"
                            onClick={() => props.handleDelete(props.id)
                            }
                            data-testid={`delete-button-${props.id}`}
                        />
                    </div>
                </>
            )}
        </li>
    );
}

export default ToDoItem;
