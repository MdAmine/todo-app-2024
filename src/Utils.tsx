  
   export const generateId = () => Math.floor(Math.random() * 1000000);
    
    let initTodoItems = [
      {
        id: generateId(),
        todo: "Learn React",
        completed: false,
        priority:'P1'
      },
      {
        id: generateId(),
        todo: "Learn ..",
        completed: false,
        priority:'P2'
      },
      {
        id:generateId(),
        todo:"Learn ..4",
        completed:false,
        priority:'P3'
      }
    ];

  export default initTodoItems;