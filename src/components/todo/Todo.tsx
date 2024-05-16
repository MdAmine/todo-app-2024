import TodoAdd from "./todo-add/TodoAdd.tsx";
import "./todo.css";
import TodoItem from "./todo-item/TodoItem.tsx";
import {generateId} from "../Utils.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Todo = ({todoItems, setTodoItems}) => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const navigate = useNavigate();
    const onViewDetails = (id) => {
        navigate(`/${id}`);
    };
    const deleteItem = (id) => {
        const newItems = todoItems.filter((item) => item.id !== id);
        setTodoItems(newItems);
    }
    const editItem = (id) => {
        const itemToEdit = todoItems.find((item) => item.id === id);
        if (itemToEdit) {
            const newTitle = prompt("Edit item", itemToEdit.title);
            if (newTitle) {
                setTodoItems(prevItems =>
                    prevItems.map(item =>
                        item.id === id ? {...item, title: newTitle} : item
                    )
                );
            }
        }
    }
    const filteredTodoItems = todoItems.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (statusFilter === "" || item.status === statusFilter)
    );
    const todoItemsMap = filteredTodoItems.map((item) => {
        return (
            <TodoItem key={item.id} item={item} onDeleteItem={deleteItem} editItem={editItem}
                      onViewDetails={onViewDetails}/>
        );
    });

    const handleSeach = (e) => {
        setSearch(e.target.value);
    }
    const addTodoItem = (title) => {
        setTodoItems(prevItems => [
            ...prevItems,
            {id: generateId(), title: title, completed: false, status: statusFilter}
        ]);
    };

    return (
        <>
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto text-bg-light"
                    name="search"
                    placeholder="search todos"
                    value={search}
                    onChange={handleSeach}
                />
            </header>
            <div className="btn-group d-flex justify-content-center mb-5" role="group"
                 aria-label="Basic mixed styles example">
                <button type="button"
                        className={`btn btn-outline-dark btn-sm ${statusFilter === '' ? 'active' : ''}`}
                        onClick={() => setStatusFilter("")}>All
                </button>
                <button type="button"
                        className={`btn btn-outline-danger btn-sm ${statusFilter === 'p1' ? 'active' : ''}`}
                        onClick={() => setStatusFilter("p1")}>P1
                </button>
                <button type="button"
                        className={`btn btn-outline-warning btn-sm ${statusFilter === 'p2' ? 'active' : ''}`}
                        onClick={() => setStatusFilter("p2")}>P2
                </button>
                <button type="button"
                        className={`btn btn-outline-info btn-sm ${statusFilter === 'p3' ? 'active' : ''}`}
                        onClick={() => setStatusFilter("p3")}>P3
                </button>
                <button type="button"
                        className={`btn btn-outline-success btn-sm ${statusFilter === 'p4' ? 'active' : ''}`}
                        onClick={() => setStatusFilter("p4")}>P4
                </button>
            </div>
            {todoItemsMap}
            <TodoAdd onAdd={addTodoItem}/>

        </>
    );
};

export default Todo;
