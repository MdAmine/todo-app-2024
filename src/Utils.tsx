export function generateId() {
    return Math.floor(Math.random() * 1000);
}

export const todoItems = [
    {
        id: generateId(),
        title: 'Reading books',
        completed: false
    },
    {
        id: generateId(),
        title: 'Reading books',
        completed: false
    },
    {
        id: generateId(),
        title: 'Reading books',
        completed: false
    },
    {
        id: generateId(),
        title: 'Reading books',
        completed: false
    }
];
