import { faCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TodoItem =(props) =>{
        return(
     <li
                    className={`list-group-item d-flex justify-content-between align-items-center`}>
                    <span>{props.item.todo}</span>
                    <div>
                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={faCheck}
                            className="pointer" />

                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={faPenToSquare}
                            className="pointer" />
                        <FontAwesomeIcon icon={faTrashAlt} className="pointer" />
                    </div>
                </li>
    )
}

export default TodoItem;