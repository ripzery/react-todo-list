import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const styles = {
    textCenter: {
        textAlign: "center",
        float: "center"
    }
}

class TodoInput extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: "",
            totalItems: 0
        };
        this.update = this.update.bind(this);
        this.addItem = this.addItem.bind(this);
        this.pressEnter = this.pressEnter.bind(this)
    }

    update(e) {
        this.setState({
            todoText: e.target.value
        });
    }

    addItem() {
        this.props.update();
        this.setState({
            todoText: ""
        }, function () {

        });

    }

    pressEnter(e) {
        if (e.keyCode == 13) {
            this.addItem();
            return true
        }
        return false
    }

    render() {
        return (
            <div style={styles.textCenter}>
                <TextField hintText={this.props.hintText}
                           value={this.state.todoText}
                           onKeyDown={this.pressEnter}
                           ref="text"
                           onChange={this.update}
                           maxLength={this.props.max}/>
                <FlatButton label={"add"} primary={true} disabled={this.state.todoText.length==0}
                            onClick={this.addItem}/>
            </div>
        );
    }
}

TodoInput.defaultProps = {
    hintText: "ค่อยๆกรอกลงไปนะ..."
};

export default TodoInput;