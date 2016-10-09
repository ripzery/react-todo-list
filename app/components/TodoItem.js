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

const TodoItem = ({ onClick, checked, title }) => (
    <ListItem style={ checked ? styles.textChecked : styles.textUnchecked}
              primaryText={ title }
              leftCheckbox={<Checkbox checked={checked} onCheck={onClick}/>}/>
);

export default TodoItem