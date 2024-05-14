export const generateId = () => Math.floor(Math.random() * 1000000);
export const todoItems = [
    {
        id: generateId(),
        title: "Read books",
        complete : false ,
        priority : "high"
    },
    {
        id: generateId(),
        title: "Read books 2",
        complete : false,
        priority : "low"
    },
];