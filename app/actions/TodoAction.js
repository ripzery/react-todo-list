let nextTodoId = 0;
export const addTodo = (title) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        title,
        checked: false
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};