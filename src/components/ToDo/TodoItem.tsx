import { faCheck, faP, faPenToSquare, faRepeat, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const TodoItem = (props) => {

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

    const handlePriotity = () => {
        let priority;
        const title = prompt("edit your priority:", props.item.priority);
        if (priority == null || priority === "") {
            priority = props.item.priority;
        } else {
            priority = title;
        }
        props.onEditP(props.item.id, priority);
    }


    return (
        <ul className={`list-group todos mx-auto text-ligh`}>
                <li
                className={`list-group-item d-flex justify-content-between align-items-center ${props.item.complete && 'item-complete'}`}
                >
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
                        icon={faP}

                        className="pointer"
                        onClick={handlePriotity}
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