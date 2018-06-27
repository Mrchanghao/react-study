import React, { Component } from 'react';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

window.id = 0;
class App extends Component {
    
    state = {
        data: []
    }

    addTodo(val){
        // Assemble data
        const todo = {text: val, id: window.id++}
        // Update data
        this.state.data.push(todo);
        // Update state
        this.setState({data: this.state.data});
      }

    removeHandler = (id) => {
       const remainder = this.state.data.filter((todo) => {
           if(todo.id !== id) return todo;
       })
       this.setState({data: remainder})
    }

    render() {
        return (
            <div>
                <Title totalCount={this.state.data.length}/>
                <TodoForm addTodo={this.addTodo.bind(this)} />
                <TodoList
                todos={this.state.data}
                remove={this.removeHandler.bind(this)}
                />
            </div>        
        );
    }
}

export default App;
