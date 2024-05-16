import { TodoList } from "../components/Todo/TodoList";

const Home = ({ todos, setTodosHome }) => {
  return (
    <TodoList setTodosHome={setTodosHome} todosHome={todos} />
  );
};

export default Home;
