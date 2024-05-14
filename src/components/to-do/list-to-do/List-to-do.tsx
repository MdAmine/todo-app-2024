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
    const addToDo = (name) => {
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
    return (
        <div className="container">
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                />
            </header>
            {items.map((item) => (
                <ToDoItem key={item.id} item={item} deleteToDo={deleteToDo}  editToDo={editToDo}/>
            ))}
            <AddToDo addTodo={addToDo}/>
        </div>
    )
}

export default ListToDo