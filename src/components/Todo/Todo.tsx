
import { useEffect, useState } from "react";
import Add from "./Add/Add";
import Item from "./Item/Item";

function Todo() {
    const [searchTerm, setSearchTerm] = useState('');
    const [priority, setPriority] = useState('');



    const generatedId = () => Math.floor(Math.random() * 100);
    let todoItems = [
        {
            id: generatedId(),
            todo: "Read books 1",
            complete: false,
            priority: "P1",

        },
        {
            id: generatedId(),
            todo: "Read books 2",
            complete: false,
            priority: "P2"

        },
        {
            id: generatedId(),
            todo: "Read books 3",
            complete: false,
            priority: "P3"

        }
    ];

    const [todos, setTodos] = useState(todoItems)
    let filteredItems = todos;

    const addItem = (item) => {


        setTodos((prev) => [...prev, {
            id: generatedId(),
            todo: item,
            complete: false,
            priority: (priority !== '') ? priority : "P1",

        }])
    };

    function initList(list) {
        setTodos(list);
    }


    function addPriority(priority) {
        setPriority(priority);
    }

    function getAll() {
        setPriority('');
    }




    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };


    filteredItems = todos.filter(item =>
        item.todo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (priority != '') {
        filteredItems = todos.filter(item => item.priority === priority).filter(item =>
            item.todo.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }




    return (<>
        <header className="text-center text-light my-4">
            <h1 className="mb-5">Todo List</h1>
            <input
                type="text"
                className="form-control m-auto"
                name="search"
                placeholder="search todos"
                value={searchTerm}
                onChange={handleSearch}
            // onKeyUp={search}
            />
        </header>
        <div className="btn-group container d-flex align-items-center mb-3" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-dark btn-outline-dark text-light" onClick={getAll}>All</button>
            <button type="button" className={`btn btn-outline-danger  ${priority === "P1" ? 'btn-danger text-light' : ''}`} onClick={() => { addPriority("P1") }}>P1</button>
            <button type="button" className={`btn btn-outline-warning ${priority === "P2" ? 'btn-warning text-light' : ''} `} onClick={() => { addPriority("P2") }}>P2</button>
            <button type="button" className={`btn btn-outline-primary ${priority === "P3" ? 'btn-primary text-light' : ''}`} onClick={() => { addPriority("P3") }}>P3</button>
            <button type="button" className={`btn btn-outline-success ${priority === "P4" ? 'btn-success text-light' : ''}`} onClick={() => { addPriority("P4") }}>P4</button>
        </div>

        {filteredItems.map((item) => (
            <Item key={item.id} item={item} list={todos} handleCallbackList={initList} />
        ))}



        <Add handleAddItem={addItem} />
    </>)
}
export default Todo;