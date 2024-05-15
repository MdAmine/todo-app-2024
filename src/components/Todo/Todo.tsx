import React, { useEffect, useState } from "react";
import TodoDone from "./TodoItem";
import axios from "axios";
import Priority from "./Priority/Priority";

function Todo() {
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

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
        isDeleted: false,
        isCompleted: false,
        priority: filterType === "all" ? "P1" : filterType,
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
        console.log(res);
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  const handleCheck = async (taskId: number) => {
    const updatedTodo = todo.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );

    try {
      await axios.put(`http://localhost:3000/todos/${taskId}`, {
        ...todo.find((task) => task.id === taskId),
        isCompleted: !todo.find((task) => task.id === taskId)?.isCompleted,
      });

      setTodo(updatedTodo);
    } catch (error) {
      console.error("Error updating task completion:", error);
    }
  };

  const handleUpdateTaskTitle = async (taskId: number, newTitle: string) => {
    const updatedTodo = todo.map((task) =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );

    try {
      await axios.put(`http://localhost:3000/todos/${taskId}`, {
        ...todo.find((task) => task.id === taskId),
        title: newTitle,
      });

      setTodo(updatedTodo);
    } catch (error) {
      console.error("Error updating task title:", error);
    }
  };

  const filteredTodo = todo.filter((task) => {
    if (filterType === "all") {
      return task.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return (
        task.priority === filterType &&
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </header>
        <Priority setFilterType={setFilterType} />
        <TodoDone
          todo={filteredTodo}
          handleDeleteTask={handleDeleteTask}
          handleUpdateTaskTitle={handleUpdateTaskTitle}
          handleCheck={handleCheck}
        />

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
