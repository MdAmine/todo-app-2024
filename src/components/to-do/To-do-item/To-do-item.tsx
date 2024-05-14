import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

function ToDoItem({item, deleteToDo, editToDo}) {
    return (
        <ul className="list-group todos mx-auto text-light">
            <li
                className={`list-group-item d-flex justify-content-between align-items-center`}
            >
                <span>{item.name}</span>
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
                        onClick={() => editToDo(item.id)}
                    />
                    <FontAwesomeIcon icon={faTrashAlt} className="pointer" onClick={() => deleteToDo(item.id)}/>
                </div>
            </li>
        </ul>
    );
}

export default ToDoItem