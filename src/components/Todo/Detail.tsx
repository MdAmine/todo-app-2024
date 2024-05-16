import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
    const { id, todo, completed, priority } = useParams();

    return (
        <div className="container">
            <div className="row justify-content-center text-white">
                <div className="col text-center">
                    <h1>Details</h1>
                    <p>ID: {id}</p>
                    <p>Todo: {todo}</p>
                    <p>Complete: {completed}</p>
                    <p>Priority: {priority}</p>
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
