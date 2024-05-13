import TodoAdd from "./TodoAdd.tsx";
import "./todo.css";
import TodoItem from "./TodoItem.tsx";
import todoItems from "../Utils.tsx";

const Todo = () => {
    const todoItemsMap = todoItems.map((item) => {
        return (
            <TodoItem key={item.id} title={item.title}/>
        );
    })
    return (
        <>
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                />
            </header>
            {todoItemsMap}
            <TodoAdd/>

        </>
    );
};

export default Todo;
