import { TodoList } from "../components/Todo/TodoList";
import FloatingButton from "../components/UI/FloatingButton";

export default function Home({todos, setTodosHome, onLogout }) {
  return (
    <>
      <FloatingButton onLogout={onLogout} />
      <TodoList setTodosHome={setTodosHome} todosHome={todos} />
    </>
  );
}
