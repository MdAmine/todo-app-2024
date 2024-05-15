import { useParams } from "react-router-dom";


const Details = () => {
    const { id } = useParams();
  
    return (
      <div>
        <h1>Page Details</h1>
        <h3>ID : {id}</h3>
      </div>
    );
  };

 export default Details; 