import React from 'react'
import './NavigationButton.css';

const NavigationButton = (props) => (
    <button className='navigationButton'>{props.caption}</button>
)

export default NavigationButton;