import React from 'react';
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoRemove from './TodoRemove'

const styles = {
    textCenter: {
        textAlign: "center",
        float: "center"
    },
    paper: {margin: 16, padding: 16}
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
            return <TodoItem key={item.id} item={item} checked={item.checked}/>
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

const TodoTitle = () => <h1 style={styles.textCenter}>อันนี้ต้องจด</h1>;

export default TodoApp;
