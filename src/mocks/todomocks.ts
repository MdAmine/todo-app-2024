import {Todo} from "../types/todo.ts";
import {Priority} from "../types/priority.ts";

export const todomocks: Todo[] = [
    {
        id: 1,
        title: "Read Books",
        completed: false,
        priority: Priority.P1
    },
    {
        id: 2,
        title: "Sport",
        completed: false,
        priority: Priority.P2
    },
];