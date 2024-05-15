import { useParams } from "react-router-dom";
import { todoItems } from "../../Utils";

export const TodoDetail = () => {
    const { id } = useParams();
    if (!id) {
        return 0;
    }
    const todo = todoItems.find(t => t.id.toString() === id);


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

            
        </div>
    )
}