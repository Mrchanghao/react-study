import React, { Component } from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';


class Navigation extends Component {
    
    render() {
        
        const buttons = [
            { text: '20th June' },
            { text: '21th June' },
            { text: '22th June' },
        ]

        const buttonList = buttons.map((button, i) => <NavigationButton key={i} caption={button.text} />)

        return (
            <div className='navigation'>
                {buttonList}
            </div>
        );
    }
}

export default Navigation;