import {useState} from "react";

function AddToDo({addTodo}) {
    const [newToDo, setNewToDo] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (!newToDo.trim()) return;
        addTodo(newToDo);
        setNewToDo('');
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit(e);
        }
    };
    return (
        <form className="add text-center my-4" onSubmit={onSubmit}>
            <label htmlFor="add" className="add text-light">
                Add a new todo:
            </label>
            <input
                type="text"
                className="form-control m-auto"
                name="add"
                id="add"
                value={newToDo}
                onChange={(e) => setNewToDo(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </form>
    )
}

export default AddToDo