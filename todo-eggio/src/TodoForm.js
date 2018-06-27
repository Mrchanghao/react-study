import React from 'react';

const TodoForm = ({addTodo}) => {
    let input;

    return (
       <form onSubmit={(e) => {
           e.preventDefault();
           addTodo(input.value);
           input.value = '';
       } }>
        <input className='form-control col-md-12' ref={node => {
            input = node;
        }} />
       </form>
    )
}

export default TodoForm;