import {useEffect, useState} from "react";
import FloatingButton from "../UI/FloatingButton.tsx";
import AddTodo from "./AddTodo.tsx";
import TodoItem from "./TodoItem.tsx";


interface TodoListProps {
    onLogout: () => void;
}

const TodoList: React.FC<TodoListProps> = ({ onLogout }) => {

    const [todos, setTodos] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (newTodo: string) => {
        if (newTodo.trim() !== "") {
            const updatedTodos = [...todos, newTodo];
            setTodos(updatedTodos);
        }
    };

    const handleUpdateTodo = (index: number, updatedTitle: string) => {
        const updatedTodos = todos.map((todo, i) => (i === index ? updatedTitle : todo));
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = (index: number) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const filteredTodos = todos.filter(todo => todo.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="container">
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                    style={{backgroundColor: "white", color: "black"}}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={onLogout}>Logout</button>
            </header>
            <div>
                <div>
                {filteredTodos.map((todo, index) => (
                        <TodoItem
                            key={index}
                            title={todo}
                            onDelete={() => handleDeleteTodo(index)}
                            onUpdate={(updatedTitle) => handleUpdateTodo(index, updatedTitle)}
                        />
                    ))}
                </div>
            </div>

            <AddTodo onAddTodo={handleAddTodo}/>

            <FloatingButton/>
        </div>
    );
};

export default TodoList;
