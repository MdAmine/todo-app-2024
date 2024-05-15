import AddToDo from "../add-to-do/Add-To-Do.tsx";
import ToDoItem from "../To-do-item/To-do-item.tsx";
import {useState} from "react";
import Priority from "../priority-item/Priority-item.tsx";

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


    const completeTask = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? {...item, completed: !item.completed} : item
            )
        );
    };

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedPriority === "All" || item.priority === selectedPriority)
    );

    const handlePriorityClick = (priority) => {
        setSelectedPriority(priority);
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
            <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                <Priority color="gray" text="All" onClick={() => handlePriorityClick("All")}/>
                <Priority color="orange" text="P1" onClick={() => handlePriorityClick("P1")}/>
                <Priority color="yellow" text="P2" onClick={() => handlePriorityClick("P2")}/>
                <Priority color="green" text="P3" onClick={() => handlePriorityClick("P3")}/>
                <Priority color="blue" text="P4" onClick={() => handlePriorityClick("P4")}/>
            </div>
            {filteredItems.map((item) => (
                <ToDoItem key={item.id} item={item} deleteToDo={deleteToDo} editToDo={editToDo}
                          completeTask={completeTask}/>
            ))}
            <AddToDo addTodo={addToDo}/>
        </div>
    )
}

export default ListToDo