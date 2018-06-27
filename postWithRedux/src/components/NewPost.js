import React, { Component } from 'react';

class NewPost extends Component {
  constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		}
		this.submitHandler = this.submitHandler.bind(this);
		this.resetHandler = this.resetHandler.bind(this);
		this.inputChangeHandler = this.inputChangeHandler.bind(this);
	}
	inputChangeHandler(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	submitHandler(e) {
		e.preventDefault();
		if(this.state.title.trim() && this.state.body.trim()) {
			this.props.onAddPost(this.state);
			this.resetHandler();
		}
		console.log(this.state)
	}

	resetHandler() {
		this.setState({
			title: '',
			body: ''
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div className='form-group'>
						<input type='text' className='form-control'
						value={this.state.title}
						onChange={this.inputChangeHandler}
						name='title' />
					</div>
					<div className='form-group'>
						<textarea
						name='body'
						cols='19'
						row='8'
						className='form-control'
						value={this.state.body}
						onChange={this.inputChangeHandler}
						/>
					</div>
					<div className='form-group'>
						<button type='submit' className='btn btn-primary'>Add Post</button>
						<button 
						onClick={this.resetHandler}
						type='button' className='btn btn-warning'>reset</button>
					</div>
				</form>
			</div>
		)
	}
}

export default NewPost;