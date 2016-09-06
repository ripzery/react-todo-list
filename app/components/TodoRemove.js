import React from 'react'
import FlatButton from 'material-ui/FlatButton';

const styles = {
    remove: {
        textAlign: "right",
        marginRight: 16,
        marginTop: 16
    }
}

const TodoRemove = ({onRemoveClick, todos}) => {
    return (
        <div style={styles.remove}>
            <FlatButton disabled={todos.filter(t => t.checked).length > 0} label="Remove" onClick={onRemoveClick(todos.filter(t => t.checked).map(t => t.id))} secondary={true}/>
        </div>
    );
}

export default TodoRemove