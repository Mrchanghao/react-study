import React, { Component } from 'react';

class Form extends Component {

	state = {
		email: '',
		name: '',
	
	}

	emailHandler(e) {
		this.setState({
			email: e.target.value
		})
	}
	nameHandler(e) {
		this.setState({
			name: e.target.value
		})
	}

	submitHandler(e) {
		console.log('	data is submitted', this.state);
		this.setState({
			email: '',
			name: '',
			
		})
	}
    render() {
        return (
          <form onSubmit={this.submitHandler.bind(this)}>
						<label>{this.props.email}</label>
						<input
						onChange={this.emailHandler.bind(this)}
						name='email' value={this.state.email} />
						<label>{this.props.name}</label>
						<input
						onChange={this.nameHandler.bind(this)}
						name='name' value={this.state.name} />
					
						<button>Submit</button>
					</form>
        );
    }
}

export default Form;

// 단 방향 바인딩 
// 양 방향 바인딩