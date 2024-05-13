export const generatedId=()=>Math.floor(Math.random()*1000);
let todoItems=[
    {
        id:generatedId(),
        todo:"Read Books",
        complete:false,
    },
    {
        id:generatedId(),
        todo:"Journaling",
        complete:true,
    },
    {
        id:generatedId(),
        todo:"write task",
        complete:false,
    }
]

export default todoItems;