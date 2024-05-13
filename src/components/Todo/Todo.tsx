
import Add from "./Add/Add";
import Item from "./Item/Item";

function Todo() {
    
    const generatedId = () => Math.floor(Math.random() * 100);

    const addItem = (item) => {
        todoItems.push({
            id: generatedId(),
            todo: item,
            complete: false,
        })
    };
    let todoItems = [
        {
            id: generatedId(),
            todo: "Read books 1",
            complete: false,

        },
        {
            id: generatedId(),
            todo: "Read books 2",
            complete: false,

        },
        {
            id: generatedId(),
            todo: "Read books 3",
            complete: false,

        }
    ];


    return (<>
        <header className="text-center text-light my-4">
            <h1 className="mb-5">Todo List</h1>
            <input
                type="text"
                className="form-control m-auto"
                name="search"
                placeholder="search todos"
            />
        </header>

        {todoItems.map((item) => (
            <Item key={item.id} item={item} />
        ))}

        

        <Add handleAddItem={addItem}/>
    </>)
}
export default Todo;