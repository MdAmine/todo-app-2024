import { faCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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
    
        return(
            <><li className={`list-group-item d-flex justify-content-between align-items-center`}>
               <span>{props.item.todo}</span>
                <div>
                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={faCheck}
                        className="pointer" />

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