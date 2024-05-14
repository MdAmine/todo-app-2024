import { faCheck, faPenToSquare, faTrashAlt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Item(props) {
    const [status, setStatus] = useState(true);
    const handleDelete = (idToDelete) => {

        const updatedTodos = props.list.filter(item => item.id !== idToDelete);
        props.handleCallbackList(updatedTodos);
    };

    const setSelectedStatus = (status) => {

        setStatus(status);
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
                className={`list-group-item d-flex justify-content-between align-items-center ${
                    status ? '' : 'selected'
                  }`}
            >
                <span>{props.item.todo}</span>
                <div>
                    {/* <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={faCheck}
                        className="pointer"
                    /> */}
                    {status ? (
                            <FontAwesomeIcon
                                style={{
                                    marginRight: "0.3em",
                                }}
                                icon={faCheck}
                                className="pointer"
                                onClick={() => setSelectedStatus(false)}
                        />
                        ) : (
                            <FontAwesomeIcon
                                style={{
                                    marginRight: "0.3em",
                                }}
                                icon={faXmark}
                                className="pointer"
                                onClick={() => setSelectedStatus(true)}
                           />
                        )}
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