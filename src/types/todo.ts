import { v4 as uuidv4 } from "uuid";
export interface Todo {
    id: string;
    title: string;
    complete: boolean;
}

export const initTodo: Todo = {
    id: uuidv4(),
    title: "",
    complete: false,
};


export const initTodos: Todo[] = [
    { id: uuidv4(), title: "Buy groceries", complete: false },
    { id: uuidv4(), title: "Clean the house", complete: false },
    { id: uuidv4(), title: "Go for a run", complete: true },
    { id: uuidv4(), title: "Finish coding assignment", complete: false },
    { id: uuidv4(), title: "Read a book", complete: true },
];
