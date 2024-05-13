import { useState } from "react";
import { generateId } from "../../Utils";

export function AddTodo({ addTodoToList }) {
    
    const [title, setTitle] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
    };

    const addTodo = () => {
        const todo = {
            id: generateId(),
            title: title,
            completed: false
        };
        addTodoToList(todo);
        setTitle('');
    };

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <form className="add text-center my-4" onSubmit={handleAddTodo}>
            <label htmlFor="add" className="add text-light">
                Add a new todo:
            </label>
            <input
                type="text"
                className="form-control m-auto"
                name="add"
                id="add"
                value={title}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
        </form>
    );
}
