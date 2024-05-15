import {useParams} from "react-router-dom";
import {Todos} from "../../utils.ts";


const TodoDetails = () => {
    const { id } = useParams();
    const todo = Todos.find(todo => todo.id === parseInt(id));

    return (
        <div className="container">
            <h1>{todo.title}</h1>
            <p>ID: {todo.id}</p>
            <p>Priority: {todo.priority}</p>
            <p>Status: {todo.completed ? 'Completed' : 'Incomplete'}</p>
        </div>
    );
}

export default TodoDetails;