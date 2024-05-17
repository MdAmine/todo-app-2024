import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Details() {
    const [item, setItem] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("todoItems")) || [];
        console.log(storedItems)
        const selectedItem = storedItems.find(item => item.id === parseInt(id));
        setItem(selectedItem);
        console.log(selectedItem);
    }, [id]);

    if (!item) {
        return <div>Loading...</div>;
    }

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div style={{
            margin: '20px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9'
        }}>
            <h2 style={{marginBottom: '10px'}}>ToDo Details</h2>
            <div style={{marginBottom: '10px'}}>
                <strong>Name:</strong> {item.name}
            </div>
            <div style={{marginBottom: '10px'}}>
                <strong>Priority:</strong> {item.priority}
            </div>
            <div style={{marginBottom: '10px'}}>
                <strong>Completed:</strong> {item.completed ? 'Yes' : 'No'}
            </div>
            <button onClick={handleGoBack}>Back</button>
        </div>
    );

}

export default Details;
