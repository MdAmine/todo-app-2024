import { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoItem from "./ToDoItem";

function ToDo() {
    const [elements, setElements] = useState([
        {
            id: 1,
            todo: "Read Books",
            complete: false,
            priority:'P1'
        },
        {
            id: 2,
            todo: "Practice sport",
            complete: false,
            priority:'P1'
        },
        {
            id: 3,
            todo: "Clean house",
            complete: false,
            priority:'P3'
        }
    ]);
    const [searchQuery, setSearchQuery] = useState('');
    const [priority,setPriority]=useState('All');
    const generateId = () => Math.floor(Math.random() * 100) + 0;

    function addItem(value) {
        const newItem = {
            id: generateId(),
            todo: value,
            complete: false,
            priority:priority
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

    var filteredElements = elements.filter(item =>
        item.todo.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (priority !== 'All') {
        filteredElements = filteredElements.filter(item => item.priority === priority);
    }
     localStorage.setItem('tasks',JSON.stringify(elements));
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
            <div className="text-center">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button"className={`btn btn-outline-dark btn-lg ${(priority==='All')?'active':''}`} onClick={()=>setPriority('All')}>All</button>
                <button type="button" className={`btn btn-outline-danger btn-lg ${(priority==='P1')?'active':''}`} onClick={()=>setPriority('P1')}>P1</button>
                <button type="button" className={`btn btn-outline-warning btn-lg ${(priority==='P2')?'active':''}`} onClick={()=>setPriority('P2')}>P2</button>
                <button type="button" className={`btn btn-outline-primary btn-lg  ${(priority==='P3')?'active':''}`} onClick={()=>setPriority('P3')}>P3</button>
                <button type="button" className={`btn btn-outline-success btn-lg  ${(priority==='P4')?'active':''}`} onClick={()=>setPriority('P4')}>P4</button>
            </div>
            </div>
            <br/>  

            <ul className="list-group todos mx-auto text-light">
                {filteredElements.map(item => (
                    <ToDoItem key={item.id} id={item.id} itemTitle={item.todo} priority={item.priority} handleDelete={deleteItem} handleUpdate={updateItem} />
                ))}
            </ul>
            <AddToDo add={addItem} />
        </>
    );
}

export default ToDo;
