import { useEffect, useState } from "react";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from "../../service/todos.service";
import AddTodoForm from "./AddTodoForm";
import FilterTodo from "./FilterTodo";
import SearchTodo from "./SearchTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    getAllTodos(searchTerm, filterTerm)
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, [searchTerm, filterTerm, todos]);

  const onAddTodo = (todo) => {
    addTodo(todo)
      .then((newTodo) => {
        console.log("New todo added:", newTodo);
      })
      .catch((error) => console.error("Error adding todo:", error));
  };

  const onDeleteTodo = (id) => {
    deleteTodo(id)
      .then(() => {
        console.log("todo has been deleted ");
      })
      .catch((error) => console.error("Error deleting todo:", error));
  };

  const onCompleteTodo = async (id) => {
    try {
      const todoToUpdate = await getTodoById(id);
      const updatedTodo = { ...todoToUpdate, complete: !todoToUpdate.complete };
      await updateTodo(updatedTodo);
    } catch (error) {
      console.error("Error completing todo:", error);
    }
  };

  const onEditTodo = async (id) => {
    try {
      const todo = await getTodoById(id);
      const updatedTitle =
        prompt("Edit todo's title", todo.title) || todo.title;
      const updatedTodo = { ...todo, title: updatedTitle };
      await updateTodo(updatedTodo);
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  const onSearchTodo = (keyword) => {
    setSearchTerm(keyword);
  };

  const onFilterTodo = (priority) => {
    setFilterTerm(priority === "all" ? "" : priority);
  };

  return (
    <>
      <SearchTodo onSearch={onSearchTodo} />
      <FilterTodo onFilter={onFilterTodo} />
      {todos.length > 0 ? (
        todos.map((todo: any) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDeleteTodo}
            onComplete={onCompleteTodo}
            onEdit={onEditTodo}
          />
        ))
      ) : (
        <h5 className="text-center text-light my-4">No todos found</h5>
      )}
      <AddTodoForm onAdd={onAddTodo} />
    </>
  );
};

export default TodoList;
