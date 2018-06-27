import React from 'react';

const QuizOption = (props) => {
		return (
			<div className='fields' onClick={props.checkResult}>
				<div className='field-block'>{props.result}</div>
			</div>
		)
	}


export default QuizOption;