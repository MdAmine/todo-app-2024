import {Priority} from "./priority.ts";

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    priority: Priority;
}