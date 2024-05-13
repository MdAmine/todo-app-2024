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
        ? { ...todo, title: prompt("edit todo's title", todo.title) || "" }
        : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <SearchTodo />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDeleteTodo}
          onComplete={onCompleteTodo}
          onEdit={onEditTodo}
        />
      ))}
      <AddTodoForm onAdd={onAddTodo} />
    </>
  );
};

export default TodoList;
