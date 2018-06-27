import React, { Component } from 'react';
import Link from './Link';
import '../styles/menu.css';

let menus = ['home', 'About', 'Service', 'Portfolio', 'Contact']

class Menu extends Component {
    
    render() {
        return (
           <ul>
               {menus.map((menu, i) => {
                   return <Link key={i} label={menu}></Link>
               })}
           </ul> 
        );
    }
}

export default Menu;