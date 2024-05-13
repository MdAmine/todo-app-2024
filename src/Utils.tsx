function Utils() {    
    const generateId = () => Math.floor(Math.random() * 1000000);
    
    let TodoItems = [
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
  
    return TodoItems;  
  }
  
  export default Utils;