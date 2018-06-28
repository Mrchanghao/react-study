import React, { Component } from 'react';
import '../styles/layout.css';
import QuizOption from './QuizOption';
import classNames from 'classnames'

class Quiz extends Component {

	constructor(props) {
		super(props);

		let riddle = this.playGame();
		let correct = false;
		let gameOver = false
		this.state = {
			riddle,
			correct,
			gameOver
		}
		this.renderOptions = this.renderOptions.bind(this);
		this.checkResult = this.checkResult.bind(this);
		this.renderMessage = this.renderMessage.bind(this)
		this.playGame = this.playGame.bind(this)
		this.play = this.play.bind(this)
	}
	randomNumber(min, max) {
		return Math.floor(Math.random() * (max- min + 1)) + min;
	}
	generateRandomOption(sum) {
		
		let resultsArr = [];
		let randomNumberArr = [];

		while(randomNumberArr.length <= 3) {
			let randomNumber = this.randomNumber(1, 19)
			if(randomNumberArr.indexOf(randomNumber) > -1 ) continue; 
				randomNumberArr.push(randomNumber)
		}

		

		for(let i = 0; i < 3; i++) {
			let result = sum;
			let addSubstract = this.randomNumber(0, 1);
			if(addSubstract === 1) {
			// add number result
				result += randomNumberArr[i];
				resultsArr.push(result);
			} else {
				result -= randomNumberArr[i];
				resultsArr.push(result);
			}
		}
		
		console.log(resultsArr);
		return resultsArr;
	}
	
	playGame() {

		let field1 = this.randomNumber(20, 50)
		let field2 = this.randomNumber(20, 50)
		let answer = field1 + field2
		let resultsArr = this.generateRandomOption(answer)
		resultsArr.push(answer);
		resultsArr.sort((a, b) => {
			return 0.5 - Math.random()
		})
		console.log(resultsArr)
		
		let riddle = {
			resultsArr,
			field1, 
			field2,
			answer
		}

		if(this.state && this.state.riddle) {
			this.setState({riddle})
		} else {
			return riddle
		}
	}

	checkResult(option) {
		console.log('clicked' + option);
		console.log(option)
		if(this.state.riddle.answer === option) {
			console.log('correct')
			this.setState({correct: true, gameOver: true})
		} else {
			console.log('wrong')
			this.setState({correct: false, gameOver: true})
		}
	}

	renderOptions() {
		return(
			<div className='options'>
				{/* <QuizOption />
				<QuizOption />
				<QuizOption />
				<QuizOption />	 */}
				{this.state.riddle.resultsArr.map((v, i) => (
					<QuizOption key={i} result={v} checkResult={() => this.checkResult(v)} />
				))}
			</div>
		)
	}

	renderMessage() {
		if(this.state.correct) {
			return (
				<h3>you are <b>correct</b>! hit the play again Button</h3>
			)
		} else {
			return (
				<h3>you are <b>wrong</b>! hit the play again Button</h3>	
			)
		}
	}

	play() {
		this.setState({
			correct: false,
			gameOver: false
		})
		this.playGame();
	}

	render() {
		return (
			<div className='quiz'>
				<div className='quiz-content'>
					<p className='question'> 
					<span className='text-info'> {this.state.riddle.field1}</span> 더하기
					 <span className='text-info'> {this.state.riddle.field2}</span>의 값은?</p>
					{this.renderOptions()}
					<p className='status'>correct: {this.state.correct ? 'Correct' : 'Wrong'} </p>
					<p className='status'>gameOver: {this.state.gameOver ? 'gameOver' : 'not yet'} </p>
				</div>
				<div className={classNames("after", 
				{"hide": !this.state.gameOver}, 
				{"wrong animated rubberBand": !this.state.correct}, 
				{"correct animated rubberBand": this.state.correct}
				)}>
					{this.renderMessage()}
				</div>
				<div className='play-again'>
					<button
					onClick={this.play}
					className='button'>Play Again</button>
				</div>
			</div>
		)
	}   
}

export default Quiz;