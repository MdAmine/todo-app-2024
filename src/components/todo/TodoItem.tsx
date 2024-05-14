import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTimes, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const TodoItem = (props) => {
    const [isChecked,setIsChecked] = useState(false);
    const handleIsChecked = () => {
        isChecked ? setIsChecked(false) : setIsChecked(true);
    }
    return (
        <>
            <ul className="list-group todos mx-auto text-light">
                <li
                    className={`list-group-item d-flex justify-content-between align-items-center ${isChecked ? 'bg-success' : ''}`}
                >
                    <span>{props.item.title}</span>
                    <div>
                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={isChecked ? faTimes : faCheck}
                            className="pointer"
                            onClick={handleIsChecked}
                        />

                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={faPenToSquare}
                            className="pointer"
                            onClick={() => props.editItem(props.item.id)}
                        />
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="pointer"
                            onClick={() => props.onDeleteItem(props.item.id)}
                        />
                    </div>
                </li>
            </ul>
        </>
    );
};

export default TodoItem;
