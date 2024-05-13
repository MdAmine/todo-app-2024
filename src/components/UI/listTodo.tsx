import AddTodo from "./addTodo.tsx";
import ItemTodo from "./itemTodo.tsx";
import {useState} from "react";


const ListTodo = () => {

    function generateId() {
        return Math.floor(Math.random() * 100000);
    }

    const [todos, setTodos] = useState([
        {
            id: generateId(),
            title: "Read Books",
            completed: false,
        },
        {
            id: generateId(),
            title: "Go to the gym",
            completed: false,
        },
        {
            id: generateId(),
            title: "Buy groceries",
            completed: false,
        },
    ]);

    const addTodo = (title) => {
        const newTodo = {
            id: generateId(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const [searchQuery, setSearchQuery] = useState("");

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const editTodo = (id, title) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const checkTodo = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                alert("Todo completed")
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </header>

            {filteredTodos.map((todo) => (
                <ItemTodo key={todo.id} todo={todo} onChecked={checkTodo} onEdit={editTodo} onDelete={deleteTodo} />
            ))}

            <AddTodo todos={todos} onAdd={addTodo} />

        </>
    )
}

export default ListTodo;