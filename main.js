import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Welcome from './welcome/Welcome';
import Page404 from './app/components/Page404'
import reducer from './app/reducers/TodoReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);