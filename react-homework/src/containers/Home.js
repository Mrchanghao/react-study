import React, { Component } from 'react';
import Guest from '../components/membership/guest';
import Trial from '../components/membership/trial';
import Member from '../components/membership/member';
import MainDrawer from '../components/MainDrawer';
import MemberShipType from '../enums/MemberShipType';
import {connect} from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     memberShip: MemberShipType.GUEST
        // }
				this.register = this.register.bind(this);
                this.unRegister = this.unRegister.bind(this);
                this.withMainDrawer = this.withMainDrawer.bind(this)
    }
    
    shouldComponentUpdate() {
        return false;
    }
    
	register(memberShipType) {
		alert('가입되었습니다')
		this.setState({
			memberShip: MemberShipType.TRIAL
		})
	}
	unRegister () {
        this.setState({
            memberShip: MemberShipType.GUEST
        })
    }	

    withMainDrawer(Component) {
        return (
            <MainDrawer>
                {Component}
            </MainDrawer>
        )
    }
    render() {
			const {GUEST, TRIAL, MEMBER} = MemberShipType
        switch(this.props.memberShip) {
            case GUEST: return this.withMainDrawer(<Guest />)
            case TRIAL: return this.withMainDrawer(<Trial />)
            case MEMBER: return this.withMainDrawer(<Member />)
            default : return <Guest />
        }
    }
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		memberShip: state.memberShip
	} // props로 추가됨
}

export default connect(mapStateToProps)(Home);