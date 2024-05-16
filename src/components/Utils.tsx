export const generateId = () => {
    return (Math.random() * 100).toPrecision(2);
};
const initialTodoItems = [
    {id: generateId(), title: "Learn React", completed: false, status: "p1"},
    {id: generateId(), title: "Learn TypeScript", completed: true, status: "p4"},
    {id: generateId(), title: "Learn Java", completed: true, status: "p3"},
    {id: generateId(), title: "Learn Python", completed: false, status: "p2"},
];
export default initialTodoItems;
