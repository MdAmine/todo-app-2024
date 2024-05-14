import { useState } from "react";
import ItemToDo from "../ItemToDo/ItemToDo";
import AddToDo from "../AddToDo/AddToDo";
import { initialTodos } from "../../../utils.tsx";
function ListToDo() {
  const [todoItems, setTodoItems] = useState(initialTodos);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTodo = (newTodo) => {
    setTodoItems([
      ...todoItems,
      { id: Math.floor(Math.random() * 1000), todo: newTodo, complete: false },
    ]);
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

  const filteredTodoItems = todoItems.filter((item) =>
    item.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        {filteredTodoItems.map((item) => (
          <ItemToDo
            key={item.id}
            props={item}
            onDelete={handleDeleteTodo}
            onModify={(modifiedTodo) => handleModifyTodo(item.id, modifiedTodo)}
          />
        ))}
      </div>
      <AddToDo onAddTodo={handleAddTodo} />
    </>
  );
}

export default ListToDo;
