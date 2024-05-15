export function generateId() {
    return Math.floor(Math.random() * 100000);
}

export let Todos = [
    {
        id: generateId(),
        title: "Read Books",
        completed: false,
        priority: "P1",
    },
    {
        id: generateId(),
        title: "Go to the gym",
        completed: false,
        priority: "P2",
    },
    {
        id: generateId(),
        title: "Buy groceries",
        completed: false,
        priority: "P3",
    },
];

export const updateTodos = (newTodos) => {
    Todos = newTodos;
};
