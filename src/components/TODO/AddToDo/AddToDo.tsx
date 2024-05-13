import { useState } from "react";
import "./AddToDo.css";

function AddToDo({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="container">
      <form className="add text-center my-4">
        <label htmlFor="add" className="add text-light">
          Add a new todo:
        </label>

        <input
          type="text"
          className="form-control m-auto"
          name="add"
          id="add"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleChange}
        />
      </form>
    </div>
  );
}

export default AddToDo;
