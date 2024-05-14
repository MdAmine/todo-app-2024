// AddTodo.tsx
import React, { useState } from "react";

interface AddTodoProps {
    onAddTodo: (newTodo: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
    const [todoInput, setTodoInput] = useState("");

    const handleAddTodo = () => {
        if (todoInput.trim() !== "") {
            onAddTodo(todoInput);
            setTodoInput("");
        }
    };

    return (
        <form className="add text-center my-4">
            <label htmlFor="add" className="add text-light">
                Add a new todo:
            </label>
            <input
                type="text"
                className="form-control m-auto"
                name="add"
                id="add"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
            />
            <button className="btn btn-primary" type="button" onClick={handleAddTodo}>
                Add
            </button>
        </form>
    );
};

export default AddTodo;
