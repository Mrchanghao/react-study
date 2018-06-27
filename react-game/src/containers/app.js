import React, { Component } from 'react';
import '../styles/layout.css'
import Quiz from '../components/Quiz';
class App extends Component {
    
    render() {
       
        return (
          <div className='App '>
            <Quiz />
          </div>
        );
    }
}

export default App;
