import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
   
    render() {
        return (
					<nav className="Nav">
						<div className="Nav-menus">
							<div className="Nav-brand">
								<a className="Nav-brand-logo" href='/'>인별그램</a>
							</div>
						</div>
					</nav>
        );
    }
}

export default Header;