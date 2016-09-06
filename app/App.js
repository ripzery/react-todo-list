import React from 'react';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import TodoApp from './containers/TodoApp'

class App extends React.Component {
    render() {
        return (
                <MuiThemeProvider >
                    <TodoApp />
                </MuiThemeProvider>
        );
    }
}

export default App