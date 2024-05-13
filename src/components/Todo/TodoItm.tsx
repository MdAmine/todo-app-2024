import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TodoItm = (props) => {
    // Fonction pour gérer la suppression de l'élément
    const handleDelete = () => {
        props.onDelete(props.item.id);
    };

    return (
        <ul className="list-group todos mx-auto text-light">
            
                <li
                    className={`list-group-item d-flex justify-content-between align-items-center`}
                >
                    <span>{props.item.todo}</span>
                    <div>
                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={faCheck}
                            className="pointer"
                        />

                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={faPenToSquare}
                            className="pointer"
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
