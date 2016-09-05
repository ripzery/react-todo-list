import {List} from 'material-ui/List';
import {connect} from 'react-redux'
import {toggleTodo} from '../actions/TodoAction'
import TodoItem from '../components/TodoItem'
import React from 'react'

const TodoList = ({todos, onTodoClick}) => {
    return (
        <List>
            {todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            )}
        </List>
    );
};

const getTodos = (todos) => {
    return todos
};

const mapStateToProps = (state) => {
    return {
        todos: getTodos(state.todos)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)