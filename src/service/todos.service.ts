const BASE_URL = "http://localhost:3001";

async function getAllTodos(searchTerm = "", filterTerm = "") {
    const response = await fetch(`${BASE_URL}/todos?title_like=${searchTerm}&priority_like=${filterTerm}`);
    if (!response.ok) {
        throw new Error('Failed to fetch todos');
    }
    return response.json();
}


async function getTodoById(id) {
    const response = await fetch(`${BASE_URL}/todos/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch todo by ID');
    }
    return response.json();
}


async function addTodo(todo) {
    const response = await fetch(`${BASE_URL}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    if (!response.ok) {
        throw new Error('Failed to add todo');
    }
    return response.json();
}


async function updateTodo(todo) {
    const response = await fetch(`${BASE_URL}/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    if (!response.ok) {
        throw new Error('Failed to update todo');
    }
    return response.json();
}


async function deleteTodo(id) {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete todo');
    }
    return response.json();
}


export { addTodo, deleteTodo, getAllTodos, getTodoById, updateTodo };

