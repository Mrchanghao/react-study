import React from 'react'
import '../styles/Button.css'

const Button = (props) => {
    return (
        <button
        onClick={props.onClick}
        className={`${props.type || ''} btn`}>{props.children}</button>
    )
}

export default Button;