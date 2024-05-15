import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Details = () => {
    const { id,todo, complete,priority} = useParams();
  
    return (


<div className="container d-flex justify-content-center align-items-center">
<div className="card" >
    <div className="card-body text-center">
        <h2 className="card-title">Page Details</h2>
        <h4>ID : { id }</h4>
        <h4>TODO : { todo }</h4>
        <h4>Complete : { complete }</h4>
        <h4>Priority : { priority }</h4>
    </div>
    <div className="card-footer d-flex justify-content-center align-items-center">
      <button className="btn btn-outline-info "><Link to={`/`} className="text-dark"> Back </Link></button>
    </div>
</div>

</div>
      
    );
  };

 export default Details; 