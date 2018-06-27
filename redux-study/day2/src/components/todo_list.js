import React from 'react';
import Todo from './todo';

const TodoList = ({todos}) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
    </ul>
)

export default TodoList;