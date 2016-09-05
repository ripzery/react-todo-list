import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import reducer from './app/reducers/TodoReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);