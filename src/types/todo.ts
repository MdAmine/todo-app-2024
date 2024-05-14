import { v4 as uuidv4 } from "uuid";
export interface Todo {
    id: string;
    title: string;
    complete: boolean;
    priority: string;
}

export const initTodo: Todo = {
    id: uuidv4(),
    title: "",
    complete: false,
    priority: "P0",
};


export const initTodos: Todo[] = [
    { id: uuidv4(), title: "Buy groceries", complete: false, priority: "P1" },
    { id: uuidv4(), title: "Clean the house", complete: false, priority: "P2" },
    { id: uuidv4(), title: "Go for a run", complete: true, priority: "P3" },
    { id: uuidv4(), title: "Finish coding assignment", complete: false, priority: "P4" },
    { id: uuidv4(), title: "Read a book", complete: true, priority: "P3" },
];
