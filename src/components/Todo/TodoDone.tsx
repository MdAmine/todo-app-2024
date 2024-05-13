import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

interface TodoDoneProps {
  todo: TodoItem[];
  handleDeleteTask: (taskId: number) => void;
}

const TodoDone: React.FC<TodoDoneProps> = ({ todo, handleDeleteTask }) => {
  return (
    <>
      {todo && (
        <div>
          {todo.map((task) => (
            <div
              key={task.id}
              className="d-flex justify-content-between align-items-center mx-auto text-light"
            >
              <div className="data">
                <div className="today">
                  <h4>{task.title}</h4>
                </div>
              </div>
              <div>
                <FontAwesomeIcon
                  style={{
                    marginRight: "0.3em",
                  }}
                  icon={faCheck}
                  className="pointer"
                />

                <FontAwesomeIcon
                  style={{
                    marginRight: "0.3em",
                  }}
                  icon={faPenToSquare}
                  className="pointer"
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="pointer"
                  onClick={() => handleDeleteTask(task.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TodoDone;
