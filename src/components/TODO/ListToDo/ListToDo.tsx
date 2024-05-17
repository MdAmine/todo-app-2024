import { useEffect, useState } from "react";
import ItemToDo from "../ItemToDo/ItemToDo";
import AddToDo from "../AddToDo/AddToDo";
import { initialTodos } from "../../../utils.tsx";
function ListToDo() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterByPriority, setFilterByPriority] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  const [todoItems, setTodoItems] = useState(
    JSON.parse(localStorage.getItem("todos")) || initialTodos
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems]);
  const handleAddTodo = (newTodo) => {
    let priority;

    if (filterByPriority !== null) {
      priority = filterByPriority;
    } else {
      priority = "P1";
    }
    setTodoItems([
      ...todoItems,
      {
        id: Math.floor(Math.random() * 1000),
        todo: newTodo,
        priority: priority.toString(),
        complete: false,
      },
    ]);
  };

  const handlePriorityFilter = (priority) => {
    setFilterByPriority(priority);
    setActiveFilter(priority);
  };
  const handleModifyTodo = (id, modifiedTodo) => {
    setTodoItems(
      todoItems.map((item) =>
        item.id === id ? { ...item, todo: modifiedTodo } : item
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };
  const handleToggleComplete = (id) => {
    setTodoItems(
      todoItems.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  };
  const filteredTodoItems = todoItems.filter((item) =>
    item.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const priorityFilteredItems = filterByPriority
    ? filteredTodoItems.filter((item) => item.priority === filterByPriority)
    : filteredTodoItems;

  return (
    <>
      <div className="container">
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
        <header className="text-center text-light my-4">
          <button
            type="button"
            className="btn btn-dark px-4 mx-1"
            onClick={() => {
              setFilterByPriority(null);
              setActiveFilter(null);
            }}
          >
            All
          </button>
          {[1, 2, 3, 4].map((priority) => (
            <button
              key={priority}
              type="button"
              className={`btn btn-outline-${
                priority === activeFilter
                  ? "light"
                  : priority === 1
                  ? "danger"
                  : priority === 2
                  ? "warning"
                  : priority === 3
                  ? "primary"
                  : "info"
              } px-4 mx-1`}
              onClick={() => handlePriorityFilter(`P${priority}`)}
            >
              P{priority}
            </button>
          ))}
        </header>
        {priorityFilteredItems.map((item) => (
          <ItemToDo
            key={item.id}
            props={item}
            onDelete={handleDeleteTodo}
            onModify={(modifiedTodo) => handleModifyTodo(item.id, modifiedTodo)}
            onToggleComplete={() => handleToggleComplete(item.id)}
          />
        ))}
      </div>
      <AddToDo onAddTodo={handleAddTodo} />
    </>
  );
}

export default ListToDo;
