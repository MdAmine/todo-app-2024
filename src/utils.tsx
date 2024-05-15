export const generateId = () => Math.floor(Math.random() * 1000);

export const initialTodos = [
  {
    id: generateId(),
    priority: "P1",
    todo: "Read Books",
    complete: false,
  },
  {
    id: generateId(),
    priority: "P3",
    todo: "Play Games",
    complete: false,
  },
  {
    id: generateId(),
    priority: "P2",
    todo: "Watch Movies",
    complete: false,
  },
];
