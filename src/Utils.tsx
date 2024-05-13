  
   export const generateId = () => Math.floor(Math.random() * 1000000);
    
    let initTodoItems = [
      {
        id: generateId(),
        todo: "Learn React",
        completed: false
      },
      {
        id: generateId(),
        todo: "Learn ..",
        completed: false
      },
      {
        id:generateId(),
        todo:"Learn ..4",
        completed:false
      }
    ];

  export default initTodoItems;