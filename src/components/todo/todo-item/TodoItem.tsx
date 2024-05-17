import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faInfoCircle, faPenToSquare, faTimes, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const TodoItem = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleIsChecked = () => {
        isChecked ? setIsChecked(false) : setIsChecked(true);
    }
    const getStatusClass = (status) => {
        switch (status) {
            case 'p1':
                return 'bg-danger';
            case 'p2':
                return 'bg-warning';
            case 'p3':
                return 'bg-info';
            case 'p4':
                return 'bg-success';
            default:
                return 'bg-primary';
        }
    }
    return (
        <>
            <ul className="list-group todos mx-auto text-light">
                <li
                    className={`list-group-item d-flex justify-content-between align-items-center ${isChecked ? 'bg-success' : ''}`}
                >

                    <span>
                        <span className={`badge ${getStatusClass(props.item.status)}`}
                              style={{
                                  marginRight: "0.5em",
                              }}
                        >{props.item.status}</span>
                        {props.item.title}
                    </span>
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
                            icon={faInfoCircle}
                            className="pointer"
                            onClick={() => props.onViewDetails(props.item.id)}
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
