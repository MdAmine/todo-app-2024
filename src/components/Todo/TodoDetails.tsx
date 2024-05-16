import { useNavigate, useLocation } from "react-router";

export default function TodoDetails() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { todo } = state;

    const getPriorityBadge = (priority) => {
        const badgeClasses = {
            P1: "badge bg-danger",
            P2: "badge bg-warning",
            P3: "badge bg-primary",
            P4: "badge bg-success"
        };
        return <span className={badgeClasses[priority] || "badge bg-secondary"}>
            {priority || "No Priority"}
        </span>;
    };

    return (
        <div className="about d-flex align-items-center justify-content-center">
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Todo Detail</h2>
                    <br />
                    <p>ID: {todo.id}</p>
                    <p>Todo Title: {todo.title}</p>
                    <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
                    <p>Priority: {getPriorityBadge(todo.priority)}</p>
                    <button className="btn btn-dark" onClick={() => navigate(-1)}>Back</button>
                    <br />
                </div>
            </div>
        </div>
    );
}
