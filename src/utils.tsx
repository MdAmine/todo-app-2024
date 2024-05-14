export const generateId = () => Math.floor(Math.random() * 1000);

export const initialTodos = [
  {
    id: generateId(),
    todo: "Read Books",
    complete: false,
  },
  {
    id: generateId(),
    todo: "Play Games",
    complete: false,
  },
  {
    id: generateId(),
    todo: "Watch Movies",
    complete: false,
  },
];
