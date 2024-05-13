const generateId = () => {
    return Math.random() * 1000;
};
const todoItems = [
    {id: generateId(), title: "Learn React", completed: false},
    {id: generateId(), title: "Learn TypeScript", completed: true},
    {id: generateId(), title: "Learn Java", completed: true},
    {id: generateId(), title: "Learn Python", completed: false},
];
export default todoItems;
