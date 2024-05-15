import React, { useState } from "react";
import "../../App.css";

const TodoAdd = (props) => {
    const {onAdd} = props;
    const {priority} = props;


    const [newTodo, setNewTodo] = useState(""); 
    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (newTodo.trim() !== "") {
            onAdd(newTodo, priority); 
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
