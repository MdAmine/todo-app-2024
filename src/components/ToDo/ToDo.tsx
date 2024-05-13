
import { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoItem from "./ToDoItem";
const generateId=()=>Math.floor(Math.random()* 100) + 0;
const items=[
    {
        id: generateId(),
        todo:"Read Books",
        complete:false
    },
    {
        id: generateId(),
        todo:"Practice sport",
        complete:false
    },
    {
        id: generateId(),
        todo:"Clean house",
        complete:false
    }

]



function ToDo(){
    const [elements,setElements]=useState(items);
    function addItem(value:string){
        setElements([...elements,{
            id:generateId(),
            todo:value,
            complete:false
        }] ) 

    }
return (
    <>
    <header className="text-center text-light my-4">
          <h1 className="mb-5">Todo List</h1>
          <input
            type="text"
            className="form-control m-auto"
            name="search"
            placeholder="search todos"
          />
        </header>
        {
            elements.map((item)=>{
                return(
                    <ToDoItem  key={item.id} itemTitle={item.todo}/>
                )
            }

            )}
            <AddToDo add={addItem}/>

    </>
);
}
export default ToDo;
