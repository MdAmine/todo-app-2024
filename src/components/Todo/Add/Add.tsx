import { FormEvent, useEffect, useState } from "react";

function Add(props){

 const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addItemToList = (event:FormEvent) => {
    event.preventDefault()
    props.handleAddItem(newTodo)
    setNewTodo('');
  };
  
  

    return(<>
    <form className="add text-center my-4" onSubmit={addItemToList}>
          <label htmlFor="add" className="add text-light">
            Add a new todo:
          </label>
          <input
            type="text"
            className="form-control m-auto"
            name="add"
            id="add"
            value={newTodo}
            onChange={handleInputChange}
            
          />
          
        </form>
    </>);
}
export default Add;