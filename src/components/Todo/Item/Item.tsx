import { faCheck, faInfoCircle, faPenToSquare, faTrashAlt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Item(props) {
    const [status, setStatus] = useState(false);
    const handleDelete = (idToDelete) => {

        const updatedTodos = props.list.filter(item => item.id !== idToDelete);
        props.handleCallbackList(updatedTodos);
    };

    const setSelectedStatus = (status,item) => {
        console.log("list avant : " + JSON.stringify(props.list))
        setStatus(status);
        const updatedItems = props.list.map(todo => {
            if (todo.id === item.id) {
                return { ...todo, complete: status };
            }
            return todo;
        });
        props.handleCallbackList(updatedItems);
        console.log("list apres : " + JSON.stringify(updatedItems))
    };


    const handleEdit = (item) => {
        const newValue = window.prompt("Edit todo item:", item.todo);
        if (newValue !== null) {
            const updatedItems = props.list.map(todo => {
                if (todo.id === item.id) {
                    return { ...todo, todo: newValue };
                }
                return todo;
            });
            props.handleCallbackList(updatedItems);
        }
    };
    

    return (<>
        <ul className="list-group todos mx-auto text-light">
            <li
                className={`list-group-item d-flex justify-content-between align-items-center ${
                    !status ? '' : 'selected'
                  }`}
            >
                  {props.item.priority == "P1" ? (            
                    <span className="badge bg-danger">P1</span>                         
                        ) : (
                            props.item.priority == "P2" ? (                                  
                                <span className="badge bg-warning text-dark">P2</span>                         
                                    ) : (
                                        props.item.priority == "P3" ? (
                                            <span className="badge bg-primary">P3</span>
                                         ):(
                                            props.item.priority == "P4" ? (
                                                <span className="badge bg-success">P4</span>
                                             ):(
                                                <span className="badge bg-danger">P1</span> 
                                               )
                                            )
                                        )
                      
                            )}     
                <span>{props.item.todo}</span>
                <div>
                    
                    {!status ? (
                            <FontAwesomeIcon
                                style={{
                                    marginRight: "0.3em",
                                }}
                                icon={faCheck}
                                className="pointer"
                                onClick={() => setSelectedStatus(true,props.item)}
                        />
                        ) : (
                            <FontAwesomeIcon
                                style={{
                                    marginRight: "0.3em",
                                }}
                                icon={faXmark}
                                className="pointer"
                                onClick={() => setSelectedStatus(false,props.item)}
                           />
                        )}
                    <Link to={`/details/${props.item.id}/${props.item.todo}/${props.item.complete}/${props.item.priority}`} className="text-light">
                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={faInfoCircle}
                        className="pointer"
                    />
                    </Link>
                    <FontAwesomeIcon
                        style={{
                            marginRight: "0.3em",
                        }}
                        icon={faPenToSquare}
                        className="pointer"
                        onClick={() => handleEdit(props.item)}
                    />
                    <FontAwesomeIcon icon={faTrashAlt} className="pointer" onClick={() => handleDelete(props.item.id)} />
                </div>
            </li>
        </ul>
    </>)
}

export default Item;