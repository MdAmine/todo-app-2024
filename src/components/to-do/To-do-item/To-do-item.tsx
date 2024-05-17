import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function ToDoItem({item, deleteToDo, editToDo, completeTask, onItemClick}) {
    return (
        <ul className="list-group todos mx-auto text-light">
            <li
                className={`list-group-item d-flex justify-content-between align-items-center`}
            >
                <span style={{
                    marginRight: '10px',
                    backgroundColor: getPriorityColor(item.priority),
                    padding: '2px 5px',
                    borderRadius: '3px'
                }}>
                    {item.priority}
                </span>
                <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
                    {item.name}
                </span>
                <div>
                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={faCheck}
                        className="pointer"
                        title="complete"
                        onClick={() => completeTask(item.id)}
                    />

                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={faPenToSquare}
                        className="pointer"
                        title="edit"
                        onClick={() => editToDo(item.id)}
                    />
                    <FontAwesomeIcon icon={faTrashAlt} className="pointer" title="delete"
                                     onClick={() => deleteToDo(item.id)}/>
                    <div>
                        <Link to={`/details/${item.id}`}>View Details</Link>
                    </div>
                </div>
            </li>
        </ul>
    );
}

function getPriorityColor(priority) {
    switch (priority) {
        case 'P1':
            return 'red';
        case 'P2':
            return 'yellow';
        case 'P3':
            return 'green';
        case 'P4':
            return 'blue';
        default:
            return 'gray';
    }
}

export default ToDoItem