import {thunk} from 'redux-thunk';

// action type 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialState = {
    counter: 0
}

// reducer 
export default (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {...state, counter: state.counter + 1}
        case DECREMENT:
            return Object.assign({}, state, {counter: state.counter - 1})
        default:
            return state;
    }
}


// action creator

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export function incrementAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export function decrementAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(decrement())
        }, 500);
    }
}

// thunk



