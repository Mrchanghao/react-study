import React from 'react';
import ReactDOM from 'react-dom';


class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }
    getName() {
        return this.firstName + this.lastName;
    }
}


const john = new Developer('lee', 'Chang Hao')

const key = 'name';

const user = {
    [key]: 'chang min'
    // [key] == 'name'
}


class ExplainBinding extends React.Component {
    constructor() {
        super()
        this.onClickMe = this.onClickMe.bind(this)
    }
    onClickMe() {
        console.log(this);
    }
    render() {
        return(
            <button
        onClick={this.onClickMe}
        type='button'
        >Click</button>
        )
    }
}

ReactDOM.render(<ExplainBinding  />, document.getElementById('root'))