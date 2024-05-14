import { faCheck, faPenToSquare, faSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TodoItem = (props) => {
    const handleUpdate = () => {
        const newTitle = prompt("Update Todo:", props.item.todo);
        if (newTitle) {
            props.updateTodoItem(props.item.id, newTitle);
        }
    };

    const handleDelete = () => {
        props.deleteTodoItem(props.item.id);
    };

    const handleToggleComplete = () => {
        props.updateTodoItem(props.item.id, {
            ...props.item,
            complete: !props.item.complete,
        });
        console.log(props.item.complete);
    };
    
        return(
            <>       
             <li className={`list-group-item d-flex justify-content-between align-items-center ${props.item.complete ? 'completed' : ''}`}>

               <span>{props.item.todo}</span>
                <div>
                <FontAwesomeIcon
    style={{ marginRight: "0.3em" }}
    icon={props.item.complete ? faCheck : faSquare} // Conditionally render faCheck if complete, faSquare if not
    className={`pointer ${props.item.complete ? 'text-success' : ''}`}
    onClick={handleToggleComplete}
/>
                    <FontAwesomeIcon
                        style={{ marginRight: "0.3em" }}
                        icon={faPenToSquare}
                        className="pointer"
                        onClick={handleUpdate} />

                    <FontAwesomeIcon icon={faTrashAlt}
                        className="pointer"
                        onClick={handleDelete} />
                </div>
            </li></>      
    )
}

export default TodoItem;