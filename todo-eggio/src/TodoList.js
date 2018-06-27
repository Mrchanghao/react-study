import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo, i) => {
        return (<Todo key={todo.id} todo={todo} remove={remove}/>)
    })

    return <ul>{todoNode}</ul>
}

export default TodoList;