import AddTodo from "./addTodo.tsx";
import ItemTodo from "./itemTodo.tsx";
import {useState} from "react";
import {generateId, Todos, updateTodos} from "../../utils.ts";



const ListTodo = () => {

    const [priority, setPriority] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const [todos, setTodos] = useState(Todos);

    const addTodo = (title) => {
        const newTodo = {
            id: generateId(),
            title,
            completed: false,
            priority: priority || 'P1',
        };
        const updatedTodos = [...todos, newTodo];
        updateTodos(updatedTodos)
        setTodos(updatedTodos);
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        updateTodos(updatedTodos);
        setTodos(updatedTodos);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredTodos = todos.filter(todo =>{
        if (priority) {
            return todo.priority.includes(priority) && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
        }
            return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const editTodo = (id, title) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        });
        updateTodos(updatedTodos);
        setTodos(updatedTodos);
    };

    const checkTodo = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const handleSetPriority = (priority) => {
        setPriority(priority);
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
                <div className="btn-group mt-4" role="group" aria-label="Basic example">
                    <button type="button" className={`btn btn-outline-dark ${priority === '' ? 'active' : ''}`}
                            onClick={() => handleSetPriority('')}>All
                    </button>
                    <button type="button" className={`btn btn-outline-danger ${priority === 'P1' ? 'active' : ''}`}
                            onClick={() => handleSetPriority('P1')}>P1
                    </button>
                    <button type="button" className={`btn btn-outline-warning ${priority === 'P2' ? 'active' : ''}`}
                            onClick={() => handleSetPriority('P2')}>P2
                    </button>
                    <button type="button" className={`btn btn-outline-primary ${priority === 'P3' ? 'active' : ''}`}
                            onClick={() => handleSetPriority('P3')}>P3
                    </button>
                    <button type="button" className={`btn btn-outline-success ${priority === 'P4' ? 'active' : ''}`}
                            onClick={() => handleSetPriority('P4')}>P4
                    </button>
                </div>
            </header>

            {filteredTodos.map((todo) => (
                <ItemTodo key={todo.id} todo={todo} onChecked={checkTodo} onEdit={editTodo} onDelete={deleteTodo}/>
            ))}

            <AddTodo todos={todos} onAdd={addTodo}/>

        </>
    )
}

export default ListTodo;