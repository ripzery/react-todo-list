import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import TodoReducer from './app/reducers/TodoReducer'
import {createStore} from 'redux'

const Counter = ({value, onIncrement, onDecrement}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const store = createStore(TodoReducer);

const render = () => {
    ReactDOM.render(<Counter
        value={store.getState()}
        onIncrement={() =>
        store.dispatch({
            type: 'INCREMENT'
        })
    }
        onDecrement={() =>
        store.dispatch({
            type: 'DECREMENT'
        })
    }
    />, document.getElementById('app'))
};

render();

store.subscribe(render);
