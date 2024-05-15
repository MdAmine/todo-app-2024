export const generatedId=()=>Math.floor(Math.random()*1000);
let todoItems=[
    {
        id:generatedId(),
        todo:"Read Books",
        complete:false,
        priority: "all",
    },
    {
        id:generatedId(),
        todo:"Journaling",
        complete:true,
        priority: "all",
    },
    {
        id:generatedId(),
        todo:"write task",
        complete:false,
        priority: "all",
    }
]

export default todoItems;