import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './modules/index';
import {Provider} from 'react-redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,  composeEnhancers(
    applyMiddleware(thunk, logger),
   ));

console.log(store.getState())



ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))




