import "bootstrap/dist/css/bootstrap.css";
import "./Todo.css";
import TodoAdd from "./TodoAdd/TodoAdd";
import TodoItem from "./TodoItem/TodoItem";
import Utils from "../../Utils";


function Todo() {

  const TodoItems = Utils();
    return (
    <>
      <div className="container">
        <header className="text-center text-light my-4">
          <h1 className="mb-5">Todo List</h1>
          <input
            type="text"
            className="form-control m-auto"
            name="search"
            placeholder="search todos"
          />
        </header>
        {TodoItems.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
        <TodoAdd/>
      </div>
    </>
  );

}
  export default Todo;
