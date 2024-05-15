export function generateId() {
    return Math.floor(Math.random() * 1000);
}

export const todoItems = [
    {
        id: generateId(),
        title: 'Reading books',
        completed: false,
        priority: 'P1'
    },
    {
        id: generateId(),
        title: 'Music',
        completed: false,
        priority: 'P2'
    },
    {
        id: generateId(),
        title: 'Movies',
        completed: true,
        priority: 'P3'
    },
    {
        id: generateId(),
        title: 'League of legends',
        completed: false,
        priority: 'P4'
    }
];