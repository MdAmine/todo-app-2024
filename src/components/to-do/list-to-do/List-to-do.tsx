import AddToDo from "../add-to-do/Add-To-Do.tsx";
import ToDoItem from "../To-do-item/To-do-item.tsx";
import {useState} from "react";

function ListToDo() {
    const genereteId = () => Math.floor(Math.random() * 1000000);
    const [items, setItems] = useState([
        {
            id: genereteId(),
            name: "Read books",
            completed: false
        },
        {
            id: genereteId(),
            name: "Play tennis",
            completed: false
        },
        {
            id: genereteId(),
            name: "Backend task",
            completed: false
        },
    ]);
    const [searchQuery, setSearchQuery] = useState("");

    const addToDo = (name) => {
        const duplicate = items.some(item => item.name.toLowerCase() === name.toLowerCase());
        if (duplicate) {
            alert("This task already exists.");
            return;
        }
        const newItem = {
            id: genereteId(),
            name: name,
            completed: false
        };
        setItems([...items, newItem]);
    }

    const deleteToDo = (id) => {
        setItems(items.filter(item => item.id !== id));
    };
    const editToDo = (id) => {
        const newName = prompt("Enter the new name:");
        if (newName) {
            setItems(items.map(item => item.id === id ? {...item, name: newName} : item));
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const completeTask = (id) => {
        setItems(items.map(item => item.id === id ? {...item, completed: !item.completed} : item));
    };
    return (
        <div className="container">
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </header>
            {filteredItems.map((item) => (
                <ToDoItem key={item.id} item={item} deleteToDo={deleteToDo} editToDo={editToDo}
                          completeTask={completeTask}/>
            ))}
            <AddToDo addTodo={addToDo}/>
        </div>
    )
}

export default ListToDo