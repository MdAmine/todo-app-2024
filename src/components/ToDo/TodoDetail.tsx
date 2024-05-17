import { useNavigate, useParams } from "react-router-dom";
import { useTodosContext } from "../../context/TodoContext";

export const TodoDetail = () => {
    const { id } = useParams();
    const { todos } = useTodosContext();
    const navigate = useNavigate();

    if (!id) {
        return 0;
    }
    const todo = todos.find(t => t.id.toString() === id);


    return (
        
        <div className = "cl-white">
            <h1>Todo Detail</h1>
            <br />
            <br />
            <div>
                <p>Id : {id}</p>
                <p>Todo : {todo?.title}</p>
                <p>Priority : {todo?.priority}</p>
                <p>Complete : {todo?.complete ? "Yes" : "No"}</p>
            </div>
            <br /><br />
            <button className="btn btn-light" onClick={()=>navigate(-1)}>back</button>
        </div>
    )
}