import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoById } from "../../service/todos.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await getTodoById(id);
      setTodo(todo);
    };

    fetchTodo();
  }, [id]);

  return (
    <div className="container text-light">
      {todo ? (
        <div className="row">
          <div className="col">
            <h2 className="title">{todo.title}</h2>
            <p className="status">
              {todo.complete ? (
                <span>
                  <FontAwesomeIcon icon={faCheck} /> Completed
                </span>
              ) : (
                <span>
                  <FontAwesomeIcon icon={faTimes} /> Not completed
                </span>
              )}
            </p>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col">
            <p>Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoDetails;
