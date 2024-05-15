import {Priority, Todo} from "../types";

export function getTodos(): Todo[] {
  return [
    {
      id: 1,
      name: 'Sport',
      completed: false,
      priority: Priority.P1
    },
    {
      id: 2,
      name: 'Read Books',
      completed: true,
      priority: Priority.ALL
    },
  ]
}