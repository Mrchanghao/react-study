import React, { Component } from 'react';
// import Button from '../Button';
import Modal from 'react-modal';
import {Button, WingBlank} from 'antd-mobile';
import {connect} from 'react-redux';
import {changeMembership} from '../../action/memberShipAction'
import MemberShipType from '../../enums/MemberShipType';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

class Guest extends Component {
   constructor(props) {
       super(props);
       this.state = {
				 isOpen: false
			 }
			 this.modalOpen = this.modalOpen.bind(this);
			 this.modalClose = this.modalClose.bind(this);
	 }
	 
	 modalOpen() {
		 this.setState({isOpen: true})
	 }
	//  afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }
	 modalClose() {
		 this.setState({isOpen: false})
	 }
    render() {
        return (
           <div>
               <h1>고객님은 회원이 아니에여</h1>
               <WingBlank>
			   <div>
			   <Button 
				onClick={this.modalOpen}>
					혜택보기
				</Button>
				 </div>			 	
               <div>
				<Button 
					type='primary'
					onClick={() => this.props.changeMembership(MemberShipType.TRIAL)}>trial가입</Button>
				<Button 
					type='danger'
					onClick={() => this.props.changeMembership(MemberShipType.MEMBER)}>정회원가입</Button>			
			   </div>
			   </WingBlank>
				  <Modal
					isOpen={this.state.isOpen}
          			style={customStyles}
        				>
					<div>
					  <Button onClick={this.modalClose}>닫기</Button>
					</div>
					<div>헤택이 무시무시함</div>
				  </Modal>
           </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		memberShip: state.memberShip
	}
}

const mapDispatchToProps =  {
	changeMembership
}

export default connect(mapStateToProps, mapDispatchToProps)(Guest);