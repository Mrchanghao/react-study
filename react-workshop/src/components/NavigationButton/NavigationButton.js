import React from 'react'
import './NavigationButton.css';

const NavigationButton = (props) => (
    <button className='navigationButton' onClick={props.onClickAction}>{props.caption}</button>
)

export default NavigationButton;