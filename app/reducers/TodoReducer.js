import { combineReducers } from 'redux'

const todo = (state = 0, action) =>{
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                title: action.title,
                checked: action.checked
            }
        case 'TOGGLE_TODO':
            if(state.id !== action.id){
                return state
            }

            return {
                ...state,
                checked: !state.checked
            };
        default:
            return state
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state
    }
};

export default combineReducers({todos})