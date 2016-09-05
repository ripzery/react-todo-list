import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import TodoReducer from './app/reducers/TodoReducer'
import {createStore} from 'redux'

ReactDOM.render(<App />, document.getElementById('app'));