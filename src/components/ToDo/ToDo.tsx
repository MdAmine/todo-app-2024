import { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoItem from "./ToDoItem";

function ToDo() {
    const [elements, setElements] = useState([
        {
            id: 1,
            todo: "Read Books",
            complete: false
        },
        {
            id: 2,
            todo: "Practice sport",
            complete: false
        },
        {
            id: 3,
            todo: "Clean house",
            complete: false
        }
    ]);
    const [searchQuery, setSearchQuery] = useState('');

    const generateId = () => Math.floor(Math.random() * 100) + 0;

    function addItem(value) {
        const newItem = {
            id: generateId(),
            todo: value,
            complete: false
        };
        setElements([...elements, newItem]);
    }

    function deleteItem(id) {
        const updatedElements = elements.filter(item => item.id !== id);
        setElements(updatedElements);
    }

    function updateItem(id, newValue) {
        const updatedElements = elements.map(item => {
            if (item.id === id) {
                return { ...item, todo: newValue };
            }
            return item;
        });
        setElements(updatedElements);
    }

    const filteredElements = elements.filter(item =>
        item.todo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="Search todos"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </header>
            <ul className="list-group todos mx-auto text-light">
                {filteredElements.map(item => (
                    <ToDoItem key={item.id} id={item.id} itemTitle={item.todo} handleDelete={deleteItem} handleUpdate={updateItem} />
                ))}
            </ul>
            <AddToDo add={addItem} />
        </>
    );
}

export default ToDo;
