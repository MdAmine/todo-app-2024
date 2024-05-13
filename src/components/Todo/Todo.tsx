import { useEffect, useState } from "react";
import TodoDone from "./TodoDone";
import axios from "axios";

function Todo() {
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    getTasksAll();
  }, []);

  const getTasksAll = () => {
    axios
      .get<TodoItem[]>("http://localhost:3000/todos")
      .then((res) => {
        const nonDeletedTasks = res.data.filter((task) => !task.isDeleted);
        setTodo(nonDeletedTasks);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };
  function generateID() {
    const randomNum = Math.floor(Math.random() * 900000) + 100000;
    return randomNum;
  }

  const handleAddTodo = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const taskTitle = newTaskTitle.trim();
      if (taskTitle === "") return;

      const newTask: TodoItem = {
        id: generateID(),
        title: taskTitle,
        isDone: false,
        isDeleted: false,
      };

      try {
        await axios.post("http://localhost:3000/todos", newTask);
        setTodo([...todo, newTask]);
        setNewTaskTitle("");
      } catch (error) {
        console.error("Error adding tasks:", error);
      }
    }
  };

  const handleDeleteTask = (taskId: number) => {
    axios
      .delete(`http://localhost:3000/todos/${taskId}`)
      .then((res) => {
        setTodo((prevTodo) => prevTodo.filter((task) => task.id !== taskId));
      })
      .catch((error) => {
        console.error("task no supprimer", error);
      });
  };
  return (
    <div>
      <div className="container">
        <header className="text-center text-light my-4">
          <h1 className="mb-5">Todo List</h1>
          <input
            type="text"
            className="form-control m-auto"
            name="search"
            placeholder="Search todos"
          />
        </header>

        <TodoDone todo={todo} handleDeleteTask={handleDeleteTask} />

        <div className="add text-center my-4">
          <label htmlFor="add" className="text-light">
            Add a new todo:
          </label>
          <input
            type="text"
            className="form-control m-auto"
            name="add"
            id="add"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyPress={handleAddTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
