import "bootstrap/dist/css/bootstrap.css";
import "./TodoAdd.css";
import { useState } from "react";

function TodoAdd(props) {

  const[inputValue,setInputValue]=useState("");

  const handleAdd = (event) =>{
    event.preventDefault();
    props.onAdd(inputValue,props.selectedButton);
    setInputValue("");
  }

  return (
    <>
     <form className="add text-center my-4" onSubmit={handleAdd}>
          <label htmlFor="add" className="add text-light">
            Add a new todo:
          </label>
          <input
            type="text"
            className="form-control m-auto"
            name="add"
            id="add"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
          />
        </form>
    </>
  );
}

export default TodoAdd;