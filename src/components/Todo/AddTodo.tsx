import { useState } from "react";
import { generateId } from "../../Utils";

export function AddTodo({ onAdd, priority }) {
    const [title, setTitle] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodo();
    };

    const addTodo = () => {
        const trimmedTitle = title.trim();
        if (trimmedTitle === '') return;

        const todoPriority = priority === 'All' ? 'P1' : priority;

        const newTodo = {
            id: generateId(),
            title: trimmedTitle,
            completed: false,
            priority: todoPriority
        };

        onAdd(newTodo);
        setTitle('');
    };

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTodo();
        }
    };

    return (
        <form className="add text-center my-4" onSubmit={handleFormSubmit}>
            <label htmlFor="add-todo" className="text-light">
                Add a new todo:
            </label>
            <input
                type="text"
                className="form-control m-auto"
                id="add-todo"
                value={title}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter your todo"
            />
        </form>
    );
}
