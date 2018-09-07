import React from 'react';


const Counter = ({counter, increment, decrement}) => {
    console.log(decrement);
    return (
        <div>
            <h1>{counter}</h1>
            <div className='flex'>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Counter;