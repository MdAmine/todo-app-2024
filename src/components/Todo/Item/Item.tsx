import { faCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Item(props) {

    const handleDelete = (idToDelete) => {

        const updatedTodos = props.list.filter(item => item.id !== idToDelete);
        props.handleCallbackList(updatedTodos);
    };


    const handleEdit = (item) => {
        const newValue = window.prompt("Edit todo item:", item.todo);
        if (newValue !== null) {
            const updatedItems = props.list.map(todo => {
                if (todo.id === item.id) {
                    return { ...todo, todo: newValue };
                }
                return todo;
            });
            props.handleCallbackList(updatedItems);
        }
    };

    return (<>
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
                        onClick={() => handleEdit(props.item)}
                    />
                    <FontAwesomeIcon icon={faTrashAlt} className="pointer" onClick={() => handleDelete(props.item.id)} />
                </div>
            </li>
        </ul>
    </>)
}

export default Item;