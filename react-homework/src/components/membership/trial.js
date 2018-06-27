import React, {Component} from 'react';
import MemberContent from './memberContent';
import { Button } from 'antd-mobile';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import {unRegister} from '../../action/memberShipAction'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
	bottom                : 'auto',
	maxWidth: '50%',
	height: 'auto',
    marginRight           : '-50%',
	transform             : 'translate(-50%, -50%)',
	backgroundColor: 'rgba(0, 0, 0, 0.3)',
  }
};

Modal.setAppElement('#root')

class Trial extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			isOpen: false
		 };
		 this.modalOpen = this.modalOpen.bind(this);
		 this.modalClose = this.modalClose.bind(this)
	}
	modalOpen() {
		this.setState({isOpen: true})
	}
 
	modalClose() {
		this.setState({isOpen: false})
	}

	// unRegister() {
	// 	this.setState({
	// 		isOpen: false
	// 	})

	// }

	render() {
		return (
			<div>
				<h1>고객님은 30일 무료 이용 체험 중이십니다</h1>
					<MemberContent />
					<div>
						<Button 
						type='warning'
						onClick={this.modalOpen}>해지하기</Button>
						<Modal isOpen={this.state.isOpen} style={customStyles}>
							<p>{}님 정말 무시무시한 혜택 다 포기 하시고 해지 하시 겠습니까?</p>
							<Button onClick={this.props.unRegister}>확인!!!!</Button>
							<Button onClick={this.modalClose}>취소!!!</Button>
							<div>
								<Button onClick={this.modalClose}>닫기</Button>
							</div>
						</Modal>
					</div>	
			</div>
	)
	}
}

const mapStateToProps = (state) => {
	return {

	}
}
const mapDispatchToProps = {
	unRegister
}

export default connect(mapStateToProps, mapDispatchToProps)(Trial);

