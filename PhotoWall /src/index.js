import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import Main from './Components/Main';
import {BrowserRouter } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        )
    }
}


ReactDOM.render( <App /> , document.getElementById('root'))