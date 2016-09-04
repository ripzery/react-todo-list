import { CreateStore } from 'redux'

const counter = (state = 0, action) =>{
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

expect(0, {type: 'INCREMENT'}).equals(1);