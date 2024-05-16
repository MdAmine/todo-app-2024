import {useState} from "react";


const AddTodo = ({todos , onAdd }) => {

    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todos.some(todo => todo.title === newTodo.trim())) return alert("Todo already exists");
        if (!newTodo.trim()) return alert("Please enter a todo");
        onAdd(newTodo);
        setNewTodo("");
    }

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    }

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
            />
        </form>
    );
}

export default AddTodo;