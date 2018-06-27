import React, { Component } from 'react';
import '../styles/app.css'
import Menu from '../component/Menu';
import Form from '../component/Form';

class App extends Component {
    
    render() {
       
        return (
          <div>
            <Menu></Menu>
            <Form name='name' email='email' />
          </div>
        );
    }
}

export default App;
