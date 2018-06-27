import React, { Component } from 'react';

const RadioGroup = (props) => {
    return (
        <div>
            <input />
        </div>
    )
}

const Radiobutton = (props) => {
    return(
        <label>
            <input type='radio' value={props.value} />
            {props.label}
        </label>
    )
}



export default RadioGroup;