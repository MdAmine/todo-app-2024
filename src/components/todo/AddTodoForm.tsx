import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodoForm = ({ onAdd }) => {
  const [todo, setTodo] = useState({
    id: uuidv4(),
    title: "",
    complete: false,
    priority: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(todo);
    setTodo({
      id: uuidv4(),
      title: "",
      complete: false,
      priority: "",
    });
  };

  const handleTitleChange = (e) => {
    setTodo((prevTodo) => ({
      ...prevTodo,
      title: e.target.value,
    }));
  };

  return (
    <form className="add text-center my-2" onSubmit={handleSubmit}>
      <label htmlFor="add" className="add text-light">
        Add a new todo:
      </label>
      <div className="d-flex align-items-center justify-content-center gap-2">
        <input
          type="text"
          value={todo.title}
          onChange={handleTitleChange}
          className="form-control"
          name="add"
          id="add"
          placeholder="add new todo"
          required
        />
        <button
          type="submit"
          data-testid="add-todo-button"
          className="btn btn-outline-primary ml-2"
          style={{ whiteSpace: "nowrap" }}
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
