import {useNavigate, useParams} from "react-router-dom";
import {Todo} from "../types/todo.ts";
import PriorityBadge from "../components/UI/PriorityBadge.tsx";

const TodoDetail = () => {
    const {id} = useParams();
    const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos') as string) : []
    const todo: Todo = todos.find((todo: Todo) => todo.id === parseInt(id!))
    const navigate=useNavigate();

    return (
        <div>
            <header className="text-center text-light my-4">
                <div>
                    <h1>Todo N° {todo?.id}</h1>
                </div>
            </header>

            <header className="text-center text-light my-4">
                <p>{todo?.title}</p>
                <PriorityBadge priority={todo.priority}/>
                <hr/>
                <button onClick={() => navigate("/todos")}>
                    Back to Todos
                </button>
            </header>


        </div>
    )

}
export default TodoDetail;