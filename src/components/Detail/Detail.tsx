import React from 'react';
import { useParams } from 'react-router-dom';

const Detail= () => {
    const { id, todo, complete, priority } = useParams();
    const isComplete = complete === 'true';
    return (
       <div>
            <h1>Details Todo </h1>
            <p><span>ID: {id}</span></p>
            <p>Todo: {todo}</p>
            <p>Complete: {isComplete ? 'Done' : 'Not Done'}</p>
            <p>Priority: {priority}</p>
        </div> 
    );
}
export default Detail;
