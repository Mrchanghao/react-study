import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';


class Home extends Component {
    render() {
        return (
            <div className='home'>
                <p className='home-info'>
                    lorem>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d
                </p>
                <Navigation days={this.props.days} />
            </div>
        );
    }
}

export default Home;