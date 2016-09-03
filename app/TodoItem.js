import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';

const styles = {
    textChecked: {
        backgroundColor: "#dddddd",
        textDecoration: "line-through"
    },
    textUnchecked: {
        backgroundColor: "#fafafa"
    }
};

class TodoItem extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false
        }
        this.update = this.update.bind(this)
        this.clickChecked = this.clickChecked.bind(this)
    }

    update(e) {
        console.log(e.target.value)
    }

    clickChecked(ev, checked) {
        this.setState({
            checked: checked
        }, function () {

        })
    }

    render() {
        return (
            <ListItem style={ this.state.checked ? styles.textChecked : styles.textUnchecked}
                      primaryText={this.props.item.title}
                      leftCheckbox={<Checkbox checked={this.state.checked} onCheck={this.clickChecked}/>}/>
        );
    }
}

export default TodoItem