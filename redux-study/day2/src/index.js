import ReactDOM from 'react-dom';
import React from 'react'
import App from './app';
import { createStore } from 'redux';
import {todoApp, visibilityFilter} from './reducer/index';
import {addTodo, ADD_TODO, COMPLETE_TODO, completedTodo, setVisibilityFilter, VisibilityFilters} from './actionTypes/actions';

// redux 공식 문서 react와 함께 사용하기 공부중

const store = createStore(todoApp, window.STATE_FROM_SERVER);


let unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type: ADD_TODO, text: 'dkfj'})
store.dispatch(completedTodo(0))
store.dispatch(addTodo('redux study'))
// store.dispatch(completedTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'))