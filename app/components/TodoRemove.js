import React from 'react'
import FlatButton from 'material-ui/FlatButton';

const styles = {
    remove: {
        textAlign: "right",
        marginRight: 16,
        marginTop: 16
    }
};

const shouldEnabledRemove = (todos) => {
    return todos.length === 0
};

const TodoRemove = ({checkedTodos, removeTodos}) => {
    return (
        <div style={styles.remove}>
            <FlatButton disabled={shouldEnabledRemove(checkedTodos)} label="Remove" onClick={removeTodos()} secondary={true}/>
        </div>
    );
};

export default TodoRemove