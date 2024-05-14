import React, { useState } from "react";
import "../../App.css";

function TodoAdd({ onAdd }) {

    const [newTodo, setNewTodo] = useState(""); 
    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (newTodo.trim() !== "") {
            onAdd(newTodo);
            setNewTodo("");
        }
    };

    return (
        <div className="container">
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
                    onChange={(e) => setNewTodo(e.target.value)}
                />
            </form>
        </div>
    );
}

export default TodoAdd;
