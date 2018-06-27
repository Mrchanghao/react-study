import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import rootReducer from './reducers/index';

const store = createStore(rootReducer)

const app = <Provider store={store}><App /></Provider>

ReactDOM.render(app, document.getElementById('root'))




