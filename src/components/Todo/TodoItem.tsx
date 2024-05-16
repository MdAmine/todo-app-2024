import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCheck,
  faCheckSquare,
  faEye,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const getPriorityButtonClass = (priority: string): string => {
  switch (priority) {
    case "P1":
      return "btn-danger";
    case "P2":
      return "btn-warning";
    case "P3":
      return "btn-primary";
    case "P4":
      return "btn-success";
    default:
      return "btn-secondary";
  }
};
interface TodoDoneProps {
  todo: TodoItem[];
  handleDeleteTask: (taskId: number) => void;
  handleUpdateTaskTitle: (taskId: number, newTitle: string) => void;
  handleCheck: (taskId: number) => void;
}

const TodoItem: React.FC<TodoDoneProps> = ({
  todo,
  handleDeleteTask,
  handleUpdateTaskTitle,
  handleCheck,
}) => {
  const promptForNewTitle = (taskId: number, currentTitle: string) => {
    const newTitle = window.prompt("Enter new title", currentTitle);
    if (newTitle !== null) {
      handleUpdateTaskTitle(taskId, newTitle);
    }
  };
  return (
    <>
      {todo && (
        <div className={`mx-auto text-light`}>
          {todo.map((task) => (
            <div key={task.id}>
              <ul className="list-group todos mx-auto text-light">
                <li
                  className={`list-group-item d-flex justify-content-between align-items-center`}
                >
                  <button
                    type="button"
                    className={`btn ${getPriorityButtonClass(task.priority)}`}
                    disabled
                    style={{ fontSize: "12px", padding: "4px 8px" }}
                  >
                    {task.priority}
                  </button>
                  <div className="data">
                    <div className="today">
                      <Link
                        to={`/detail/${task.id}`}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        <span>{task.title}</span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      style={{ marginRight: "0.3em" }}
                      icon={task.isCompleted ? faCalendarCheck : faCheck}
                      className="pointer"
                      onClick={() => handleCheck(task.id)}
                    />

                    <FontAwesomeIcon
                      style={{
                        marginRight: "0.3em",
                      }}
                      icon={faPenToSquare}
                      className="pointer"
                      onClick={() => promptForNewTitle(task.id, task.title)}
                    />
                    <Link
                      to={`/detail/${task.id}`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <FontAwesomeIcon
                        style={{
                          marginRight: "0.3em",
                        }}
                        icon={faEye}
                        className="pointer"
                      />
                    </Link>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="pointer"
                      onClick={() => handleDeleteTask(task.id)}
                    />
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TodoItem;
