import {useParams} from "react-router-dom";

const TodoDetails = ({todoItems}) => {
    const {id} = useParams();
    const todoItem = todoItems.find((item) => item.id === id);
    return (
        <div className="todo-details text-light">
            <h2 className="todo-title">{todoItem.title}</h2>
            <p className="todo-id">ID: {todoItem.id}</p>
            <p className="todo-status">Status: {todoItem.status}</p>
        </div>
    );
};

export default TodoDetails;
