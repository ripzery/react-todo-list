import React from 'react';
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import TodoList from '../containers/TodoList'
import TodoInput from './../components/TodoInput'
import TodoItem from './../components/TodoItem'
import TodoRemoveContainer from './../containers/TodoRemoveContainer'

const styles = {
    textCenter: {
        textAlign: "center",
        float: "center"
    },
    paper: {marginTop: 56, padding: 16}
}

class TodoApp extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Row>
                <Col sm={3}/>
                <Col sm={6}>
                    <Paper style={styles.paper} zDepth={2}>
                        <div>
                            <TodoTitle />
                            <TodoInput max={20} ref="todo"/>
                            <TodoList />
                            <TodoRemoveContainer />
                        </div>
                    </Paper>
                </Col>
            </Row>
        );
    }
}

const TodoTitle = () => <h1 style={styles.textCenter}>อันนี้ต้องจด</h1>;


/* Connect todo app to redux */

export default TodoApp;