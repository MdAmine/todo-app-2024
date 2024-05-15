import { useCallback, useEffect, useState } from "react";
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

  const fetchTodos = useCallback(async () => {
    try {
      const data = await getAllTodos(searchTerm, filterTerm);
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
      alert("Failed to fetch todos");
    }
  }, [searchTerm, filterTerm]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const onAddTodo = async (todo) => {
    const addedTodo = { ...todo, priority: filterTerm ? filterTerm : "P4" };

    await addTodo(addedTodo)
      .then((newTodo) => {
        fetchTodos();
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        alert("Failed to add todo");
      });
  };

  const onDeleteTodo = async (id) => {
    await deleteTodo(id)
      .then(() => {
        fetchTodos();
      })
      .catch((error) => alert("Failed to delete todo"));
  };

  const onCompleteTodo = async (id) => {
    await getTodoById(id)
      .then((todo) => {
        const updatedTodo = { ...todo, complete: !todo.complete };
        updateTodo(updatedTodo).then(() => fetchTodos());
      })
      .catch((error) => alert("Failed to update todo"));
  };

  const onEditTodo = async (id) => {
    await getTodoById(id)
      .then((todo) => {
        const updatedTitle =
          prompt("Edit todo's title", todo.title) || todo.title;
        const updatedTodo = { ...todo, title: updatedTitle };
        updateTodo(updatedTodo).then(() => fetchTodos());
      })
      .catch((error) => alert("Failed to update todo"));
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
        todos.map((todo) => (
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
