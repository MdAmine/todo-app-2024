import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import './TodoItem.css'

export function TodoItem({ todo, children, deleteTodoFromList, editTodoFromList }) {

    const handleDelete = () => {
        deleteTodoFromList(todo.id);
    };

    const handleEdit = () => {
        const editTodo = prompt("Edit todo", todo.title);
        if (editTodo) {
            editTodoFromList(todo.id, editTodo);
        }
    };

    return (
        <ul className="list-group todos mx-auto text-light">
            <li
                className={`list-group-item d-flex justify-content-between align-items-center`}
            >
                <span>{children}</span>
                <div>
                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={faCheck}
                        className="pointer"
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
                        onClick={handleDelete} 
                        icon={faTrashAlt} 
                        className="pointer"
                    />
                </div>
            </li>
        </ul>
    );
}
