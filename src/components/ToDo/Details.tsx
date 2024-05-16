import { useNavigate, useParams } from 'react-router';
import { getSeverity } from './ToDoItem';
import { useState } from 'react';
export default function Details() {
    const { id } = useParams();
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')).filter((task) => task.id == id));
    const navigation = useNavigate()
    return (
        <>
            <div className="card text-center" style={{ width: '18rem' }} >
                <div className="card-header">
                    Task Details
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{tasks[0].todo}</li>
                    <li className="list-group-item">{tasks[0].complete ? 'completed' : 'not completed yet'}</li>
                    <li className="list-group-item">
                        <span className={`badge bg-${getSeverity(tasks[0].priority)}`}>{tasks[0].priority}</span>
                    </li>
                </ul>
            </div>
            <br />
            <button className="btn btn-dark text-center" onClick={() => navigation(-1)}>Back</button>
        </>
    );
}
