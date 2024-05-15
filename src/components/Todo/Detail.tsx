import { useParams } from "react-router-dom";


const Detail=()=>{
    const { id, todo, complete, priority } = useParams();
 
    return (
        <>
        <div>
            <h1>Details Page</h1>
            <p>ID: {id}</p>
            <p>Todo: {todo}</p>
            <p>Complete: {complete}</p>
            <p>Priority: {priority}</p>
        </div>

      
    </>
  );
}

export default Detail;
