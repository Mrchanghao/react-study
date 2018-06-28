import React, { Component } from 'react';
import '../styles/layout.css'
import '../../node_modules//animate.css/animate.min.css'
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
