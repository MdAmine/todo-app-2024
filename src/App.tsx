import "bootstrap/dist/css/bootstrap.css";
import FloatingButton from "./components/UI/FloatingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <header className="text-center text-light my-4">
          <h1 className="mb-5">Todo List</h1>
          <input
            type="text"
            className="form-control m-auto"
            name="search"
            placeholder="search todos"
          />
        </header>

        <ul className="list-group todos mx-auto text-light">
          <li
            className={`list-group-item d-flex justify-content-between align-items-center`}
          >
            <span>Read Books</span>
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
              <FontAwesomeIcon icon={faTrashAlt} className="pointer" />
            </div>
          </li>
        </ul>

        <ul className="list-group todos mx-auto text-light">
          <li
            className={`list-group-item d-flex justify-content-between align-items-center`}
          >
            <span>Sport</span>
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
              <FontAwesomeIcon icon={faTrashAlt} className="pointer" />
            </div>
          </li>
        </ul>

        <form className="add text-center my-4">
          <label htmlFor="add" className="add text-light">
            Add a new todo:
          </label>
          <input
            type="text"
            className="form-control m-auto"
            name="add"
            id="add"
          />
        </form>

        <form className="text-center my-4 text-light">
          <h1 className="mb-4">Login Form</h1>
          <input
            type="text"
            className={`form-control mb-2`}
            id="email"
            placeholder="Email"
          />
          <input
            type="text"
            className={`form-control mb-3`}
            id="password"
            placeholder="Enter your Password"
          />
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </form>

        <FloatingButton />
      </div>
    </>
  );
}

export default App;
