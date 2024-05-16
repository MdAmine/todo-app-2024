import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
    const { id, todo, completed, priority } = useParams();
    const priorityColors = {
        P1: 'danger',
        P2: 'warning',
        P3: 'primary',
        P4: 'success'
    };
    return (
        <div className="container">
            <div className="row justify-content-center text-white">
                <div className="col text-center">
                    <h1>Details</h1>
                    <p>ID: {id}</p>
                    <p>Todo: {todo}</p>
                    <p>Complete: {completed}</p>
                    <span className={`badge bg-${priorityColors[priority]} me-2`}>{priority}</span>
                    <div className="mt-3">
                        <Link to="/todolist">
                            <button className="btn btn-dark">Retour</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
