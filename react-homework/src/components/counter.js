import React, { Component } from 'react';

class Counter extends Component {
   constructor(props) {
       super(props)
   }
  
    render() {
       
        return (
            <div>
                <span>Counter</span>
                <div>
                    {this.props.children}
                </div>
                <button onClick={this.props.onClick}>Counter up</button>
                <button onClick={this.props.clicked}>Counter down</button>
            </div>
        );
    }
}

export default Counter;