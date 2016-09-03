import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import TodoApp from './TodoApp'

injectTapEventPlugin();

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