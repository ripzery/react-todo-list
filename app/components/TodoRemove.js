import React from 'react'
import FlatButton from 'material-ui/FlatButton';

const styles = {
    remove: {
        textAlign: "right",
        marginRight: 16,
        marginTop: 16
    }
}

class TodoRemove extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div style={styles.remove}>
                <FlatButton disabled={!this.props.removeable} label="Remove" secondary={true} />
            </div>
        );
    }
}

export default TodoRemove