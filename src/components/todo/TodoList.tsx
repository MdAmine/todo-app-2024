import React from "react";
import { initTodos, Todo } from "../../types/todo";
import AddTodoForm from "./AddTodoForm";
import SearchTodo from "./SearchTodo";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>(initTodos);

  const onAddTodo = (todo: Todo): void => {
    setTodos([...todos, todo]);
  };

  const onDeleteTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onCompleteTodo = (id: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };
  const onEditTodo = (id: string) => {
    const updatedTodos: Todo[] = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            title: prompt("edit todo's title", todo.title) || todo.title,
          }
        : todo
    );
    setTodos(updatedTodos);
  };
  const onSearchTodo = (keyword: string) => {
    const filteredTodos: Todo[] = initTodos.filter((todo) =>
      todo.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setTodos(filteredTodos);
  };

  return (
    <>
      <SearchTodo onSearch={onSearchTodo} />
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
