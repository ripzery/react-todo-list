import React from 'react'
import TodoRemove from '../components/TodoRemove'
import {connect} from 'react-redux'
import {removeTodo} from '../actions/TodoAction'

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodos: (ids) => () => {
            dispatch(removeTodo(ids))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        checkedTodos: state.todos.filter(t => t.checked)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoRemove)