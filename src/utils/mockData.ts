import {Todo} from "../types";

export function getTodos(): Todo[] {
  return [
    {
      id: 1,
      name: 'Sport',
      completed: false
    },
    {
      id: 2,
      name: 'Read Books',
      completed: true
    },
  ]
}