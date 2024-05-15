import {useNavigate, useParams} from "react-router-dom";
import {Todos} from "../../utils.ts";


const TodoDetails = () => {
    const { id } = useParams();
    const todo = Todos.find(todo => todo.id === parseInt(id));
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1)
    }

    return (
        <>
            <div className="about d-flex align-items-center justify-content-center">
                <div className="row">
                    <div>
                        <h2 className="text-center">Todo Detail</h2>
                        <br/>
                        <p>{todo.title}</p>
                        <p>ID: {todo.id}</p>
                        <p>Priority: {todo.priority}</p>
                        <p>Status: {todo.completed ? 'Completed' : 'Incomplete'}</p>

                        <br/>
                        <button className="btn btn-dark" onClick={handleBack}>back</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoDetails;