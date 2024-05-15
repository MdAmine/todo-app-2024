import { useState } from "react";
import { todoItems } from "../../Utils";



export default function AddToDo({ onAdd}) {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
        onAdd(newTodo);
        setNewTodo("");

        console.log(todoItems);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        handleSubmit(e);
        }
    };

    return (
        <form className="add text-center my-4" onSubmit={handleSubmit}>
          <label htmlFor="add" className="add text-light">
            Add a new todo:
          </label>
          <input
            type="text"
            className="form-control m-auto"
            name="add"
            id="add"
            value={newTodo}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          
        </form>
    );
}