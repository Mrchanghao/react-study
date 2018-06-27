import {VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, COMPLETE_TODO} from '../actionTypes/actions';
import { combineReducers } from 'redux';

const { SHOW_ALL } = VisibilityFilters;


const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}


export const todo = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO: 
            return [...state, {text: action.text, completed: false}];
        case COMPLETE_TODO:
            return [...state.slice(0, action.index), Object.assign({}, state[action.index], {
                completed: true
            }),
            ...state.slice(action.index + 1)
        ];
        default: 
            return state;
    }

}

export const visibilityFilter = (state =  SHOW_ALL, action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}


export const todoApp = combineReducers({
    todo,
    visibilityFilter
})
