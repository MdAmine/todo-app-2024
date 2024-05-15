import { TodoList } from "../components/Todo/TodoList";
import FloatingButton from "../components/UI/FloatingButton";

export default function Home({ onLogout }) {
  return (
    <>
      <FloatingButton onLogout={onLogout} />
      <TodoList />
    </>
  );
}
