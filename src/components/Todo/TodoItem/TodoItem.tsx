import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useNavigate } from 'react-router-dom';
import {
  faCheck,
  faEye,
  faPenToSquare,
  faSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.css";

const TodoItem = (props) => {
  const itemStyle = props.item.completed ?{backgroundColor:'grey'} :{};
  const icon = props.item.completed ? faCheck : faSquare;
  const navigate = useNavigate();
  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li className={`list-group-item d-flex justify-content-between align-items-center`}style={itemStyle}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={`badge bg-${getPriorityClass(props.item.priority)}`}style={{ marginRight: '10px' }}>{props.item.priority} </span>
            <span>{props.item.todo}</span>
          </div>
          <div >
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={icon}
              className="pointer"
              onClick={() => props.onCheck(props.item.id)}
            />

            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faPenToSquare}
              className="pointer"
              onClick={() => props.onUpdate(props.item.id)}
            />
            <FontAwesomeIcon icon={faTrashAlt} className="pointer" onClick={() => props.onDelete(props.item.id)}/>
                        <FontAwesomeIcon icon={faEye} className="pointer" onClick = {() => {
                            props.onView(props.item.id);
                            navigate(`/details/${props.item.id}`);
                        }}/>
                      </div>
                    </li>
                  </ul>
                </>
              );
            }
export const getPriorityClass = (priority: string) => {
  switch (priority) {
    case 'P1':
      return 'danger';
    case 'P2':
      return 'warning';
    case 'P3':
      return 'info';
    case 'P4':
      return 'secondary';
    default:
      return 'dark';
  }
};

export default TodoItem;