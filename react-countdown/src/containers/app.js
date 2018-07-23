import React, { Component } from 'react';
import '../styles/app.css'
import CountDown from '../components/Countdown';

class App extends Component {
    
    render() {
      const currentDate = new Date();
      const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 24) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

        return (
          <div>
            <h3>크리스마스 Coming Soon~~!!</h3>
            <CountDown date={`${year}-12-25`} />
          </div>
        );
    }
}

export default App;
