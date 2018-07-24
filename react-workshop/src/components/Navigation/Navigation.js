import React, { Component } from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';
import './Navigation.css';

class Navigation extends Component {
    
    render() {
        
        const buttonList = this.props.days.map((item, i) => <NavigationButton 
        caption={item.text}
        selected={this.props.selectedDay === item.day ? true : false}
        onClickAction={() => this.props.changeSelectedDay(item.day)}
        key={i} />)

        return (
            <div className='navigation'>
                {buttonList}
            </div>
        );
    }
}

export default Navigation;