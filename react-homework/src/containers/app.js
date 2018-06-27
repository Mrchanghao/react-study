import React, { Component } from 'react';
import '../styles/app.css'
import Counter from '../components/counter';
import Button from '../components/Button';
import Modal from '../components/Modal';

class App extends Component {
    state = {
        count: 1000,
        count2: 2000,
        count3: 0,
        openModal: false
    }
    shouldComponentUpdate() {
        console.log('updated')

        return true;
    }
    counterUp1 = (count) => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    counterDown1 = (count) => {
        this.setState({
            count: this.state.count - 1
        })
    }
    counterUp2 = (count) => {
        this.setState({
            count2: this.state.count2 + 1,
        })
    }
    // 함수 형식으로 setState 변환 암기
    counterDown2 = (count) => {
        this.setState((state) => ({
            count2: state.count2 - 1
        }))
    }
    // modal event
    toggleModal = (e) => {
        e.preventDefault();
        this.setState((state) => ({openModal: !state.openModal}))
    }
    render() {
       
        return (
          <div>
            <Counter clicked={this.counterDown1} onClick={this.counterUp1}>{this.state.count}</Counter>
            <Counter clicked={this.counterDown2} onClick={this.counterUp2}>{this.state.count2}</Counter>
            <Counter>
                {this.state.count3}
                <div>
                <Button
                type='primary'
                onClick={() => this.setState({count3: this.state.count3 + 1})}>+</Button>
                <Button onClick={() => this.setState({count3: this.state.count3 - 1})}>-</Button>
                </div>
            </Counter>
            <Button type='primary'>
                <strong>button1</strong>
                <span>111</span>
            </Button>
            <Button onClick={() => console.log('clicked')} type='danger'>버튼2</Button>
            <Button type='warning'>버튼3</Button>
            <Button>버튼3</Button>
            <div>
                <Button onClick={this.toggleModal}>open Modal</Button>
            </div>
            <Modal show={this.state.openModal} onClose={this.toggleModal}>
            this is my first modal
            </Modal>
          </div>
        );
    }
}

export default App;
// home.js 만들고
// 회원의 상태는 3가지 --> guest tiral, member
