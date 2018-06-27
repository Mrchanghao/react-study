import {ADD_POST, DELETE_POST} from '../actions/actions';

// reducer
export default function postReducer(state = [], action) {
  switch(action.type) {
		case ADD_POST:
			return [...state, action.payload];
		case DELETE_POST:
			return state.filter(post => post.id !== action.payload.id);
		default: 
			return state;
	}
}