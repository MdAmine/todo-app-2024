import { useState } from 'react';
import { todoItems as initialTodoItems } from '../Utils';

export const useTodos = () => {
    const [todos, setTodos] = useState(initialTodoItems);

    return {
        todos,
        setTodos,
    };
};
