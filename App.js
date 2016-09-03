import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';

injectTapEventPlugin();

const styles = {
    textCenter: {
        textAlign: "center",
        float: "center"
    },

    textChecked: {
        backgroundColor: "#dddddd",
        textDecoration: "line-through"
    },
    textUnchecked: {
        backgroundColor: "#eeeeee"
    },
    paper: {margin: 16, padding: 16}
}

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider >
                <TodoApp />
            </MuiThemeProvider>
        );
    }
}

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: [],
            doneList: []
        }

        this.update = this.update.bind(this);
    }

    update(e) {
        var newItem = {id: this.state.todoList.length + 1, title: this.refs.todo.refs.text.getValue(), checked: false};
        this.setState({
            todoList: this.state.todoList.concat(newItem)
        })
    }

    render() {
        let items = this.state.todoList.map(function (item) {
            return <TodoItem key={item.id} item={item}/>
        });

        return (
            <Row>
                <Col sm={3}/>
                <Col sm={6}>
                    <Paper style={styles.paper} zDepth={2}>
                        <div>
                            <TodoTitle />
                            <TodoInput max={20} ref="todo" update={this.update}/>
                            <List>
                                {items}
                            </List>
                        </div>
                    </Paper>
                </Col>
            </Row>
        );
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
                <TextField hintText="Hint Text"
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

const TodoTitle = () => <h1 style={styles.textCenter}>Todo List</h1>;

export default App