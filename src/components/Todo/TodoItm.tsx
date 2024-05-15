
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEye, faPenToSquare, faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, Route, Routes } from "react-router-dom";


const TodoItm = (props) => {
   
    const handleDelete = () => {
        props.onDelete(props.item.id);
    };
  

    const handleUpdate = () => {
        const newTodo = prompt("Update todo item:", props.item.todo);
        if (newTodo !== null && newTodo.trim() !== "") {
            props.onUpdate(props.item.id, newTodo);
        }
    };
    const priorityColors = {
        P1: 'danger',
        P2: 'warning',
        P3: 'primary',
        P4: 'success'
    };
    const handleToggleComplete = () => {
        props.updateTodoState(props.item.id, props.item.completed= !props.item.completed );
        console.log(props.item.completed);
    }
  
    
    return (
        <ul className="list-group todos mx-auto text-light">
            
                <li
                    className={`list-group-item d-flex justify-content-between align-items-center`}
                >
                      <span>
                    <span className={`badge bg-${priorityColors[props.item.priority]} me-2`}>{props.item.priority}</span>
                    {props.item.todo}
                </span>
                    <div>
                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={props.item.completed ? faCheck : faTimes}    
                            className="pointer"
                            onClick={handleToggleComplete}
                        />
                         
                    {/* <Link to={`/todo/${props.item.id}`}> */}
                        <FontAwesomeIcon 
                        style={{
                            marginRight: "0.3em",
                        }}
                            icon={faEye} 
                            className="pointer" 
                        />
                    {/* </Link> */}
                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={faPenToSquare}
                            className="pointer"
                             onClick={handleUpdate}

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
