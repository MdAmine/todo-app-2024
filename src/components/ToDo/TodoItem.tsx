import { faCheck,  faPenToSquare, faRepeat, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom";

export const TodoItem = (props) => {

    const navigate = useNavigate();

    const handleDelete = () => {
        props.onDelete(props.item.id);
    };

    const handleEdit = () => {
        let text;
        const title = prompt("edit your todo:", props.item.title);
        if (title == null || title === "") {
            text = props.item.title;
        } else {
            text = title;
        }
        props.onEdit(props.item.id, text);
    }

    const handleCheck = () => {
        props.onCheck(props.item.id);
    }


    return (
        <ul className={`list-group todos mx-auto text-ligh`}>
                <li
                className={`list-group-item d-flex justify-content-between align-items-center ${props.item.complete && 'item-complete'}`}
                >
                
                <span className={`badge  
                    ${props.item.priority === 'P1' ? 'bg-danger' : ''}
                    ${props.item.priority === 'P2' ? 'bg-warning' : ''}
                    ${props.item.priority === 'P3' ? 'bg-primary' : ''}
                    ${props.item.priority === 'P4' ? 'bg-success' : ''}`
                    }>{props.item.priority}</span>

                <span>{props.item.title}</span>
                <div>
                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={!props.item.complete ? faCheck : faRepeat}
                        className="pointer"
                        onClick={handleCheck}
                    />

                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={faPenToSquare}

                        className="pointer"
                        onClick={handleEdit}
                    />

                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={faEye}

                        className="pointer"
                        onClick={() => navigate(`/todo/${props.item.id}`)}

                    />
                    <FontAwesomeIcon 
                        icon={faTrashAlt} 
                        className="pointer" 
                        onClick={handleDelete}
                    />
                </div>
                </li>
            </ul>
    )
}