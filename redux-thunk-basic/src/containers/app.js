import React, { Component } from 'react';
import '../styles/app.css'
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import * as actions from '../modules';
import { incrementAsync, decrementAsync } from '../modules';
import Counter from '../components/Counter';

class App extends Component {
    
    
  
    render() {
      console.log(this.props);
      const {counter, decrementAsync, incrementAsync} = this.props;
        return (
          <div>
            <Counter counter={counter} increment={incrementAsync} decrement={decrementAsync}  />
            
          </div>
        );
    }
}

function mapStateToProps (state) {
  return {
    counter: state.counter
  }
}

const mapDispatchToprops = {
  incrementAsync,
  decrementAsync
} 

export default connect(mapStateToProps, mapDispatchToprops)(App);
