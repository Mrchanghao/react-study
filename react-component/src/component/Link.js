import React from 'react'


let styles = {
    margin: '10px',
    padding: '0',
    color: 'black',
    cursor: 'pointer'
}

let linkStyle = {
    textDecoration: 'none'
}

const Link = (props) => {
    return (
        <li style={styles}>
            <a style={linkStyle} href='#'>{props.label}</a>
        </li>
    )
}

export default Link;