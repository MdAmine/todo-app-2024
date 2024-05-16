import {faCheck, faPenToSquare, faTrashAlt, faXmark, faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PriorityBadge from "../PriorityBadge.tsx";
import {useNavigate} from "react-router-dom";
import {TodoItemProps} from "../../types/todoItemProps.ts";

export const TodoItem = (props: TodoItemProps) => {
    const navigate = useNavigate();

    const deleteTodoHandler = () => {
        console.log(props.todo.id);
        props.onDeleted(props.todo.id);

    }
    const editTodoHandler = () => {
        const newTitle = prompt("Enter new title", props.todo.title);
        if (newTitle) {
            props.onEdit({
                ...props.todo,
                title: newTitle
            });
        }
    }
    const completeTodoHandler = () => {
        props.onCompleted(props.todo.id);
        console.log(props.todo.id);
    }

    return (
        <li
            className={`list-group-item d-flex justify-content-between align-items-center ${(props.todo.completed) ? null : 'item-complete'}`}
        >
            <span>
        <PriorityBadge priority={props.todo.priority}/>&nbsp;{props.todo.title}
      </span>
            <div>
                <FontAwesomeIcon
                    data-testid="detail-icon"
                    style={{
                        marginRight: "0.3em",
                    }}
                    icon={faEye}
                    className="pointer"
                    onClick={() => navigate(`/todos/${props.todo.id}`)}
                />
                <FontAwesomeIcon
                    data-testid="completed-icon"
                    style={{
                        marginRight: "0.3em",
                    }}
                    icon={props.todo.completed ? faCheck : faXmark}
                    className="pointer"
                    onClick={completeTodoHandler}
                />
                <FontAwesomeIcon
                    data-testid="edit-icon"
                    style={{
                        marginRight: "0.3em",
                    }}
                    icon={faPenToSquare}
                    className="pointer"
                    onClick={editTodoHandler}
                />
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    data-testid="delete-icon"
                    className="pointer"
                    onClick={deleteTodoHandler}
                />
            </div>
        </li>
    );
}