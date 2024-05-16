import { useParams } from 'react-router-dom';

const TodoItemDetail = ({todoItems}: {todoItems: any[]}) => {
    const { id } = useParams<{id:string }>();


    const todoItem = todoItems.find(item => item.id === Number(id));
    if (!todoItem) {
        return <div>No item found with id: {id}</div>;
    }

    return (
        <div>
            <h1>Todo Item Detail</h1>
            <p>Item ID: {todoItem.id}</p>
            <p>Item description:{todoItem.todo}</p>
        </div>
    );
}

export default TodoItemDetail;