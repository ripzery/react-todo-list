import React from 'react'
import TodoRemove from '../components/TodoRemove'
import {connect} from 'react-redux'
import {removeTodo} from '../actions/TodoAction'

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveClick: (ids) => {
            dispatch(removeTodo(ids))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

export default connect(null, mapDispatchToProps)(TodoRemove)