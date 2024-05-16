import "bootstrap/dist/css/bootstrap.css";
import "./Todo.css";
import TodoAdd from "./TodoAdd/TodoAdd";
import TodoItem from "./TodoItem/TodoItem";
import  initTodoItems, { generateId } from "../../Utils";
import { useState } from "react";


function Todo(props) {
const[TodoItems,setTodoItems]= useState(initTodoItems);
const[searchValue,setSearchValue]= useState("");
const [selectedButton, setSelectedButton] = useState<string>('');
const handleAdd=(todo,priority) =>{
  setTodoItems([...TodoItems,{
    id:generateId(),
    todo:todo,
    completed:false,
    priority:priority
  }]);
}
const deleteItem = (id) => {
  setTodoItems(TodoItems.filter(item => item.id !== id));
}
const updateItem = (id) => {
  setTodoItems(TodoItems.map(item => item.id === id ? {...item, todo: prompt("edit to do ",item.todo) || item.todo }: item));
}
const searchResult = TodoItems.filter(item=>
  item.todo.toLowerCase().includes(searchValue.toLowerCase())
);
const checkItem = (id) => {
  setTodoItems(TodoItems.map(item => item.id === id ? {...item, completed: !item.completed} : item));
}
const handleView = (id) => {
}

    return (
    <>
      <div className="container">
        <header className="text-center text-light my-4">
          <h1 className="mb-5">Todo List</h1>
          <input
            type="text"
            className="form-control m-auto"
            name="search"
            placeholder="search todos"
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
          />
        </header>
  <div className="btn-group d-flex justify-content-center" role="group" aria-label="First group">
      <button 
        type="button" 
        className={`btn ${selectedButton === 'All' ? 'btn-dark' : 'btn-outline-dark'}`} 
        onClick={() => setSelectedButton(selectedButton === 'All' ? '' : 'All')}
      >
        All
      </button>
      <button 
        type="button" 
        className={`btn ${selectedButton =='P1' ? 'btn-danger' : 'btn-outline-danger'}`}
        onClick={() => setSelectedButton(selectedButton === 'P1' ? '' : 'P1')}
      >
        P1
      </button>
      <button 
        type="button" 
        className={`btn ${selectedButton =='P2' ? 'btn-warning' : 'btn-outline-warning'}`}
        onClick={() => setSelectedButton(selectedButton === 'P2' ? '' : 'P2')}
      >
        P2
      </button>
      <button 
        type="button" 
        className={`btn ${selectedButton =='P3' ? 'btn-info' : 'btn-outline-info'}`}
        onClick={() => setSelectedButton(selectedButton === 'P3' ? '' : 'P3')}
      >
        P3
      </button>
      <button 
        type="button" 
        className={`btn ${selectedButton =='P4' ? 'btn-success' : 'btn-outline-success'}`}
        onClick={() => setSelectedButton(selectedButton === 'P4' ? '' : 'P4')}
      >
        P4
      </button>
</div>
<br></br>
{searchResult
  .filter(item => 
    (selectedButton === 'All' || item.priority === selectedButton) && 
    (searchValue === '' || item.todo.toLowerCase().includes(searchValue.toLowerCase()))
  )
  .map((item) => (
    <TodoItem key={item.id} item={item} onDelete={deleteItem} onUpdate={updateItem} onCheck={checkItem} onView={handleView}/>
))}
        <TodoAdd onAdd={handleAdd} selectedButton={selectedButton} />
      </div>
    </>
  );

}
  export default Todo;
