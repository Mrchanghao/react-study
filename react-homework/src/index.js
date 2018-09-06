import 'antd-mobile/dist/antd-mobile.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider } from 'react-redux';
import Home from './containers/Home';
import memberShipReducer from './reducers/memberShipReducer';

const store = createStore(
    combineReducers({
    memberShip: memberShipReducer
}),
compose()
)

ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('root'))


