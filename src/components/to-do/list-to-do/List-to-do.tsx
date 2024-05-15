import AddToDo from "../add-to-do/Add-To-Do.tsx";
import ToDoItem from "../To-do-item/To-do-item.tsx";
import {useEffect, useState} from "react";
import Priority from "../priority-item/Priority-item.tsx";
import {useNavigate} from "react-router-dom";

function ListToDo() {
    const genereteId = () => Math.floor(Math.random() * 1000000);
    const [items, setItems] = useState([
        {
            id: genereteId(),
            name: "Read books",
            completed: false,
            priority: "P1"
        },
        {
            id: genereteId(),
            name: "Play tennis",
            completed: false,
            priority: "P2"

        },
        {
            id: genereteId(),
            name: "Backend task",
            completed: false,
            priority: "P2"
        },
    ]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPriority, setSelectedPriority] = useState("All");
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();
    const addToDo = (name) => {
        const duplicate = items.some(item => item.name.toLowerCase() === name.toLowerCase());
        if (duplicate) {
            alert("This task already exists.");
            return;
        }
        const newItem = {
            id: genereteId(),
            name: name,
            completed: false,
            priority: selectedPriority
        };
        const updatedItems = [...items, newItem];
        setItems(updatedItems);
        localStorage.setItem('todoItems', JSON.stringify(updatedItems));
    };

    const deleteToDo = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem('todoItems', JSON.stringify(updatedItems));
    };

    const editToDo = (id) => {
        const newName = prompt("Enter the new name:");
        if (newName) {
            const updatedItems = items.map(item =>
                item.id === id ? {...item, name: newName} : item
            );
            setItems(updatedItems);
            localStorage.setItem('todoItems', JSON.stringify(updatedItems));
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };


    const completeTask = (id) => {
        const updatedItems = items.map(item =>
            item.id === id ? {...item, completed: !item.completed} : item
        );
        setItems(updatedItems);
        localStorage.setItem('todoItems', JSON.stringify(updatedItems));
    };

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedPriority === "All" || (item.priority === selectedPriority && item.name.toLowerCase().includes(searchQuery.toLowerCase())))
    );

    const handlePriorityClick = (priority) => {
        setSelectedPriority(priority);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        navigate(`/details/${item.id}`);
    };

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('todoItems')) || [];
        setItems(storedItems);
    }, []);

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
            <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                <Priority color="gray" text="All" onClick={() => handlePriorityClick("All")}/>
                <Priority color="red" text="P1" onClick={() => handlePriorityClick("P1")}/>
                <Priority color="yellow" text="P2" onClick={() => handlePriorityClick("P2")}/>
                <Priority color="green" text="P3" onClick={() => handlePriorityClick("P3")}/>
                <Priority color="blue" text="P4" onClick={() => handlePriorityClick("P4")}/>
            </div>
            {filteredItems.map((item) => (
                <ToDoItem key={item.id} item={item} deleteToDo={deleteToDo} editToDo={editToDo}
                          completeTask={completeTask} onItemClick={() => handleItemClick(item)}/>
            ))}
            <AddToDo addTodo={addToDo}/>
        </div>
    )
}

export default ListToDo