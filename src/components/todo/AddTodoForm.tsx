import React from "react";
import { initTodo, Todo } from "../../types/todo";
import "./AddTodoForm.css";

interface AddTodoFormProps {
  onAdd: (todo: Todo) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [todo, setTodo] = React.useState<Todo>(initTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(todo);
    onAdd(todo);
    setTodo(initTodo);
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
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          className="form-control"
          name="add"
          id="add"
          required
        />
        <button
          type="submit"
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
