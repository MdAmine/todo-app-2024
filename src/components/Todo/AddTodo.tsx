import { useState } from "react";

interface AddTodoProps {
    onAddTodo: (todo: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
    const [todoInput, setTodoInput] = useState("");

    const handleAddTodo = () => {
            onAddTodo(todoInput);
            setTodoInput("");
    };

    return (
        <form className="add text-center my-4">
            <label htmlFor="Add a new todo:" className="add text-light">
                Add a new todo:
            </label>
            <input
                type="text"
                className="form-control m-auto"
                name="addTodo"
                placeholder="Add a new todo"
                style={{ backgroundColor: "white", color: "black" }}
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
            />
            <br />
            <br />
            <button className="btn btn-primary" type="button" role="button" onClick={handleAddTodo}>
                Add
            </button>
        </form>
    );
};
export default AddTodo;
