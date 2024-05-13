import {faCheck, faPenToSquare, faTrashAlt, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Todo} from "../../types/todo.ts";

interface TodoItemProps {
    todo: Todo;
    key: number;
    onDeleted: (id: number) => void;
    onCompleted: (id: number) => void;
    onEdit: (todo: Todo) => void;
}

export const TodoItem = (props: TodoItemProps) => {

    const deleteTodoHandler = () => {
        console.log(props.todo.id);
        props.onDeleted(props.todo.id);

    }
    const editTodoHandler = () => {
        console.log(props.todo.id);
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
            <span>{props.todo.title}</span>
            <div>
                <FontAwesomeIcon
                    style={{
                        marginRight: "0.3em",
                    }}
                    icon={props.todo.completed ? faCheck : faXmark}
                    className="pointer"
                    onClick={completeTodoHandler}
                />

                <FontAwesomeIcon
                    style={{
                        marginRight: "0.3em",
                    }}
                    icon={faPenToSquare}
                    className="pointer"
                    onClick={editTodoHandler}
                />
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="pointer"
                    onClick={deleteTodoHandler}
                />
            </div>
        </li>
    );
}