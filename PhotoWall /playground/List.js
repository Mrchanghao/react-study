import React, { Component } from 'react';

export default class List extends Component {
   
    render() {
        return (
           <ol>
               {this.props.tasks.map((task, i) => {
                   return (
                       <li key={i}>{task}</li>
                   )
               })}
           </ol> 
        );
    }
}
