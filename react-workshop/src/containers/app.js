import React, { Component } from 'react';
import './app.css'
import Home from '../components/Home/Home';
import Header from '../components/Header/Header';


class App extends Component {
    
    render() {
        return (
          <div className='app'>
            <Header />
            <Home />
          </div>
        );
    }
}

export default App;
