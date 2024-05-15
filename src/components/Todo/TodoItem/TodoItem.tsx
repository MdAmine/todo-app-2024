import { faCheck, faCircle, faEye, faEyeSlash, faPenToSquare, faSquare, faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Detail from "../../Detail/Detail";


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
        props.updateTodoState(props.item.id, props.item.complete= !props.item.complete );
        console.log(props.item.complete);
    };
    const handleDetail = () => {
        // Rediriger vers la page de détails avec les paramètres de l'élément ToDo
        window.location.href = `/details/${props.item.id}/${props.item.todo}/${props.item.complete}/${props.item.priority}`;
    };
    const priorityColors = {
        P1: 'primary',
        P2: 'success',
        P3: 'danger',
        P4: 'warning'
    };
    
        return(
            <>       
             <li className="list-group-item d-flex justify-content-between align-items-center">
               <span><span className={`badge bg-${priorityColors[props.item.priority]} me-2`}>{props.item.priority}</span>{props.item.todo}</span>
                <div>
                <FontAwesomeIcon
                        style={{ marginRight: "0.3em" }}
                        icon={props.item.complete ? faCheck : faTimes}
                        className={"pointer"}
                        onClick={handleToggleComplete}
                    />
                <Link to={`/detail/${props.item.id}/${props.item.todo}/${props.item.complete}/${props.item.priority}`}>
                    <FontAwesomeIcon
                        style={{ marginRight: "0.3em" }}
                        icon={faEye}
                        className={"pointer"}
                    />
                    </Link>
                    <FontAwesomeIcon
                        style={{ marginRight: "0.3em" }}
                        icon={faPenToSquare}
                        className="pointer"
                        onClick={handleUpdate} />
                    <FontAwesomeIcon icon={faTrashAlt}
                        className="pointer"
                        onClick={handleDelete} />
                </div>     
            </li>
            </>      
    )
}

export default TodoItem;